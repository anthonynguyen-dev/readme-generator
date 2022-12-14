// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is the title of your project?",
    name: "title",
  },
  {
    type: "input",
    message: "Give a description of your project.",
    name: "description",
  },
  {
    type: "input",
    message: "Installation instructions.",
    name: "instructions",
  },
  {
    type: "input",
    message: "Explain use of application.",
    name: "usage",
  },
  {
    type: "input",
    message: "What is your email?",
    name: "email",
  },
  {
    type: "input",
    message: "What is your github account?",
    name: "github",
  },
  {
    type: "input",
    message: "Input URL for project's live site.",
    name: "livesite",
  },
  {
    type: "input",
    message: "Input URL for project's github.",
    name: "project",
  },
  {
    type: "checkbox",
    message: "Choose a License if applicable.",
    name: "license",
    choices: ["", "", ""],
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log("README created!")
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
    console.log(data);
    var finalMarkdown = generateMarkdown(data);
    var fileName = "./generatedReadMe/README.md";
    console.log(finalMarkdown);
    writeToFile(fileName, finalMarkdown);
  });
}

// Function call to initialize app
init();
