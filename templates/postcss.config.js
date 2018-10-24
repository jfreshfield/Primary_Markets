const devtools = require('postcss-devtools');
const mqpacker = require('css-mqpacker');
const fixes = require('postcss-fixes');
const focus = require('postcss-focus');
const calc = require('postcss-calc');
const pseudoelements = require('postcss-pseudoelements');
const autoprefixer = require('autoprefixer');
const csso = require('postcss-csso');

module.exports = ({ file, options, env }) => {
  if (!env) {
    return {};
  }

  return {
    plugins: [
      // devtools(), // Uncomment for debugging purposes
      mqpacker(),
      fixes(),
      focus(),
      calc(),
      pseudoelements(),
      autoprefixer(),
      env === 'production' ? csso({ restructure: false }) : undefined
    ]
  };
};
