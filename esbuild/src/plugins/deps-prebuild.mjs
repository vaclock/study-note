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
    entryPoints: ['../index.ts'],
    // 注意依赖预构建一定要有bundle: true, 不然不会构建依赖
    bundle: true,
    loader: {
      '.ts': 'ts',
      '.tsx': 'tsx',
      '.png': 'dataurl'
    },
    plugins: [
      myPlugin(deps)
    ]
  })
  console.log(deps)
  esbuild.build({
    entryPoints: deps,
    format: 'esm',
    bundle: true,
    outdir: './my_deps-prebuild/deps'
  })
})()
