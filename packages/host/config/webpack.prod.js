const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const { merge } = require('webpack-merge');
const packageJson = require('../package.json');

const domain = 'https://d21y8caclyo6wc.cloudfront.net';

const prodConfig = {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js',
        publicPath: '/host/'
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'host',
            remotes: {
                landing: `landing@${domain}/landing/remoteEntry.js`
            },
            shared: packageJson.dependencies
        })
    ]
};


module.exports = merge(commonConfig, prodConfig);