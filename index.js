// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');

// TODO: Create an array of questions for user input
// const questions = [];
inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the title of your project? (Required)',
            name: 'projectTitle',
            validate: projectTitleInput => {
                if (projectTitleInput) {
                    return true;
                } else {
                    console.log('Please enter your project title.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: 'Enter the description of your project. (Required)',
            name: 'description',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please enter your project description.');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            message: 'Are there installation instructions?',
            default: true;
        },
        {
            type: 'input',
            message: 'Enter project installation instructions.',
            name: 'installation',
            when: ({confirmInstallation}) => {
                if (confirmInstallation) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: 'Share how this project is to be used. (Required)',
            name: 'usage',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            message: 'Was there a collaborator on this project?',
            default: true
        },
        {
            type: 'input',
            message: 'Please state the name of the collaborator. (Required)',
            name: 'name',
            validate: linkInput => {
                if (linkInput) {
                    return true;
                } else {
                    console.log('Please enter GitHub link.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: 'Enter the GitHub link for your collaborator. (Required)',
            name: 'collaboratorLink',
            validate: linkInput => {
                if (linkInput) {
                    return true;
                } else {
                    console.log('Enter your collaborator GitHub link.');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            message: 'Does your project include testing instructions?',
            name: 'confirmTesting',
            default: true
        },
        {
            type: 'input',
            message: 'Enter testing instructions here:',
            name: 'test',
            when: ({confirmTesting}) => {
                if (confirmTesting) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'checkbox',
            message: 'Please select a license:',
            name: 'license',
            choices: ['MIT', 'Apache 2.0', 'GPL', 'BSD']
        },
        {
            type: 'input',
            message: 'Enter GitHub username. (Required)',
            name: 'githubUsername',
            validate: userInput => {
                if (userInput) {
                    return true;
                } else {
                    console.log('Enter GitHub username.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: 'Enter your GitHub profile link: (Required)',
            name: 'githubLink',
            validate: linkInput => {
                if (linkInput) {
                    return true;
                } else {
                    console.log('Enter your GitHub profile link.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: 'Enter your contact email address: (Required)',
            name: 'email',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Enter email address.');
                    return false;
                }
            }
        }
    ]).then();

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();