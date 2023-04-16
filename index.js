const inquirer = require('inquirer');

const Employee = require("./lib/employee");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const { writeToHTML } = require('./lib/generatehtml');

// create an empty arrays to store the employee objects
const employeeList = [];
const addEmployee = async () => {
    if (employeeList.length < 1) {
        const val = await inquirer.prompt([
            {
                type: 'confirm',
                name: 'choice',
                message: 'Would you like to start adding your team member(s)?',
            },
        ])
        if (val.choice) {
            employeeType();
        } else {
            quit();
        }
    } else {
        const val = await inquirer.prompt([
            {
                type: 'confirm',
                name: 'choice',
                message: 'Would you like to add another employee to your team?',
            },
        ]);
        if (val.choice) {
            employeeType();
        } else {
            // end function & trigger generatehtml using the employeeList array
            writeToHTML(employeeList);
        }
    };

    // Logs message and exits the node app
    function quit() {
        console.log("\nLooks like you don't want to add any team members\n");
        process.exit(0);
    }
}

const employeeType = async () => {
    // prompt user to select employee type
    const val = await inquirer.prompt([
        {
            type: 'list',
            name: 'choice',
            message: `What is this employee's position?`,
            choices: ['Manager', 'Engineer', 'Intern', 'Other'],
        },
    ]);
    switch (val.choice) {
        case 'Manager':
            // call the addManager function from the Manager class
            const manager = await Manager.addManager();
            // push the new manager object to the employeeList array
            employeeList.push(manager);
            break;
        case 'Engineer':
            // call the addEngineer function from the Engineer class
            const engineer = await Engineer.addEngineer();
            // push the new engineer object to the employeeList array
            employeeList.push(engineer);
            break;
        case 'Intern':
            // call the addIntern function from the Intern class
            const intern = await Intern.addIntern();
            // push the new intern object to the employeeList array
            employeeList.push(intern);
            break;
        default:
            // create a new employee object if the user selects "other" or doesn't select any of the options
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
            ]);
            const employee = new Employee(
                val.firstName,
                val.id,
                val.email,
                'Employee'
            )
            // push the new employee object to the employeeList array
            employeeList.push(employee);
            break;
    }

    // prompt user to add another employee
    addEmployee();
}

addEmployee();