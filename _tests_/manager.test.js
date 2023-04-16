const Manager = require('../lib/manager');
const inquirer = require('inquirer');

const manager = new Manager('Lacy', 21, 'test@test.com', 1);

describe('Manager constructor', () => {
    test('should confirm that firstName property functions properly', () => {
        expect(manager.firstName).toBe('Lacy');
    });

    test('should confirm that id property functions properly', () => {
        expect(manager.id).toBe(21);
    });

    test('should confirm that email property functions properly', () => {
        expect(manager.email).toBe('test@test.com');
    });

    test('should confirm that github property functions properly', () => {
        expect(manager.officeNumber).toBe(1);
    });

    test('should confirm that getOfficeNumber method functions properly', () => {
        expect(manager.getOfficeNumber()).toBe(1);
    });

    test('should confirm that getRole method functions properly', () => {
        expect(manager.getRole()).toBe('Manager');
    });
});