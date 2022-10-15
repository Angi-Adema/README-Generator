// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [{
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
    message: 'Enter the description of the project, what it does. (Required)',
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
    type: 'input',
    message: 'Are there any special commands for installation?',
    name: 'installation',
    validate: installationInput => {
        if (installationInput) {
            return true;
        } else {
            console.log('Please enter installation instructions.');
            return false;
        }
    }
},
{
    type: 'input',
    message: 'Share how this project is to be used, technologies used & anything special about utilizing the app. (Required)',
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
    type: 'input',
    message: 'Specify any contribution requirements:',
    name: 'contribution',
    validate: contributionInput => {
        if (contributionInput) {
            return true;
        } else {
            console.log('Please enter your contribution requirements.');
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
    when: ({ confirmTesting }) => {
        if (confirmTesting) {
            return true;
        } else {
            return false;
        }
    }
},
{
    type: 'list',
    message: 'Please select a license your project is using:',
    name: 'license',
    choices: ['MIT', 'Apache 2.0', 'GPL', 'BSD', 'No License']
},
{
    type: 'input',
    message: 'Enter credits:',
    name: 'credits',
    validate: creditsInput => {
        if (creditsInput) {
            return true;
        } else {
            console.log('Enter credits.');
            return false;
        }
    }
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
}];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data, (error) =>
    error? console.error(error) : console.log("Success!")
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            console.log(answers);
            writeToFile('README.md', generateMarkdown(answers))
        })
}

// Function call to initialize app
init();