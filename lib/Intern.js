// Extend from Employee

const Employee = require(`./Employee`)


class Intern extends Employee {
    constructor(school) {

        super(name, id, email);
        this.school = school

    }
    getSchool() {

    }
    getRole() {
        // overridden to return "Intern"
    }
}

module.exports = Intern;