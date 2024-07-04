import esbuild from 'esbuild'

(async () => {
  const ctx = await esbuild.context({
    entryPoints: ['./src/index.js'],
    outdir: './public/dist',
    bundle: true,
    // format: 'esm',
    minify: false,
    sourcemap: true,
    loader: {
      '.js': 'jsx',
    },
    jsxDev: true,
    jsx: 'automatic',
    // splitting: true,
  })
  await ctx.watch()
  ctx.serve({
    port: 8088,
    host: 'localhost',
    servedir: './public',
  }).then(server => {
    console.log(`server running at ${server.host}:${server.port} `)
  })
})();