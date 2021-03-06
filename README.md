# blank-marketplace

This module is supposed to give you a quick(er) start into marketpace development by giving you some problematic things already setup.

## Install

    npm i @platform-os/blank-marketplace

### Environments configuration

Edit `marketplace_builder/.builder` file to configure your environment urls.

## Webpack

This module is using latest stable webpack 3. When webpack 4 gets stable and all the necessary plugins will be updated this module also will be updated to the newest and greatest.

1.  dynamic code splitting - lazy load async chunks when needed (read more [here](https://webpack.js.org/guides/code-splitting/) and [here](https://webpack.js.org/guides/lazy-loading/))
2.  using CDN path provided by server - no hardcoding weird paths, just works everywhere ([read more](https://github.com/agoldis/webpack-require-from))
3.  extracting common code from lazy-loaded modules and entry points (ie. `node_moduldes/`) ([read more](https://webpack.js.org/plugins/commons-chunk-plugin/))
4.  loaders support for: sass, fonts, images, js ([read more](https://webpack.js.org/loaders/))
5.  doesn't parse files that match `/node_modules\/.*.min.js/` regexp to avoid double minification, which usually result in slower compilation time and bigger file ([read more](https://webpack.js.org/configuration/module/#module-noparse))

For implementation details look into `webpack.config.js`.

## Long term caching

Long term caching is realized in two ways:

1.  using `asset_url` filter for entry points (ie. app.js, vendor.js) by adding query param with timestamp from last update on s3 bucket ([read more](http://documentation.near-me.com/reference/liquid-filters-static/))
2.  by adding hashes to filenames that are not loaded using `asset_url` liquid filter - code lazy loaded by webpack
3.  manifest file is extracted to its own file (`manifest.js`) - changing chunks should not invalidate it ([read more](https://survivejs.com/webpack/optimizing/separating-manifest/))
4.  `HashedModuleIdsPlugin` is used to prevent changing modules ID between compilations for production (similarly NamedModulesPlugin for development) ([read more](https://webpack.js.org/plugins/hashed-module-ids-plugin/))

## Images lazy loading

To improve performance on image heavy pages (ie. homepage, search results, listing with a lot of images) there is [`vanilla-lazyload`](https://github.com/verlok/lazyload) included out of the box.

It is included, configured and initialized in the `app.js` - defaults are sensible, but feel free to customize it to your needs.

## PostCSS

[PostCSS](https://github.com/postcss/postcss) is included to give you the peace of mind when it comes to covering cross browser incompabilities and missing parts. See `postcss.config.js` file to see exactly which plugins are loaded in this module by default and customize it if you want. [Read more](https://github.com/jjaderg/awesome-postcss).

## npm scripts

Those should help you quickly develop, lint, build, deploy your code.

Use `npm run` command to see what tasks you have at your disposal and what they do.

## ES6

Use ES6 features. You have [Babel](https://github.com/babel/babel) on board :-)

## Code linting

There is a git-precommit hook setup that will run your source code through [`prettier-eslint`](https://github.com/prettier/prettier-eslint). Read about eslint and `prettier` for more info. See config in `.eslintrc.json`.

## Views

There are couple views (layout, layout includes, homepage) in this module to show you how you can structure your initial code.

## Housekeeping

Because npm modules are installed in `node_modules` directory, if you dont need it, just remove it (or remove only this module from it).
Same goes for autogenerated `package-lock.json` file that npm creates.
#   P r i m a r y _ M a r k e t s  
 