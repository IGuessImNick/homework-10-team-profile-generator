// constructed based on Employee class
const Employee = require("./Employee");

// Class constructor for Intern class
class Intern extends Employee {
    constructor(name, id, email, school, title) {
        super(name, id, email);
        this.school = school;
        this.title = title;
    }
    getRole() {
        return this.title;
    }

    getSchool() {
        return this.school;
    }
}

// exports
module.exports = Intern;