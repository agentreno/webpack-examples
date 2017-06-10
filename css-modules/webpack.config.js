var ExtractTextPlugin = require('extract-text-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        app: './app.js'
    },
    output: {
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true
                            }
                        },
                        {
                            loader: 'sass-loader',
                        }
                    ]
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("bundle.css"),
        new HtmlWebpackPlugin()
    ]
}
