const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const { merge } = require('webpack-merge');

const devConfig = {
    mode: 'development',
    devServer: {
        port: 8080,
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'host',
            remotes: {
                landing: 'landing@http://localhost:8081/remoteEntry.js'
            },
            shared: []
        })
    ]
};


module.exports = merge(commonConfig, devConfig);