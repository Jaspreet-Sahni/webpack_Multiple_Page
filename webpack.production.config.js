const path = require('path');
// const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin} = require('clean-webpack-plugin');
//import kiwi from './src/kiwi'
module.exports = {
    entry: {
        'hello-world':'./src/index.js',
        'kiwi':'./src/kiwi.js'
    },
        
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, './dist'),
        publicPath: ''
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.(png|jpg)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader, 'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [ '@babel/env' ],
                        plugins: [ '@babel/plugin-proposal-class-properties' ]
                    }
                }
            }
        ]
    },
    plugins: [
   
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
        }),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title : 'Hello World',
            filename: 'hello-world.html',
            chunks:['hello-world'],
            meta: {
                description: 'Hello World'
            },
            minify: false,
        }),
        new HtmlWebpackPlugin({
            title : 'kiwi',
            filename: 'kiwi.html',
            chunks:['kiwi'],
            meta: {
                description: 'kiwi'
            },
            minify: false,
        }),
    ]
};