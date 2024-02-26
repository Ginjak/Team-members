// Import Employee class
const Employee = require("./Employee");
// Extend Employee class related to Intern
class Intern extends Employee {
  constructor(names, id, email, school) {
    super(names, id, email);
    this.school = school;
  }
  getSchool() {
    return this.school;
  }
  getRole() {
    return "Intern";
  }
}

// Export module
module.exports = Intern;
