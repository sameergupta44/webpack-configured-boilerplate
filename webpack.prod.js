const path = require('path');
const common = require('./webpack.common');
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = merge(common, {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    optimization: {
        minimizer: [
            new OptimizeCssAssetsPlugin(),
            new TerserPlugin()
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './src/html/template.html',
            minify: {
                removeAttributeQuotes: true,
                collapseWhitespace: true,
                removeComments: true
            }
        })
    ],
    module: {
        rules: [
            {
                test: /\.scss$/, //$ means end of file name
                use: [
                    MiniCssExtractPlugin.loader,// 3) extract css into files
                    'css-loader', // 2) turns css into commonjs
                    'sass-loader' // 1) turns sass into css
                ]
            },
        ]
    }
});