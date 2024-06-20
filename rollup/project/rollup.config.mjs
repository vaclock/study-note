import { defineConfig } from "rollup";

export default defineConfig({
    input: 'src/index.js',
    output: {
        file: 'dist/bundle.js',
        mode: 'umd',
        name: 'test'
    }
})