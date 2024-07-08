const http = require('node:http')
http.createServer(function (req, res) {
  res.writeHead(200, {
    'Content-Type': 'application/json; charset=utf-8',
  })
  const data = {
    name: 'react',
    data: '<Fragment><h1>Hello World</h1><Image src="http://conf2017.reactjs.org/static/media/reactconf-logo-2c-black@2x.68a3c052.png"><Fragment>'
  }
  res.end(data.data)
}).listen(80)