var autoprefixer = require('autoprefixer-core');
var csswring     = require('csswring');
var webpack      = require('webpack');
var path         = require('path');
var ncp          = require('ncp').ncp;

var config = {
  entry: './src/scripts/app.js',
  output: {
    path: path.resolve(__dirname, './dist/assets/js'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'jsx-loader?harmony',
      exclude: /node_modules/
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

ncp(path.resolve(__dirname, './src/index.html'), path.resolve(__dirname, './dist/index.html'), function (err) {
  if (err) {
   return console.error(err);
  }
  console.log('\ndone copying index.html!');
});

module.exports = config;
