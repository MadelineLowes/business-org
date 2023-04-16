const inquirer = require('inquirer');
const Employee = require('./employee');
class Manager extends Employee {
    constructor(firstName, id, email, officeNumber) {
        super(firstName, id, email, 'Manager');  //this comes from parent class
        this.officeNumber = officeNumber; //this comes from Manager class
    }

    getOfficeNumber() {
        return this.officeNumber;
    };

    getRole() {
        return this.role;
    };

    static async addManager() {
        const val = await inquirer.prompt([
            {
                type: 'input',
                message: "What is this employee's name?",
                name: 'firstName',
            },
            {
                type: 'input',
                message: `What is their employee ID?`,
                name: 'id',
            },
            {
                type: 'input',
                message: `What is their email?`,
                name: 'email',
            },
            {
                type: 'input',
                message: `What is their office number?`,
                name: 'officeNumber',
            },
        ]);
        //this is based on the answers to the prompts and creates a new `Manager` object
        const manager = new Manager(
            val.firstName,
            val.id,
            val.email,
            val.officeNumber,
        )
        return manager;
    }
};

module.exports = Manager;