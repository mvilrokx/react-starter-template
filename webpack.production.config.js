var autoprefixer = require('autoprefixer-core');
var csswring     = require('csswring');
var webpack      = require('webpack');
var path         = require('path');
var ncp          = require('ncp').ncp;
var fs           = require('fs');
// import fs from 'fs';

var config = {
  entry: './src/scripts/app.js',
  output: {
    path: path.resolve(__dirname, './dist/assets/js'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
      // loader: 'jsx-loader?harmony',
    }, {
      test: /\.scss$/,
      loader: 'style-loader!css-loader!postcss-loader!sass-loader'
    }]
  },
  postcss: [autoprefixer, csswring],
  plugins: [
    // removes a lot of debugging code in React
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    // keeps hashes consistent between compilations
    new webpack.optimize.OccurenceOrderPlugin(),
    // minifies your code
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  ]
};

// MAKE SURE FOLDER EXISTS FIRST!
try {
  fs.mkdirSync(path.resolve(__dirname, './dist'));
} catch(e) {
  if ( e.code !== 'EEXIST' ) throw e;
}

ncp(path.resolve(__dirname, './src/index.html'), path.resolve(__dirname, './dist/index.html'), function (err) {
  if (err) {
   return console.error(err);
  }
  console.log('\ndone copying index.html!');
});

module.exports = config;
