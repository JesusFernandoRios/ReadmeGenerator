// array of questions for user
const fs = require('fs');
const inquirer = require("inquirer");
const Choices = require('inquirer/lib/objects/choices');

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Hello, please name your application. (this will become the main header of the README)'
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
          type: 'checkbox',
          name: 'license',
          message: 'Would you like to licence your application?(Select One)',
          choices: ['MIT','GNU 3.0','IBM','None']
      },
      {
          type: 'input',
          name: 'contributors',
          message: 'Would you like to list any contributors?' 
      },
      {
          type: 'input',
          name: 'test',
          message: 'How can users Test your Application?' 
      },
      {
        type: 'input',
        name: 'contact',
        message: 'This section is will contain your contact information. Please enter your Github username' 
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please provide an E-mail as contact information' 
    },


];

// will only use this function if needed 
// function to write README file
// function writeToFile(fileName, data) {
// }

// function to initialize program
function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log(answers)
        
        // license input badges 
        if(answers.license == 'MIT'){
            answers.license ="[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
       }if(answers.license == 'GNU 3.0'){
            answers.license ="[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](http://www.gnu.org/licenses/gpl-3.0)"
       }if(answers.license == 'IBM'){
            answers.license ="[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)"
       }

        // Generated Readme Content
        const readMeContent = `# ${answers.title}            
## License 
${answers.license}                                 

## Description
${answers.description}

## Table of Contents
* [Installation](#Installation-Guide)
* [Usage](#Usage)
* [Contributors](#Contributors)
* [Contact-Information](#contact-Information)

## Installation Guide
${answers.install}
        
## Usage
${answers.usage}
        
## Contributors
${answers.contributors}

## Contact Information
Github Username - [${answers.contact}](http://github.com/${answers.contact})

E-mail - ${answers.email}
` 

    fs.writeFile('NewREADME.md', readMeContent, (err) =>{
        if(err){
            throw err
        } else {
            console.log('Your Information has been logged!')
        }
    
        })
    })
}

// function call to initialize program
init();
