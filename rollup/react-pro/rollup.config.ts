import {RollupOptions, watch} from 'rollup';
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import typescript from "@rollup/plugin-typescript";
import htmlTemplate from "rollup-plugin-generate-html-template";
import replace from "@rollup/plugin-replace";
import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";
import clear from "rollup-plugin-clear";
import postcss from 'rollup-plugin-postcss';

const config: RollupOptions = {
    input: './src/main.tsx',
    output: {
        dir: 'dist',
        format: 'esm',
        name: 'RollupReact',
        sourcemap: true
    },
    plugins: [
        nodeResolve(),
        commonjs(),
        typescript(),
        babel({
            babelHelpers: 'runtime',
            include: 'src/**',
            extensions: ['js', 'ts', 'jsx', 'tsx'],
            exclude: 'node_modules/**'
        }),
        htmlTemplate({
            template: './public/index.html',
            target: 'dist/index.html',
            attrs: ['type="module"']
        }),
        replace({
            // 需要将字符串做一下替换，不然会报错：process is not defined
            preventAssignment: true,
            "process.env.NODE_ENV": JSON.stringify("production"),
        }),
        serve('dist'),
        livereload('src'),
        clear({
            targets: ["dist"],
            watch: true
        }),
        postcss({
            extensions: [".css"], // 将scss 解析成css
            extract: true, // 将css 提取到dist目录下
            modules: true, // 增加css的模块化支持
        })
    ]
}

export default config;