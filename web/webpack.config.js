const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const path = require('path');

const htmlPlugin = new HtmlWebPackPlugin({
    template: "src/index.html",
    filename: "index.html"
});

module.exports = (env, argv) => {
    return {
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: [
                        {loader: "babel-loader"}
                    ]
                },
                {
                    test: /\.scss$/,
                    use: [
                        argv.mode == 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
                        "css-loader", // translates CSS into CommonJS
                        "sass-loader" // compiles Sass to CSS, using Node Sass by default
                    ]
                }
            ]
        },
        plugins: [
            htmlPlugin,
            new MiniCssExtractPlugin({
                filename: "main.css"
            })
        ],
        output: {
            path: path.resolve(__dirname, 'dist')
        },
        devServer: {
            proxy: {
                '/api': 'http://localhost'
            }
        }
    };
};