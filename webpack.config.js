const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: './src/index.js',
        print: './src/print.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Output Management', // Setting the title tag of the html file
            filename: 'admin.html'      // Setting the filename of the html file, now you'll have to specify "admin.html" in the URL (defaults to index.html)
        }),
    ],
};
