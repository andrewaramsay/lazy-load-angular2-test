let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        vendor: './src/vendor.ts',
        app: './src/index.ts',
        polyfills: './src/polyfills.ts'
    },
    
    resolve: {
        extensions: ['', '.js', '.ts']
    },

    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: 'ts'
            },
            {
                test: /\.html$/,
                loader: 'html'
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'file?name=assets/[name].[hash].[ext]'
            },
            {
                test: /\.css$/,
                exclude: /src\/app\/.*.css/,
                loader: ExtractTextPlugin.extract('style', 'css?sourceMap')
            },
            {
                test: /\.css$/,
                include: /src\/app\/.*.css/,
                loader: 'raw'
            }
        ]
    },
    output: {
        path: 'build',
        publicPath: 'http://localhost:8080/',
        filename: '[name].js',
        chunkFilename: '[id].chunk.js'
    },
    
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
           name: ['app', 'vendor', 'polyfills']
        }),

        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
        
        new ExtractTextPlugin('[name].css')
    ],
    
    devServer: {
        historyApiFallback: true,
        stats: 'minimal'
    }
};