const Engineer = require('../lib/engineer');
const inquirer = require('inquirer');

const engineer = new Engineer('Lacy', 21, 'test@test.com', 'LacyTest');

describe('Engineer constructor', () => {
    test('should confirm that firstName property functions properly', () => {
        expect(engineer.firstName).toBe('Lacy');
    });

    test('should confirm that id property functions properly', () => {
        expect(engineer.id).toBe(21);
    });

    test('should confirm that email property functions properly', () => {
        expect(engineer.email).toBe('test@test.com');
    });

    test('should confirm that github property functions properly', () => {
        expect(engineer.github).toBe('LacyTest');
    });

    test('should confirm that getGithub method functions properly', () => {
        expect(engineer.getGithub()).toBe('LacyTest');
    });

    test('should confirm that getRole method functions properly', () => {
        expect(engineer.getRole()).toBe('Engineer');
    });
});