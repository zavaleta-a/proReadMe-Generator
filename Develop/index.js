// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "projectName",
      message: "What is your project's name?",
    },
    {
      type: "input",
      name: "description",
      message: "Provide a brief description of your project:",
    },
    {
      type: "input",
      name: "installation",
      message: "What command should be run to install the dependencies?",
    },
    {
      type: "input",
      name: "usage",
      message: "Usage",
    },
    {
      type: "checkbox",
      name: "license",
      message: "What license should your application have?",
      choices: ["MIT", "GNU v3", "ISC", "Mozilla Public License 2.0"],
    },
    {
      type: "input",
      name: "contributing",
      message: "Contributing",
    },
    {
      type: "input",
      name: "tests",
      message: "Tests",
    },
    {
      type: "input",
      name: "questions",
      message: "Questions",
    },
    {
      type: "input",
      name: "repository",
      message: "Repository URL:",
    },
    {
      type: "input",
      name: "github",
      message: "What is your GitHub Username?",
    },
    {
      type: "input",
      name: "email",
      message: "What is your email address?",
    },
  ]);
};

// prompt user to answer questions

// TODO: Create a function to initialize app
const init = () => {
  promptUser()
    // TODO: Create a function to write README file
    .then((answers) => fs.writeFileSync("ReadMe.md", generateMarkdown(answers)))
    .then(() => console.log("Successfully written to markdown"))
    .catch((err) => console.error(err));
};
// Function call to initialize app
init();

// In the Questions section of the ReadMe, we need a link
// to my GitHub profile
