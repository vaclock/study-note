import { defineConfig } from "rollup";
import { nodeResolve } from '@rollup/plugin-node-resolve';
import babel from "@rollup/plugin-babel"
import commonjs from '@rollup/plugin-commonjs';

/**
 * @type {import('rollup').RollupOptions;}
 */
export default defineConfig({
    input: 'src/index.js',
    // - output
    // 1. 单bundle
    output: {
        // file: 'dist/bundle.js',
        dir: 'dist/esm',
        format: 'esm',
        entryFileNames: '[name]-[hash:8].js',
        chunkFileNames: 'chunk-[name]-[hash:8].js',
        name: 'bundle',
        // 1. 对象
        // manualChunks: {
        //     'lodash-es': ['lodash-es']
        // },
        // 2. fun
        manualChunks: (id) => {
            if (id.includes('lodash-es')) {
                return 'lodash-es'
            }
        }
    },
    // 2.多bundle
    // output: [
    //     {
    //         file: 'dist/iife/bundle.js',
    //         format: 'iife',
    //     },
    //     {
    //         file: 'dist/amd/bundle.js',
    //         format: 'amd',
    //     },
    //     {
    //         file: 'dist/esmodule/bundle.js',
    //         format: 'esm',
    //     }
    // ]
    // external: ['lodash-es'],
    plugins: [
        nodeResolve(),
        commonjs(),
        babel({
            babelHelpers: 'runtime',
            include: 'src/**',
            exclude: 'node_modules/**',
            extensions: ['js', 'ts']
        })
    ],
})