const esbuild = require('esbuild');
const path = require('path');
const fs = require('fs');

// const isDev = process.env.NODE_ENV === 'development';

const hmrPlugin = {
  name: 'hmr',
  setup(build) {
    // if (!isDev) return;

    build.onLoad({ filter: /\.js$/ }, async (args) => {
      let contents = await fs.promises.readFile(args.path, 'utf8');
      // const relativePath = path.relative(process.cwd(), args.path).replace(/\\/g, '/');
      contents += `
if (import.meta.hot) {
  import.meta.hot.accept();
}

if (window.__HMR_WEBSOCKET__) {
  if (!import.meta.hot) {
    import.meta.hot = {
      accept(callback) {
        this._acceptCallback = callback;
      },
      applyUpdate(newModule) {
        if (this._acceptCallback) {
          this._acceptCallback(newModule);
        }
      }
    };
  }

  const socket = new WebSocket('ws://localhost:8999');
  socket.addEventListener('message', (event) => {
    const data = JSON.parse(event.data);
    if (data.type === 'reload') {
      import('${args.path}').then((newModule) => {
        import.meta.hot.applyUpdate(newModule);
      });
    }
  });
}
`;
      return { contents, loader: 'js' };
    });
  },
};

esbuild.context({
  entryPoints: ['src/main.js'],
  bundle: true,
  format: 'esm',
  outfile: 'public/dist/bundle.js',
  // sourcemap: isDev,
  plugins: [hmrPlugin],
}).then((context) => {
  // if (isDev) {
    context.watch();
    context.serve({
      port: 8899,
      host: 'localhost',
      servedir: './public',
    }).then((server) => {
      console.log(`服务器运行在 http://${server.host}:${server.port}`);
    });
  // } else {
  //   console.log('构建完成。');
  // }
}).catch(() => process.exit(1));
