var path = require('path');

var config = {
  cache: true,

  entry: [
    path.resolve(__dirname, 'src/client.js')
  ],

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: "/assets/"
  },

  module: {
    loaders: [
      { test: /\.jsx?$/, loaders: ['react-hot', 'babel-loader'],  include: path.join(__dirname, 'src')},
      { test: /\.s?css$/, loader: 'style!css!autoprefixer-loader!sass', include: path.join(__dirname, 'src') },
      { test: /\.jpe?g$|\.cur$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/, loader: 'file-loader?file&context=./build/', include: path.join(__dirname, 'src')},
    ]
  }
};

// inline images

module.exports = config;
