const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: {
        app: './app.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$|\.vue$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["env"]
                    }
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader',
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "../index.html",
            inject: true,
        })
    ],
    resolve: {
        alias: {
            vue: 'vue/dist/vue.common.js'
        }
    },
    devServer: {
        contentBase: path.resolve(__dirname, "dist"),
        port: 3000
    }
};