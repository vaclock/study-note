const WebSocket = require('ws');
const chokidar = require('chokidar');
const path = require('path');

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws) => {
  console.log('HMR client connected');
});

const watcher = chokidar.watch(path.resolve(__dirname, '../src'));

watcher.on('change', (filePath) => {
  console.log(`File changed: ${filePath}`);
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify({ type: 'reload' }));
    }
  });
});
