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

let team = [];

// Question
const getManagersDetails = () => {
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

const addNewEngineer = () => {
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

const addNewIntern = () => {
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
  async function init() {
    try {
      const options = await selectAction();
      console.log(options.options);
      if (options.options === "Add an engineer") {
        addNewEngineer();
      } else if (options.options === "Add an inter") {
        addNewIntern();
      } else {
        const html = render(team);
        // Write HTML content to the output file
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

getManagersDetails();
