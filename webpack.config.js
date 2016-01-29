//var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    App: './app/App.js'
  },
  output: {
    filename: "./extension/[name].bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
}

