const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const htmlWebPackPlugin = new HtmlWebPackPlugin({
    template: './src/client/index.html',
    filename: './index.html'
});

module.exports = {
    mode: 'development',
    entry: './src/client/index.js',
    output: {
        path: path.resolve('dist'),
        filename: '[name].js'
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
            }
            }, {
            test: /\.css$/,
            use: ['css-loader', 'style-loader']
            }
        ]
    },
    plugins: [htmlWebPackPlugin]
};