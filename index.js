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
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
    console.log(data);
    var finalMarkdown = generateMarkdown(data);
    console.log(finalMarkdown);
  });
}

// Function call to initialize app
init();
