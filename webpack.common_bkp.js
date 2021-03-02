const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = (env) => {
    console.log('NODE_ENV: ', env.NODE_ENV);
    console.log('Production: ', env.production);
    console.log('mode: ', (env.production? 'production':'development'));
    return {
        mode: env.production?'production':'development',
        // devtool: 'none',
        entry: './src/app.js',
        output: {
            filename: 'main.[contenthash].js',
            path: path.resolve(__dirname, 'dist')
        },
        plugins: [new HtmlWebpackPlugin({
            template: './src/html/template.html'
        })],
        module: {
            rules: [
                {
                    test: /\.scss$/, //$ means end of file name
                    use: [
                        'style-loader',// 3) inject style to dom
                        'css-loader', // 2) turns css into commonjs
                        'sass-loader' // 1) turns sass into css
                    ]
                }
            ]
        }
    }
};