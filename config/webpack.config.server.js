const merge = require('webpack-merge');
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const config = require('./webpack.config.base.js');

module.exports = merge.smart(config, {
    target: 'node',
    externals: [nodeExternals()],
    node: {
        __dirname: true
    },
    entry: path.resolve('./frontend/javascript/server.js'),
    output: {
        filename: 'server.js'
    },

    module: {
        rules: [
            {
                test: /\.(scss)$/,
                loader: [
                    'css-loader/locals?modules&localIdentName=[path][name]---[local]---[hash:base64:5]', 'sass-loader'
                ],
                include: path.resolve(__dirname, '../frontend')
            }
        ]
    },
});