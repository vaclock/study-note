const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {

    // watch: true,
    // watchOptions: {
    //     ignored: /node_modules/,
    //     aggregateTimeout: 300,
    //     poll: 1000
    // },
    // mode: 'development',
    // entry: './src/index.js',
    // output: {
    //     filename: 'index.js',
    // },
    devServer: {
        open: {
        target: ['./src/index.html', 'http://localhost:8080/second.html'],
        // target: ['./src/index.html'],
        app: {
            name: 'google-chrome',
            arguments: ['--incognito', '--new-window'],
        },
      },
    },
    module: {
        rules: [
            {
                test: /.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [['@babel/preset-env', { targets: 'defaults' }]]
                    }
                }
            }
        ]
    },
    optimization: {
        minimize: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'react',
            template: './src/index.html'
        })
    ]
}