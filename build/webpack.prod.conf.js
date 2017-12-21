var path = require("path"),
    webpack = require('webpack'),
    commonPath = require('./commonPath'),
    config = require('./webpack.base.conf'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

config.output.filename = '[name].[chunkhash:6].js';
config.output.chunkFilename = '[id].[chunkhash:6].js';

config.output.publicPath = './';

config.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
        output: {
          comments: false,
        },
        compress: {
          warnings: false
        }
    }),
    new HtmlWebpackPlugin({
        filename: path.join(commonPath.dist, "index.html"),
        template: commonPath.indexHTML,
        chunksSortMode: 'none'
    }),
    new webpack.DefinePlugin({
        'process.env': {
            'NODE_ENV': JSON.stringify('production')
        }
    })
);

module.exports = config;
