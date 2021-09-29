// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const utilities = require("./utils");
const genMkDn = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
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
    name: "tableOfContents",
    message: "Name your table of contents.",
  },
  {
    type: "input",
    name: "What command should be run to install the dependencies?",
    message: "npm i",
  },
  {
    type: "input",
    name: "usage",
    message: "Usage",
  },
  {
    type: "input",
    name: "license",
    message: "Program License",
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
    name: "github username",
    message: "What is your GitHub Username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
];

const generateHTML = ({
  projectName,
  description,
  tableOfContents,
  installation,
  usage,
  license,
  contributing,
  tests,
  questions,
  repository,
  github,
  email,
}) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">${projectName}</h1>
    <p class="lead">${description}.</p>
    <h2>Example heading <span class="badge badge-secondary">Table of Contents</span></h2>
    <ol class="contents-group">
        <li class="contents-group">${installation}</li>
        <li class="contents-group">${usage}</li>
        <li class="contents-group">${license}</li>
        <li class="contents-group">${contributing}</li>
        <li class="contents-group">${tests}</li>
        <li class="contents-group">${questions}</li>
    <ul class="list-group">
      <li class="list-group-item">My GitHub username is ${github}</li>
      <li class="list-group-item">My GitHub repostiory is ${repository}</li>
      <li class="list-group-item">My email is: ${email}</li>
    </ul>
  </div>
</div>
</body>
</html>`;
// TODO: Create a function to initialize app

// Function call to initialize app
const init = () => {
  questions()
    // TODO: Create a function to write README file
    .then((answers) => fs.writeFileSync("index.html", generateHTML(answers)))
    .then(() => console.log("Successfully written to index.html"))
    .catch((err) => console.error(err));
};

init();

// create a boiler plate html

// Prompt user for information about application repository
// generate readme with title of project and sections
// entitled Description, Table of Contents,
// Installation, Usage, License, Contributing, Tests,
// and Questions
// In the Questions section of the ReadMe, we need a link
// to my GitHub profile
