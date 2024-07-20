// 分析模块依赖

// 将依赖转换成es模块并写到固定位置
import esbuild from 'esbuild'
const deps = []

const myPlugin = (deps) => {
  return {
    name: 'deps-prebuild',
    setup(build) {
      build.onResolve({filter: /^[^\.]/}, (args) => {
        deps.push(args.path)
      })
    }
  }
}

(async () => {
  await esbuild.build({
    write: false,
    entryPoints: ['./src/index.ts'],
    bundle: true,
    loader: {
      '.ts': 'ts',
      '.tsx': 'tsx',
      '.png': 'file'
    },
    outdir: './dist',
    plugins: [
      myPlugin(deps)
    ]
  })
  console.log(deps, 'deps')

  await esbuild.build({
    write: true,
    entryPoints: deps,
    format: 'esm',
    bundle: true,
    outdir: '.deps'
  })
})()
