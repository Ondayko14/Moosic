const path = require("path");
const webpack = require("webpack");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const WebpackPwaManifest = require("webpack-pwa-manifest");

module.exports = {
    entry: {
        index: './public/index.html',
        app: './src/index.js',
        feed: './src/pages/Feed.js',
        post: './src/pages/Post.js',
        profile: './src/pages/Profile.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: __dirname + '/dist'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [{
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
        new BundleAnalyzerPlugin({
            analyzerMode: "static"
        }),
        new WebpackPwaManifest({
            name: "Moosic",
            short_name: "Moosic",
            description: "Music sharing social media platform",
            start_url: "./src/index.js",
            background_color: "#D3D3D3",
            theme_color: "#ffffff",
            fingerprints: false,
            inject: false,
            icons: [{
                src: path.resolve("./assets/icons/moosic-icon-512.png"),
                sizes: [192, 512],
                destination: path.join("assets", "icons")
            }]
        })
    ],
    mode: 'development'
};