// constructed based on Employee class
const Employee = require("./Employee");

// Class constructor for Engineer class
class Engineer extends Employee {
    constructor(name, id, email, github, title) {
        super(name, id, email);
        this.github = github;
        this.title = title;
    }
    getGithub() {
        return this.github;
    }

    getRole() {
        return this.title;
    }
}

// exports
module.exports = Engineer;