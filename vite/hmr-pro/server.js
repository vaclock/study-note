const WebSocket = require('ws');
const chokidar = require('chokidar');
const path = require('path');

const wss = new WebSocket.Server({ port: 9999 });

wss.on('connection', (ws) => {
  console.log('HMR客户端已连接');
  ws.send(JSON.stringify({ type: 'connected' }));
});

const watcher = chokidar.watch(path.resolve(__dirname, 'src'));

watcher.on('change', (filePath) => {
  console.log(`文件已更改: ${filePath}`);
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify({ type: 'reload', path: filePath }));
    }
  });
});
