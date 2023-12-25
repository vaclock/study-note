import { defineConfig } from 'vite';
import basicSsl from '@vitejs/plugin-basic-ssl';

// const path = require('path');

// https://cn.vitejs.dev/config/shared-options.html

/**
 * 1. 直接导出对象
 */

export default defineConfig({
    root: './src',
    // resolve: {
    //     alias: {
    //         '@': path.resolve(__dirname, './src'),
    //     }
    // }
    server: {
        // port: 3000,
        // open: './index.html'
        https: true,
    },
    plugins: [
        basicSsl()
    ]
})

