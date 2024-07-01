const esbuild = require('esbuild');
const fs = require('fs');

const hmrPlugin = {
  name: 'hmr',
  setup(build) {
    build.onLoad({ filter: /\.(js|jsx|ts|tsx|vue)$/ }, async (args) => {
      let contents = await fs.promises.readFile(args.path, 'utf8');
      console.log(args.path, 'args.path')
      if (args.path.endsWith('.js')) {
        contents += `

          // if (window.__HMR_WEBSOCKET__) {
            if (!import.meta.hot) {
              console.log('aaa')
              import.meta.hot = {
                accept(callback) {
                  if (callback) {
                    this._acceptCallback = callback;
                  }
                  console.log('accept', this._acceptCallback)
                },
                applyUpdate(newModule) {
                  console.log('aaa', this._acceptCallback);
                  if (this._acceptCallback) {
                    this._acceptCallback(newModule)
                  }
                }
              }
            }

            const socket = new WebSocket('ws://localhost:9999');
            socket.addEventListener('message', (event) => {
              const data = JSON.parse(event.data);
              console.log('message', data);
              if (data.type === 'reload' && data.path === ${JSON.stringify(args.path)}) {
                import('${args.path}').then((newModule) => {
                  console.log('reload', newModule, ${JSON.stringify(args.path)});
                  import.meta.hot.applyUpdate(newModule);
                });
              }
            });
          // }
        `;
      }
      return { contents, loader: 'js' };
    });
  },
};

// esbuild.build({
//   entryPoints: ['src/main.js'],
//   bundle: true,
//   format: 'esm',
//   outfile: 'public/dist/bundle.js',
//   plugins: [hmrPlugin]
// }).catch(() => process.exit(1));

(async () => {
  const ctx = await esbuild.context({
    entryPoints: ['src/main.js'],
    bundle: true,
    format: 'esm',
    outfile: 'public/dist/bundle.js',
    plugins: [hmrPlugin]
  })

  await ctx.watch();

  ctx.serve({
    port: 8989,
    host: 'localhost',
    servedir: './public',
  }).then((server) => {
    console.log(` server is running as http://${server.host}:${server.port}`);
  })
})();