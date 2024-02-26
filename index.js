// Import required modules and dependencies
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

// Output path
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

// Page template
const render = require("./src/page-template.js");

// Teams array
let team = [];

// Question
// Managers details, push them to team array
const getManagersDetails = () => {
  // Initial question regarding Manger details
  const mangerQuestions = () => {
    return inquirer.prompt([
      {
        type: "input",
        message: "Team managers name",
        name: "managersName",
        validate: function (value) {
          // Validation to check if input is not empty and there are no numbers
          if (!/\d/.test(value) && value !== "") {
            return true;
          } else {
            return "Please enter a valid name (cannot be a number or an empty line).";
          }
        },
      },
      {
        type: "input",
        message: "Managers ID",
        name: "managersID",
        validate: function (value) {
          // Validation to check if input is not empty and there are only numbers
          if (/\d/.test(value) && value !== "") {
            return true;
          } else {
            return "Please enter a valid ID (must be a number).";
          }
        },
      },
      {
        type: "input",
        message: "Managers email address",
        name: "managersEmail",
        validate: function (value) {
          // Validation to check if input is not empty
          if (value !== "") {
            return true;
          } else {
            return "Can't be an empty value";
          }
        },
      },
      {
        type: "input",
        message: "Managers office number",
        name: "managersNumber",
        validate: function (value) {
          // Validation to check if input is not empty and there are only numbers
          if (/\d/.test(value) && value !== "") {
            return true;
          } else {
            return "Please enter a phone number";
          }
        },
      },
    ]);
  };
  // Async function to wait for Managers input details, push them to teams array and then display options "Add Engineer, Intern or finish building a team"
  async function init() {
    try {
      const managerInfo = await mangerQuestions();
      const manager = new Manager(
        managerInfo.managersName,
        managerInfo.managersID,
        managerInfo.managersEmail,
        managerInfo.managersNumber
      );
      team.push(manager);
      selectOption();
    } catch (err) {
      console.log(err);
    }
  }
  init();
};

// Engineer details, push them to team array
const addNewEngineer = () => {
  const addEngineer = () => {
    return inquirer.prompt([
      {
        type: "input",
        message: "Engineer's name",
        name: "engineersName",
        validate: function (value) {
          // Validation to check if input is not empty and there are no numbers
          if (!/\d/.test(value) && value !== "") {
            return true;
          } else {
            return "Please enter a valid name (cannot be a number or an empty line).";
          }
        },
      },
      {
        type: "input",
        message: "Engineer's ID",
        name: "engineersID",
        validate: function (value) {
          // Validation to check if input is not empty and there are only numbers
          if (/\d/.test(value) && value !== "") {
            return true;
          } else {
            return "Please enter a valid ID (must be a number).";
          }
        },
      },
      {
        type: "input",
        message: "Engineer's email address",
        name: "engineerEmail",
        validate: function (value) {
          // Validation to check if input is not empty
          if (value !== "") {
            return true;
          } else {
            return "Can't be an empty value";
          }
        },
      },
      {
        type: "input",
        message: "Engineer's GitHub username",
        name: "engineerGithub",
        validate: function (value) {
          // Validation to check if input is not empty
          if (value !== "") {
            return true;
          } else {
            return "Can't be an empty value";
          }
        },
      },
    ]);
  };

  // Async function to wait for Enginners input details, push them to teams array and then display options "Add Engineer, Intern or finish building a team"
  async function init() {
    try {
      const engineerInfo = await addEngineer();
      const engineer = new Engineer(
        engineerInfo.engineersName,
        engineerInfo.engineersID,
        engineerInfo.engineerEmail,
        engineerInfo.engineerGithub
      );
      team.push(engineer);
      selectOption();
    } catch (err) {
      console.log(err);
    }
  }
  init();
};

// Intern details, push them to team array
const addNewIntern = () => {
  const addIntern = () => {
    return inquirer.prompt([
      {
        type: "input",
        message: "Intern's name",
        name: "internsName",
        validate: function (value) {
          // Validation to check if input is not empty and there are no numbers
          if (!/\d/.test(value) && value !== "") {
            return true;
          } else {
            return "Please enter a valid name (cannot be a number or an empty line).";
          }
        },
      },
      {
        type: "input",
        message: "Interns's ID",
        name: "internsID",
        validate: function (value) {
          // Validation to check if input is not empty and there are only numbers
          if (/\d/.test(value) && value !== "") {
            return true;
          } else {
            return "Please enter a valid ID (must be a number).";
          }
        },
      },
      {
        type: "input",
        message: "Intern's email address",
        name: "einternsEmail",
        validate: function (value) {
          // Validation to check if input is not empty
          if (value !== "") {
            return true;
          } else {
            return "Can't be an empty value";
          }
        },
      },
      {
        type: "input",
        message: "Intern's school",
        name: "internsSchool",
        validate: function (value) {
          // Validation to check if input is not empty
          if (value !== "") {
            return true;
          } else {
            return "Can't be an empty value";
          }
        },
      },
    ]);
  };

  // Async function to wait for Interns input details, push them to teams array and then display options "Add Engineer, Intern or finish building a team"
  async function init() {
    try {
      const internInfo = await addIntern();
      const intern = new Intern(
        internInfo.internsName,
        internInfo.internsID,
        internInfo.einternsEmail,
        internInfo.internsSchool
      );
      team.push(intern);
      selectOption();
    } catch (err) {
      console.log(err);
    }
  }
  init();
};

// Select option to choose from "Add an enginner, Add an intern or Finish building the team"
const selectOption = () => {
  const selectAction = () => {
    return inquirer.prompt([
      {
        type: "list",
        message: "Select your next step",
        choices: [
          "Add an engineer",
          "Add an inter",
          "Finish building the team",
        ],
        name: "options",
      },
    ]);
  };

  // Async function depending what option user choose new function will run. Either Add enginner, Add intern or Finish building the team in which case html file will be generated
  async function init() {
    try {
      const options = await selectAction();
      if (options.options === "Add an engineer") {
        addNewEngineer();
      } else if (options.options === "Add an inter") {
        addNewIntern();
      } else {
        const html = render(team);
        // Write HTML file with content to the output file
        fs.writeFile(outputPath, html, (err) => {
          if (err) {
            console.error("Error writing HTML file:", err);
          } else {
            console.log("Team HTML file generated successfully:", outputPath);
          }
        });
      }
    } catch (err) {
      console.log(err);
    }
  }
  init();
};

// Call main function when starting application with node index.js
getManagersDetails();
