const esbuild = require('esbuild');

const hmrPlugin = {
  name: 'hmr',
  setup(build) {
    build.onLoad({ filter: /\.js$/ }, async (args) => {
      const fs = require('fs');
      let contents = await fs.promises.readFile(args.path, 'utf8');
      contents += `
if (import.meta.hot) {
  import.meta.hot.accept((newModule) => {
    console.log('Module updated:', newModule);
  });
}

if (window.__HMR_WEBSOCKET__) {
  const socket = new WebSocket('ws://localhost:8080');
  socket.addEventListener('message', (event) => {
    const data = JSON.parse(event.data);
    if (data.type === 'reload') {
      import('${args.path}').then((newModule) => {
        document.getElementById('app').textContent = newModule.greet();
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
  outfile: 'public/dist/bundle.js',
  sourcemap: true,
  plugins: [hmrPlugin],
}).then((context) => {
  return context.watch();
}).catch(() => process.exit(1));
