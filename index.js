// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util =require('util');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    //NAME OF PROJECT
    {
        type: 'input',
        name: 'title',
        message: 'Enter the name of your project? (This is Required)',
        validate: titleInput => {
            if (titleInput) {
              return true;
            }
              else {
                  console.log('Enter the name of your project');
              return false;
            }
        }
    },
    //DESCRIPTION OF PROJECT
    {
        type: 'input',
        name: 'description',
        message: 'Enter a detailed description about your project'
    },
    //INSTALLATION INSTRUCTIONS
    {
        type: 'input',
        name: 'installation',
        message: 'Enter the installation instructions and requirements to run your project?'
    },
    //USAGE INFORMATION
    {
        type: 'input',
        name: 'usage',
        message: 'Enter the usage information of the your project repository'
    },
    //CONTRIBUTION
    {
        type: 'input',
        name: 'contribution',
        message: 'Enter any guideline instructions on how users can contribute to this project repository'
    },
    //TESTS
    {
        type: 'input',
        name: 'tests',
        message: 'Enter commands that should be used to run tests (if applicable)'
    },
    //LICENSE
    {
        type: 'list',
        name: 'license',
        message: 'Please select one license (if applicable) needed for your repository',
        choices: ['Apache2.0', 'MIT', 'GNUGPLv2', 'GNUGPLv3', 'LGPLv21', 'ISC']
    },
    //WHAT IS YOUR NAME?    
    { 
        type: 'input',
        name: 'name',
        message: 'What is your name?'
    },
    //GITHUB USERNAME
    { 
        type: 'input',
        name: 'username',
        message: 'What is your GitHub Username?',
        validate: usernameInput => {
            if (usernameInput) {
              return true;
            }
              else {
                  console.log('Enter your GitHub username');
              return false;
            }
        }
    },
    // LINK TO GITHUB PROFILE
    {
        type: 'input',
        name: 'link',
        message: 'Enter the link to your Github profile'
    },
    //EMAIL ADDRESS
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address? (This is required)',
        validate: emailInput => {
            if (emailInput) {
              return true;
            }
              else {
                console.log('Please enter your email address');
              return false;
            }
        }
    },
];

// TODO: Create a function to write README file
// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions)
        .then((data) => {
            const markDown = generateMarkdown(data)
            fs.writeFile('generated-README.md', markDown, function(err) {
                if (err) {
                    console.log('File could not be created', err)
                } else {
                    console.log('New README.md file created!')
                }
            })
        })
        .catch((error) => {
            console.log(error)
        })
} 

// Function call to initialize app
init();
