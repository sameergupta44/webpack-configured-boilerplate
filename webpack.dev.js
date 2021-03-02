const path = require('path');
const common = require('./webpack.common');
const { merge } = require('webpack-merge');
var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = merge(common, {
    mode: 'development',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/html/template.html',
        })
    ],
    module: {
        rules: [
            {
                test: /\.scss$/, //$ means end of file name
                use: [
                    'style-loader',// 3) inject style to dom
                    'css-loader', // 2) turns css into commonjs
                    'sass-loader' // 1) turns sass into css
                ]
            },
        ]
    }
});