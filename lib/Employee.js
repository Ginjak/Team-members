// Employee class

class Employee {
  constructor(names, id, email) {
    this.name = names;
    this.id = id;
    this.email = email;
  }
  getName() {
    return this.name;
  }
  getId() {
    return this.id;
  }
  getEmail() {
    return this.email;
  }
  getRole() {
    return "Employee";
  }
}

// Export module
module.exports = Employee;
