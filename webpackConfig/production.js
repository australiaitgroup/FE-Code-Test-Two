const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const commonConfig = require('./common');

const serverConfig = merge(commonConfig.server, {
    mode: 'production',
    devtool: 'source-map',
});

const clientConfig = merge(commonConfig.client, {
    mode: 'production',
    devtool: 'source-map',
    plugins: [
        new UglifyJSPlugin({
            sourceMap: true,
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production'),
        }),
    ],
});

module.exports = [serverConfig, clientConfig];
