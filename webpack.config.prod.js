const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "production",
    entry: {
        index: './src/index.ts',
        another: './src/another-module.ts',
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
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
            myPageHeader: 'Hello World - using "webpack.config.prod.js"',
            template: './src/index.html'
        }),
    ],
};
