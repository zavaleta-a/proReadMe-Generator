// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");

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

const generateHTML = ({
  projectName,
  description,
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
  <title>ReadMe Generator</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">${projectName}</h1>
    <p class="lead">${description}.</p>
    <h2>Table of Contents</h2>
    <li><a href="#installation">Installation</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#test">Test</a></li>
    <li><a href="#questions">Questions?</a></li>
    <li><a href="#contact">Contact and GitHub</a></li>
    <br>
    <br> 

    <h2 id="installation">Installation</h2>
        <li class="contents-group">${installation}</li>
        <br>
    <h2 id="usage">Usage</h2>
        <li class="contents-group">${usage}</li>
        <br>
    <h2 id="license">License</h2>
        <li class="contents-group">${license}</li>
        <br>
    <h2 id="contributing">Contributing</h2>
        <li class="contents-group">${contributing}</li>
        <br>
    <h2 id="test">Test</h2>
        <li class="contents-group">${tests}</li>
        <br>
    <h2 id="questions">Questions?</h2>
        <li class="contents-group">${questions}</li>
        <br>
    <h2 id="contact">Contact and GitHub</h2>
      <li class="list-group-item">My GitHub username is <a href="https://github.com/zavaleta-a">${github}.</a></li>
      <li class="list-group-item">My GitHub repostiory is <a href="https://github.com/zavaleta-a/proReadMe-Generator">${repository}.</a></li>
      <li class="list-group-item">My email is:<a href="mailto:azavaleta07@gmail.com"> ${email}.</a></li>
    </ul>
  </div>
</div>
</body>
</html>`;

// TODO: Create a function to initialize app
const init = () => {
  promptUser()
    // TODO: Create a function to write README file
    .then((answers) => fs.writeFileSync("index.html", generateHTML(answers)))
    .then(() => console.log("Successfully written to index.html"))
    .catch((err) => console.error(err));
};
// Function call to initialize app
init();

// In the Questions section of the ReadMe, we need a link
// to my GitHub profile
