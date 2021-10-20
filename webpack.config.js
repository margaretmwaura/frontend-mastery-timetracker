const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const workboxPlugin = require('workbox-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const CopyPlugin = require('copy-webpack-plugin');
const Dotenv = require('dotenv-webpack');
module.exports = {
    mode: 'development',
    entry: {
        client: [
            "./src/main.js",
        ],
    },
    output: {
        chunkFilename: '[name].[hash].js',
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        },
        extensions: ['*', '.js', '.vue', '.json']
    },
    module: {
        rules: [
            {
                test: /.(js|jsx)$/,
                include: [],
                loader: 'babel-loader'
            },
            {
                test: /.vue$/,
                loader: 'vue-loader'
            },
            //The resolve url loader is important otherwise the images will not load
            // The vue-style-loader is causing importing of scss variables from export to be empty objects
            {
                test: /\.(s*)css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    // {
                    //     loader: 'vue-style-loader'
                    // },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: "resolve-url-loader"
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                ]
            },
            {
                test: /\.(png|svg|jpg|gif|webp|jpeg)$/,
                use: [
                    //This is making the loading of images using css impossible
                    // {
                    //     loader: 'url-loader',
                    // },
                    {
                        loader: "file-loader",
                        options: {
                            name: `[name].[ext]`,
                            // Output into parent folder's directory
                            outputPath: "./img",
                        }
                    }]
            },
            //This is for loading of the various fonts
            {
                test: /\.(ttf|otf|eot|woff|woff2)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "fonts/[name].[ext]",
                        },
                    },
                ],
            },
        ]
    },
    plugins: [
        new webpack.ProgressPlugin(),
        new VueLoaderPlugin(),
        new workboxPlugin.GenerateSW({
            swDest: 'sw.js',
            clientsClaim: true,
            skipWaiting: false
        }),
        new HtmlWebpackPlugin({
            template: "./index.html",
            filename: './index.html'
        }),
        new Dotenv()
    ],
    devServer: {
        port: 5000,
        hot: true,
        historyApiFallback: true
    },
    optimization: {
        minimizer: [new TerserPlugin()],

        splitChunks: {
            cacheGroups: {
                vendors: {
                    priority: -10,
                    test: /[\\/]node_modules[\\/]/
                }
            },

            chunks: 'async',
            minChunks: 1,
            minSize: 30000,
            name: true
        }
    },
    node: {fs: 'empty'},
    externals: {
        jQuery: 'jQuery',
    },
};