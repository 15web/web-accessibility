'use strict';

const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        "accessibility": './src/accessibility'
    },
    output: {
        path: './dist/',
        filename: "[name].js",
        library: '[name]'
    },
    watch: true,
    devtool: 'cheap-inline-module-source-map',
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ['es2015']
            }
        }, {
            test: /\.scss/,
            loader: ExtractTextPlugin.extract('style', 'css?sourceMap!postcss!sass')
        }, {
            test: /\.(jpg|jpeg|gif|png|svg)$/,
            exclude: /node_modules/,
            loader:'url?limit=1024&name=images/[name]-[hash:6].[ext]'
        }, {
            test: /\.(woff|woff2|eot|ttf)$/,
            exclude: /node_modules/,
            loader: 'url?limit=1024&name=fonts/[name].[ext]'
        }]
    },
    plugins: [
        new webpack.NoErrorsPlugin(),
        new ExtractTextPlugin('accessibility.css')
    ],
    postcss: function () {
        return [
            require('autoprefixer'),
            require('postcss-inline-svg')
        ];
    }
};
