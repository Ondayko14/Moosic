const path = require("path");
const webpack = require("webpack");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
    entry: {
        app: './src/script.js',
        home: './src/pages/Home.js',
        post: './src/pages/Post.js',
        profile: './src/pages/Profile.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: __dirname + '/dist'
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
        new BundleAnalyzerPlugin({
            analyzerMode: "static"
        })
    ],
    mode: 'development'
};