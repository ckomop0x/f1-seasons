const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const autoprefixer = require('autoprefixer');
const loaders = [
    'style-loader',
    {
        loader: require.resolve('typings-for-css-modules-loader'),
        options: {
            modules: true,
            importLoaders: 1,
            localIdentName: '[name]__[local]___[hash:base64:5]',
            namedExport: true,
            camelCase: true
        },
    },
    {
        loader: 'postcss-loader'
    }
];
const PRODUCTION = process.env.NODE_ENV === 'production';

module.exports = {
    mode: PRODUCTION ? 'production' : 'development',
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: true
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    entry: {
        index: PRODUCTION ? ['./src/scripts/index.tsx'] : ['./src/scripts/index.tsx', 'webpack-hot-middleware/client'],
        vendor: ['react', 'react-dom']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: PRODUCTION ? 'js/[name].[hash].bundle.js' : 'js/[name].bundle.js'
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx']
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                loader: 'ts-loader'
            },
            {
                test: /\.css/,
                use: loaders
            },
            {
                test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
                use: 'url-loader'
            },
            {
                enforce: 'pre',
                test: /\.js$/,
                loader: 'source-map-loader'
            }
        ]
    },
    plugins: PRODUCTION ? [
        new HtmlWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Formula 1 winners application',
            description: 'Formula 1 winners application',
            viewport:
                'width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no,viewport-fit=cover',
            font: '<link href="https://fonts.googleapis.com/css?family=Exo+2|Roboto" rel="stylesheet">',
            filename: 'index.html',
            template: path.resolve(__dirname, 'src/views/index.ejs')
        }),
        new MiniCssExtractPlugin({
            filename: '/css/[name].css',
            chunkFilename: '/css/[id].css'
        }),
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: [
                    autoprefixer()
                ]
            }
        })
    ] : [
        new HtmlWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Formula 1 winners application',
            description: 'Formula 1 winners application',
            viewport:
                'width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no,viewport-fit=cover',
            font: '<link href="https://fonts.googleapis.com/css?family=Exo+2|Roboto" rel="stylesheet">',
            filename: 'index.html',
            template: path.resolve(__dirname, 'src/views/index.ejs')
        }),
        new webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin({
            filename: '/css/[name].css',
            chunkFilename: '/css/[id].css'
        }),
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: [
                    autoprefixer()
                ]
            }
        })
    ]
};
