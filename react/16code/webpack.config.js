const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
    module: {
        // watch: true,
        // watchOptions: {
        //     ignored: /node_modules/,
        //     aggregateTimeout: 300,
        //     poll: 1000
        // },
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
        minimize: false,
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'react',
            template: './src/index.html'
        })
    ]
}