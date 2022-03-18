const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: {
        index: {
            import: './src/index.js',
            dependOn: 'shared',
        },
        another: {
            import: './src/another-module.js',
            dependOn: 'shared',
        },
        shared: 'lodash',
    },
    optimization: {
        runtimeChunk: 'single',
    },
    output: {
        filename: '[name].bundle.js',           // if this config was not here yet, you'd have to add it too
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
