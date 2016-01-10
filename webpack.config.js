var webpack = require('webpack');

module.exports = {
    context: __dirname + '/src',
    entry: './entry.js',

    output: {
        filename: 'bundle.js',
        path: __dirname + '/build'
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ]
    }
}
