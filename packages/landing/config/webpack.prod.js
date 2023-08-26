const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const { merge } = require('webpack-merge');

const prodConfig = {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js',
        publicPath: '/landing'
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'landing',
            filename: 'remoteEntry.js',
            exposes: {
                './LandingApp': './src/bootstrap'
            },
            shared: []
        })
    ]
};


module.exports = merge(commonConfig, prodConfig);