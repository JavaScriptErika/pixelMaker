const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve('dist'),
    filename: './bundle.js'
  },
  module: {
    rules:[
        {
            test:/\.sass$/,
            use: ExtractTextPlugin.extract({ 
                fallback:'style-loader',
                use:['css-loader','sass-loader'],
            }),
         }
    ],
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  },
  watch: true,
  plugins: [
    new ExtractTextPlugin({filename:'styles.css'}),
    new HtmlWebpackPlugin({
        hash: true,
        template: './src/index.html',
        filename: './index.html'
    })
]
}