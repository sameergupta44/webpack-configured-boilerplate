const path = require('path');
// const Handlebars = require('handlebars');

module.exports = {
    mode: 'development',
    entry: {
        main: './src/app.js',
        vendor: './src/vendor/vendor.js'
    },
    module: {
        rules: [
            // {
            //     test: /\.hbs$/,
            //     loader: 'handlebars-loader',
            // },
            {
                test: /\.html$/,
                use: ["html-loader"]
            },
            {
                test: /\.(svg|png|jpg|gif)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: "[name].[hash].[ext]",
                        outputPath: "assets"
                    }
                }
            }
        ]
    }

};