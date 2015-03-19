**Table of Contents**

- [Introduction](#)
- [Quick Start](#)
    - [Development](#)
    - [Production](#)
- [Features](#)
    - [Webpack](#)
    - [Webpack Dev Server](#)
    - [React Hot Loader](#)
    - [PostCSS](#)
    - [Sass](#)
    - [React JSX Transformer (with harmony support)](#)
    - [JQuery](#)
- [Summary](#)

# Introduction
This is a starter template I created to create for my React.js projects. I use it to bootstrap my React.js project and so can you.

# Quick Start
## Development

1. Download this repository and unzip it.
2. Go to the folder you unzipped the project to and get all the npm dependencies:

        $ npm install
3. Start the development server:

        $ npm run dev
4. Open the application in your browser:

        http://localhost:8080/webpack-dev-server/

Start making changes to the JS and SCSS files and see them magically update in your browser (on file save)

## Production

1. Build the application:

        $ npm run build
2. Copy the dist folder to your PROD server
3. Open the application in your browser:

        http://<your-domain>/index.html

# Features
## [Webpack](http://webpack.github.io/)
I've been using [Grunt](http://gruntjs.com/) for a while now but for this project I planned on using [Gulp](http://gulpjs.com/), in fact the first versions were using Gulp very successfully. However, while reading about Gulp I came across [Webpack](http://webpack.github.io/) and [it's awesome feature list](http://webpack.github.io/docs/) and decided to use it instead.  I'm glad I did!  It was much easier to setup than Gulp (let alone Grunt) and it handles everything for me.  I also don't use [bower](http://bower.io/) anymore, it's just less confusing that way (["Do I use bower or npm for this dependency?"](http://stackoverflow.com/questions/18641899/difference-between-bower-and-npm)): everything is a node package!  It supports all the features I used in Grunt/Gulp, including a a development server (webpack-dev-server) with live-reload (using “Hot Module Replacement”), pre and post processing of JS and CSS (using Loaders and PostCSS), JSX Compilation etc.  Basically I can't see me going back to Grunt or even Gulp.

## [Webpack Dev Server](http://webpack.github.io/docs/webpack-dev-server.html)
The webpack-dev-server is a little node.js express server, which uses the webpack-dev-middleware to serve a webpack bundle. It also has a little runtime which is connected to the server via socket.io. The server emits information about the compilation state to the client, which reacts to those events (this is how HMR works).

## [React Hot Loader](https://github.com/gaearon/react-hot-loader)
Probably the most impressive feature is the React Hot Loader which is included and configured in this project.  It allows you to update the code (JS and CSS) of a react component, and have it live-update in all browsers that are connected *while keeping state*!  I can not stress enough the last part of that sentences, it allows for a [Bret Victoresque](https://vimeo.com/36579366) style of coding.  Just try it out in the code provided in this repo, start the server in development more (`npm run dev`), open the page in your browser (use `http://localhost:8080/webpack-dev-server/` to enable the live reload, you should see a special status bar at the top of the web page) and edit either welcomeMsg.js or welcomeMsg.scss (yes, it works with all your preprocessing too!) and marvel at what happens in your browser.  All of this is possible because of the Hot Module Replacement feature of Webpack.

## [PostCSS](https://github.com/postcss/postcss)
The project is also configured to use PostCSS. PostCSS is a tool for transforming CSS with JS plugins.  It can do the same work as preprocessors like Sass, Less, and Stylus, but it is modular, 4-40x faster, and much more powerful.  In fact, I am not using it to replace my Sass compiler (although you could if you wanted to), I have configured it to add **CSS vendor prefixes** (using the [Autoprefix plugin](https://github.com/postcss/autoprefixer)) and **minify the CSS** (using the [csswring plugin](https://github.com/hail2u/node-csswring))

If you want to add [addition PostCSS plugins](https://github.com/postcss/postcss#plugins), just `npm` them and then add a reference to them in webpack.config.js and webpack.production.config.js.

## [Sass](https://www.npmjs.com/package/node-sass)
You can use Sass in this project, it will work with all features provided in this project template, including hot/live reload.  Currently it is using libsass which already offers a performance boost over the ruby version but in the future I am looking into doing away with this altogether and just us PostCSS Plugins.

## [ES6 Support](https://babeljs.io/)
The project is configured to use babel so you get access to new ES6 features out of the box.  Babel also supports JSX so you can use that in the React components you create, the project is configured to compile them into plain JS for you, again with all features intact including Hot Reload.

## JQuery
The project is also configured to use JQuery.  I use this for AJAX requests mostly.  You can easily remove it if you want to, just run `npm uninstall jquery --save-dev`.

# Summary
Copy this project if you want to create a React project with all the features you used to from Gulp/Grunt, except better and faster.
