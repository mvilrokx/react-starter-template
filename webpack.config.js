var autoprefixer = require('autoprefixer-core');
var csswring     = require('csswring');
var webpack      = require('webpack');
var path         = require('path');
var ncp          = require('ncp').ncp;
var fs           = require('fs');

var config = {
  entry: ['webpack/hot/dev-server', './src/scripts/app.js'],
  output: {
    path: path.resolve(__dirname, './dist/assets/js'),
    filename: 'bundle.js',
    publicPath: "/assets/js/"
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['react-hot', 'jsx-loader?harmony'],
      exclude: /node_modules/
    }, {
      test: /\.scss$/,
      loader: 'style-loader!css-loader!postcss-loader!sass-loader'
    }]
  },
  postcss: [autoprefixer, csswring],
  devtool: 'eval'
  // devtool: 'sourcemap'
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
  console.log('done!');
});

module.exports = config;
