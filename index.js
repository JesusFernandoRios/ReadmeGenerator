// array of questions for user

const inquirer = require("inquirer");

// const inquirer = require('inquirer')




const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Hello, What would you like the title of your readme to be.'
      },
      {
        type: 'input',
        name: 'description',
        message: 'Please type a quick description of your application.' 
      },
      {
        type: 'input',
        name: 'install',
        message: 'How to install the application' 
      },
      {
          type: 'input',
          name: 'usage',
          message: 'Please provide instruction on how to use your application.' 
      },
      {
          type: 'input',
          name: 'license',
          message: 'Would you like to licence your application? (ex. MIT, GPL)' 
      },
      {
          type: 'input',
          name: 'contributors',
          message: 'Would you like to list any contributors? if none type NA' 
      },
      {
          type: 'input',
          name: 'bio',
          message: 'Tell me something about yourself.' 
      }

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log(answers)
    })
}

// function call to initialize program
init();
