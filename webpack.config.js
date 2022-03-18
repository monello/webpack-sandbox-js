const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: {
        index: './src/index.js',
        another: './src/another-module.js',
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
    output: {
        filename: '[name].bundle.js',           // if this config was not here yet, you'd have to add it too.
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
    },
    optimization: {
        runtimeChunk: 'single'
    },
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            title: 'Development',
            myPageHeader: 'Hello World',
            template: './src/index.html'
        }),
    ],
};
