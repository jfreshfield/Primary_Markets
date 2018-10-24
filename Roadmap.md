## Roadmap

### Pure frontend/performance optimizations

Make this starting point a PWA by default. This means some/all of below improvements:

* [ ] Eliminate FOIT (Flash Of Invisible Text) for WebFonts
* [ ] Implement inlining small images/fonts into css to save http requests
* [ ] Add service worker support
* [ ] Create Web App Manifest (using webpack-pwa-manifest maybe?)

### Assets building

* [ ] Upgrade webpack to 4
* [ ] Add webpack bundle analyzer in dev mode
* [ ] Add optimize-js plugin for webpack
* [ ] Move assets to new location
* [ ] Optimize uglifyJS config for speed
* [x] Replace cssnano with csso - [benchmark](http://goalsmashers.github.io/css-minification-benchmark/)
* [x] Investigate postcss-mqpacker issue
* [x] Revise postcss plugins and add missing important ones

### PlatformOS examples

* [ ] Google AMP page example
* [ ] JSON response example
* [ ] Redirect example (with parameters)
* [ ] Sign up
* [ ] Auto login after signup
* [ ] Sign in
* [ ] Flash messages for sign up/sign in

### Chores

* [ ] Condense README file of the module
