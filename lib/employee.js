class Employee {
    constructor(firstName, id, email, role) {
        this.firstName = firstName;
        this.id = id;
        this.email = email;
        this.role = role;
    }
    getName() {
        return this.firstName;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return 'Employee';
    }
}

module.exports = Employee;
