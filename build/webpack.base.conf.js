var path = require('path'),
    commonPath = require('./commonPath'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        app: commonPath.entry
    },
    output: {
        path: commonPath.output,
        publicPath: commonPath.publicPath
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            // 自定义路径别名
            LIB: commonPath.libPath,
            DAO: commonPath.daoPath,
            CSS: commonPath.cssPath,
            DATA: commonPath.dataPath,
            LESS: commonPath.lessPath,
            IMAGE: commonPath.imgPath,
            FONTS: commonPath.fontPath,
            BUILD: commonPath.buildPath,
            UTILS: commonPath.utilsPath,
            CONSTS: commonPath.constsPath,
            ACTIONS: commonPath.actionsPath,
            SERVICES: commonPath.servicesPath,
            COMPONENTS: commonPath.componentsPath,
            CONTAINERS: commonPath.containersPath,
        }
    },
    module: {
        loaders: [
            {
                test: /\.json$/,
                loader: "json-loader",
                exclude: /node_modules/
            },
            {
                test: /\.(js|jsx|tsx)$/,
                exclude: /node_modules/,
                use: [
                    "babel-loader"
                ]
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: ['css-loader'] })
            },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: ['css-loader', 'less-loader'] }),
                exclude: /node_modules/
            },
            {
                test: /\.(svg|woff|woff2?|eot|ttf|otf)$/,
                loader: 'url-loader?limit=10240&name=fonts/[name]-[hash:6].[ext]'
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                loader: 'url-loader',
                query: {
                    limit: 10240, // 10KB 以下使用 base64
                    name: 'img/[name]-[hash:6].[ext]'
                }
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('[name].css')
    ]
};
