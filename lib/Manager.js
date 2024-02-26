// Import Employee class
const Employee = require("./Employee");

// Extend Employee class related to Manager
class Manager extends Employee {
  constructor(names, id, email, officeNumber) {
    super(names, id, email);
    this.officeNumber = officeNumber;
  }
  getOfficeNumber() {
    return this.officeNumber;
  }
  getRole() {
    return "Manager";
  }
}

// Export module
module.exports = Manager;
