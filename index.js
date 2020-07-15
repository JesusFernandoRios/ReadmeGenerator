// array of questions for user
const fs = require('fs');
const inquirer = require("inquirer");

// const inquirer = require('inquirer')




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
          type: 'input',
          name: 'license',
          message: 'Would you like to licence your application? (ex. MIT, GPL , none)' 
      },
      {
          type: 'input',
          name: 'contributors',
          message: 'Would you like to list any contributors? if none type NA' 
      },
    //   {
    //       type: 'input',
    //       name: 'bio',
    //       message: 'Tell me something about yourself.' 
    //   }

];

// function to write README file
// function writeToFile(fileName, data) {
// }

// function to initialize program
function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log(answers)


        const readMeContent = `# ${answers.title}

## Description
${answers.description}

## Table of Contents
* [Questions](#Questions)
* [Usage](#Usage)
* [Installation](#Installation Guide)
* [Contributors](#Contributors)

## Installation
${answers.install}
        
## Usage
${answers.usage}
        
## License
${answers.license}
        
## Contributors
${answers.contributors}` 

        


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
