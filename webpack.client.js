const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base')

const config = {

    entry: './src/client/client.js',

    output: {
        filename: 'bundle.js',
        // __dirname = current dir
        path: path.resolve(__dirname, 'public')
    }
}

module.exports = merge(baseConfig, config)