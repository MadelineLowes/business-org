const Intern = require('../lib/intern');
const inquirer = require('inquirer');

const intern = new Intern('Lacy', 21, 'test@test.com', 'Western');

describe('Intern constructor', () => {
    test('should confirm that getName property functions properly', () => {
        expect(intern.firstName).toBe('Lacy');
    });

    test('should confirm that getId property functions properly', () => {
        expect(intern.id).toBe(21);
    });

    test('should confirm that getEmail property functions properly', () => {
        expect(intern.email).toBe('test@test.com');
    });

    test('should confirm that school property functions properly', () => {
        expect(intern.school).toBe('Western');
    });

    test('should confirm that getSchool method functions properly', () => {
        expect(intern.getSchool()).toBe('Western');
    });

    test('should confirm that getRole method functions properly', () => {
        expect(intern.getRole()).toBe('Intern');
    });
});