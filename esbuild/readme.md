- 命令行
`npx esbuild src/index.ts --outfile=dist/index.js`

`npx esbuild src/index.ts --outdir=dist --target=es6 --bundle`

`npx esbuild src/index.ts --outdir=dist --bundle  --minify`

`npx esbuild src/App.tsx --outdir=dist --bundle  --minify`

`npx esbuild src/App.ts --outdir=dist --bundle  --loader:.ts=tsx`

`npx esbuild src/App.ts --outdir=dist --bundle  --loader:.svg=dataurl`

- 命令行服务区
`npx http-server -o -c-1` : -o 浏览器打开 -c-1 清除缓存


- esbuild插件机制
开始(onStart) -> 解析文件(onResolve) -> 读取文件(onLoad) -> 输出文件(onEnd) -> 结束(onDispose)
```shell
onStart: [Function: onStart],
onEnd: [Function: onEnd],
onResolve: [Function: onResolve],
onLoad: [Function: onLoad],
onDispose: [Function: onDispose],
```