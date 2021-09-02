// constructed based on Employee class
const Employee = require("./Employee");

// Class constructor for Manager class
class Manager extends Employee {
    constructor(name, id, email, officeNumber, title) {
        super(name, id, email);
        this.officeNumber = officeNumber;
        this.title = title;
    }

    getRole() {
        return this.title;
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
}

// exports
module.exports = Manager;