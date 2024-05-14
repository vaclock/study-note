- 命令行
`npx esbuild src/index.ts --outfile=dist/index.js`

`npx esbuild src/index.ts --outdir=dist --target=es6 --bundle`

`npx esbuild src/index.ts --outdir=dist --bundle  --minify`

`npx esbuild src/App.tsx --outdir=dist --bundle  --minify`

`npx esbuild src/App.ts --outdir=dist --bundle  --loader:.ts=tsx`

`npx esbuild src/App.ts --outdir=dist --bundle  --loader:.svg=dataurl`
