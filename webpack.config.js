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
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: [ '@babel/preset-react', '@babel/preset-env' ],
                },
            }
            }, {
            test: /\.css$/,
            use: ['css-loader', 'style-loader']
            }
        ]
    },
    plugins: [htmlWebPackPlugin]
};