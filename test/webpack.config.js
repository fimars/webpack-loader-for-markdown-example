const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MarkdownLoader = require('../lib/markdownLoader');

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, "./index.js"),
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /.md$/,
                use: {
                    loader: require.resolve('../lib/markdownLoader')
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin()
    ]
}