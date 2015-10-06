import ReactDOM from 'react-dom';
import React from 'react';
import WelcomeMsg from './components/welcomeMsg';

require('../styles/base.scss'); //Yeah, require CSS!!!

var features = [
  {name: 'React JSX Transformer with harmony support', url: 'https://www.npmjs.com/package/react-tools'},
  {name: 'React Hot Loader', url: 'https://github.com/gaearon/react-hot-loader'},
  {name: 'Post CSS with autoprefixer and csswring', url: 'https://github.com/postcss/postcss'},
  {name: 'SASS Support using libsass', url: 'https://www.npmjs.com/package/node-sass'},
  {name: 'Webpack', url: 'http://webpack.github.io/'},
  {name: 'Webpack Dev Server', url: 'http://webpack.github.io/docs/webpack-dev-server.html'},
  {name: 'JQuery', url: 'http://jquery.com/'},
  {name: 'Development and Production configuration and scripts', url: ''}
];

ReactDOM.render(
  <WelcomeMsg features={features} />, document.getElementById('content')
);
