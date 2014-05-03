# Ionicstart

Basic boilerplate & example of a cordova app built from brunch & ionic that uses bower.

## Layout

I tried to keep all built files out of version control. This means `www`, `plugins`, `platforms` and any package-managed files are left out. Basically, just mess with your files in `src/`, and `src/assets` is the webroot.

## Bower

Bower handles client-side dependencies.

*  Find packages with `bower search WHATEVER`
*  Install a new package with `bower install PACKAGE`

## Brunch

Brunch does all the build stuff. It concats, minifies, parses SASS, etc. You can make it do more by adding brunch filters to devDependencies, in package.json. Currently, it just has the things I like to build projects, but feel free to use LESS, coffeescript, whatever. I am using SASS to build ionic CSS, so I don't have to include all of it, just what I need.

*  Build with `brunch build`
*  Build & minify with `brunch build -P`
*  Watch for changes & build with `brunch watch`
*  Watch for changes & build & run a local dev-server with `brunch watch -s`. It will reload itself in the browser when you make changes.

I generally use the last option while I am working on stuff.

## Cordova

Cordova handles building the native mobile app.

*  Add a platform with `cordova platform add android` make sure you have already built the www folder with `brunch build` or it will throw an error about not being a cordova project. This is because `www/config.xml` does not exist, yet.
*  Build with `cordova build`
*  Run with `cordova run`
*  Add plugins to your project with `cordova plugin add whatever`. You can also add them to plugins.json, so you know what plugins are installed and the next person to run `cordova platform add android` won't have to know about it.