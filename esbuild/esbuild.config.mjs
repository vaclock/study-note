import esbuild from 'esbuild'

esbuild.esbuild({
    // 入口
    entryPoint: ['src/App.tsx'],

    // 输出文件
    outfile: './dist/App.js',

    // 是否需要打包
    bundle: false,

    // 是否需要压缩
    minify: false,

    // 是否需要sourcemap
    sourcemap: true,

    // 指定目标
    target: [],

    // 指定loader
    loader: {
        '.png': 'dataurl'
    }
})