import {
    defineConfig,
    UserConfig,
    ConfigEnv,
    loadEnv
} from 'vite';
import basicSsl from '@vitejs/plugin-basic-ssl';

// const path = require('path');

// https://cn.vitejs.dev/config/shared-options.html

/**
 * 1. 直接导出对象
 */

// export default defineConfig({
//     // root: '',
//     // resolve: {
//     //     alias: {
//     //         '@': path.resolve(__dirname, './src'),
//     //     }
//     // }
//     server: {
//         // port: 3000,
//         open: './index.html',
//         https: true,
//     },
//     plugins: [
//         basicSsl()
//     ]
// })


/**
 * 2. 返回一个函数
 */
export default defineConfig((config: ConfigEnv): UserConfig => {

    // ConfigEnv.command 值在开发环境和预览环境 为 serve，而在构建环境是 build。

    const root = process.cwd();
    const mode = config.mode;

    const env = loadEnv(mode, root, '');
    console.log(env);

    console.log(config, '\n');
    return {
        root,
        server: {
            open: './public/index.html',
        }
    }
})
