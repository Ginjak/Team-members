// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
// const Employee = require("./lib/Employee");

const Employee = require("./Employee");

class Manager extends Employee {
  constructor(names, id, email, officeNumber) {
    super(names, id, email);
    this.officeNumber = officeNumber;
  }
  getRole() {
    return "Manager";
  }
}
module.exports = Manager;
