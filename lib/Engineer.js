// Import Employee class
const Employee = require("./Employee");

// Extend Employee class related to Enginner
class Engineer extends Employee {
  constructor(names, id, email, github) {
    super(names, id, email);
    this.github = github;
  }
  getGithub() {
    return this.github;
  }
  getRole() {
    return "Engineer";
  }
}

// Export module
module.exports = Engineer;
