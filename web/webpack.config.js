 let path = require('path');

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, 'src', 'index.js'),

  output: {
    path: path.join(__dirname, './dist'),
    filename: 'bundle.js',
  },

  module:{
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['react', 'es2015']
        }

      },
    }]
  }

}
