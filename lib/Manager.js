// Extend from Employee

const Employee = require(`./Employee`)


class Manager extends Employee {
    constructor(officeNumber) {

        super(name, id, email);
        
        this.officeNumber = officeNumber;
        
        
        
    }
    getRole() {
        
        return "manager";
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
}

module.exports = Manager;