// Extend from Employee

const Employee = require(`./Employee`)


class Manager extends Employee {
    constructor(office, number) {

        super(name, id, email);
        this.office = office;
        this.number = number;

    }
    getRole() {
        // overridden to return "manager"
    }
}
