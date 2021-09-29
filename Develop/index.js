// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        projectName: 'projectName',
        message: 'What is your project name?',
    },
    {
        type: 'input',
        description: 'description',
        message: 'Provide a brief description of your project:',
    },
    {
        type: 'input',
        tableOfContents: 'tableOfContents',
        message: 'Name your table of contents.',
    }
    {
        type: 'input',
        installation: 'installation',
        message: '',
    }
    {
        type: 'input',
        usage: 'usage',
        message: 'Usage',
    }
    {
        type: 'input',
        license: 'license',
        message: 'Program License',
    }
    {
        type: 'input',
        contributing: 'contributing',
        message: 'Contributing',
    }
    {
        type: 'input',
        license: 'license',
        message: 'Program License',
    }
    {
        type: 'input',
        license: 'license',
        message: 'Program License',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

// run npm init
// run npm i inquirer
// create a boiler plate html

// Prompt user for information about application repository
// generate readme with title of project and sections
// entitled Description, Table of Contents,
// Installation, Usage, License, Contributing, Tests,
// and Questions
// In the Questions section of the ReadMe, we need a link
// to my GitHub profile

// Create prompts
// What is the link to your repository?
// What is the title of your project?
// Description of project.
// Do you want a table of contents?
// Installation instructions.
// Usage info.
// License.
// Contributing.
// Tests.
// Questions.
// Enter your GitHub Username:
// What is your email address?
