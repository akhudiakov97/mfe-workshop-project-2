const HTMLWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const { merge } = require('webpack-merge');

const devConfig = {
    mode: 'development',
    devServer: {
        port: 8081,
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'landing',
            filename: 'remoteEntry.js',
            exposes: {
                './LandingApp': './src/bootstrap'
            },
            shared: []
        }),
        new HTMLWebpackPlugin({
            template: './public/index.html'
        }),
    ]
};


module.exports = merge(commonConfig, devConfig);