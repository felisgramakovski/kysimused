import inquirer from 'inquirer';

const inquirer = require('inquirer');
// List Question
inquirer
  .prompt([
    {
      type: 'list',
      name: 'list',
      message: 'Kuidas tana lainud on:',
      choices: ['timm', 'norm', 'pahasti', 'idk'],
    },
  ])
  .then((answers) => {
    console.log(`You selected ${answers.list}.`);
  });

// RawList Question
inquirer
  .prompt([
    {
      type: 'rawlist',
      name: 'rawlist',
      message: 'kas sa tahad koju minna:',
      choices: ['jah', 'ei', 'mhm', 'mkm'],
    },
  ])
  .then((answers) => {
    console.log(`You prefer ${answers.rawlist}.`);
  });

// Expand Question
inquirer
  .prompt([
    {
      type: 'expand',
      name: 'expand',
      message: 'Choose an option:',
      choices: [
        {
          key: 'a',
          name: 'Option A',
          value: 'a',
        },
        {
          key: 'b',
          name: 'Option B',
          value: 'b',
        },
        {
          key: 'c',
          name: 'Option C',
          value: 'c',
        },
      ],
    },
  ])
  .then((answers) => {
    console.log(`You selected option ${answers.expand}.`);
  });

// Checkbox Question
inquirer
  .prompt([
    {
      type: 'checkbox',
      name: 'checkbox',
      message: 'mis su lemmik sook on:',
      choices: ['pasta', 'sushi', 'burks', 'pitsa'],
    },
  ])
  .then((answers) => {
    console.log(`You selected: ${answers.checkbox.join(', ')}`);
  });

// Confirm (Yes/No) Question
inquirer
  .prompt([
    {
      type: 'confirm',
      name: 'confirm',
      message: 'Are you sure you want to continue?',
    },
  ])
  .then((answers) => {
    if (answers.confirm) {
      console.log('You chose to continue.');
    } else {
      console.log('You chose to cancel.');
    }
  });

// Input Question
inquirer
  .prompt([
    {
      type: 'input',
      name: 'input',
      message: 'Enter your name:',
    },
  ])
  .then((answers) => {
    console.log(`Your name is: ${answers.input}`);
  });

// Number Input Question
inquirer
  .prompt([
    {
      type: 'number',
      name: 'number',
      message: 'Enter your age:',
    },
  ])
  .then((answers) => {
    console.log(`Your age is: ${answers.number}`);
  });

// Password Input Question
inquirer
  .prompt([
    {
      type: 'password',
      name: 'password',
      message: 'Enter your secret password:',
    },
  ])
  .then((answers) => {
    console.log('Password entered.');
  });