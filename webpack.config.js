var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    devtool: 'source-map',
    entry: [
        './app/app.js'
    ],
    resolve: {
        root: './',
        alias: {
            data: 'app/mock/data.js'
        }
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'ng-lesson',
            template: './app/index.html',
            inject: 'body'
        }),
        new webpack.NoErrorsPlugin(),
        new ExtractTextPlugin('../css/style.css')
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel?presets[]=es2015',
                exclude: /node_modules/
            },
            {
                test: /\.html$/,
                loader: 'html'
            },
            {
                test: /\.styl/,
                loader: ExtractTextPlugin.extract('style', 'css!autoprefixer!stylus?resolve url')
            }]
    }
};