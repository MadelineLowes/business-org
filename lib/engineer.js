const inquirer = require('inquirer');
const Employee = require('./employee');
class Engineer extends Employee {
    constructor(firstName, id, email, github) {
        super(firstName, id, email, 'Engineer');
        this.github = github;
    }

    getGithub() {
        return this.github;
    };

    getRole() {
        return this.role;
    };

    static async addEngineer() {
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
                message: `What is their Github username?`,
                name: 'github',
            },
        ]);
        //this is based on the answers to the prompts and creates a new `Engineer` object
        const engineer = new Engineer(
            val.firstName,
            val.id,
            val.email,
            val.github,
        )
        return engineer;
    }
};

module.exports = Engineer;