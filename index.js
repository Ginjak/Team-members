const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

// TODO: Write Code to gather information about the development team members, and render the HTML file.

const test = new Employee("Gnta", "id2", "email");
console.log(test.name);
console.log(test.getId());

const test2 = new Manager("Manager", "id3", "email", "Officenumber");
console.log(test2);
const test3 = new Engineer("engineer", "id", "email", "github");
console.log(test3);
console.log(test3.getGithub());
// Inquirer questions

const mangerQuestions = () => {
  return inquirer.prompt([
    {
      type: "input",
      message: "Team managers name",
      name: "managersName",
    },
    {
      type: "input",
      message: "Managers ID",
      name: "managersID",
    },
    {
      type: "input",
      message: "Managers email address",
      name: "managersEmail",
    },
    {
      type: "input",
      message: "Managers office number",
      name: "managersNumber",
    },
  ]);
};

const selectAction = () => {
  return inquirer.prompt([
    {
      type: "list",
      message: "Select your next step",
      choices: ["Add an engineer", "Add an inter", "Finish building the team"],
      name: "options",
    },
  ]);
};

const addEngineer = () => {
  return inquirer.prompt([
    {
      type: "input",
      message: "Engineer's name",
      name: "engineersName",
    },
    {
      type: "input",
      message: "Engineer's ID",
      name: "engineersID",
    },
    {
      type: "input",
      message: "Engineer's email address",
      name: "engineerEmail",
    },
    {
      type: "input",
      message: "Engineer's GitHub username",
      name: "engineerGithub",
    },
  ]);
};

const addIntern = () => {
  return inquirer.prompt([
    {
      type: "input",
      message: "Intern's name",
      name: "internsName",
    },
    {
      type: "input",
      message: "Interns's ID",
      name: "internsID",
    },
    {
      type: "input",
      message: "Intern's email address",
      name: "einternsEmail",
    },
    {
      type: "input",
      message: "Intern's school",
      name: "internsSchool",
    },
  ]);
};

async function init() {
  try {
    const data = await mangerQuestions();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

// init();
