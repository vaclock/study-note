import {defineConfig} from 'rollup'
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import pluginClean from './plugins/rollup-plugin-clean.mjs';
/**
 * @type {import('rollup').RollupOptions;}
 */
export default defineConfig({
  input: './src/index.js',
  output: {
    format: 'esm',
    dir: 'dist',
    entryFileNames: '[name]-[hash:8].js'
  },
  plugins: [
    resolve(), // 解析node_modules中的依赖
    commonjs(), // 转换 CommonJS 模块为 ES6
    pluginClean({dir: 'dist'})
  ]
})