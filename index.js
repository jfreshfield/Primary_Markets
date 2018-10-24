const Generator = require('yeoman-generator');
const chalk = require('chalk');
const path = require('path');
const extend = require('deep-extend');

const DEFAULTS = {
  name: 'marketplace-example'
};

const isEmpty = input => (input.length === 0 ? console.log(chalk.red('\nCant be empty')) : true);

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
  }

  prompting() {
    const prompts = [
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of your marketplace?',
        default: DEFAULTS.name,
        validate: isEmpty
      }
    ];

    return this.prompt(prompts).then(props => (this.props = props));
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath(),
      this.destinationPath(`../../../${this.props.name}`), // need to get out of node_modules/ of npm package
      this.props,
      {},
      {
        globOptions: { dot: true }
      }
    );
  }

  end() {
    console.log(chalk.green('blank-marketplace :: Module installed'));
    console.log(chalk.green('You will find usage information in README file'));
  }
};
