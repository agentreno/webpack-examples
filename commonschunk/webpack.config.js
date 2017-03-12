var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        app: './app.js'
        // There is an implicit vendor chunk as well added by
        // CommonsChunkPlugin
    },
    output: {
        filename: '[name].[chunkhash].bundle.js'
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            // Implicit extra chunk here
            name: 'vendor',
            minChunks: function (module) {
                // Only put it into the common vendor chunk if it came from
                // node_modules
                return module.context && module.context.indexOf('node_modules') !== -1;
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            // Creating a separate manifest bundle that contains the webpack
            // loading code, stops vendor hash from changing on app changes
            // 
            // minChunks Infinity tells plugin not to move anything into this
            // common chunk (so it'll just contain the webpack loading code)
            names: 'manifest',
            minChunks: Infinity
        }),
        new HtmlWebpackPlugin()
    ]
}
