const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "production",
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    devServer: {
        static: './dist',
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
