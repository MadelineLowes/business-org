const Employee = require('../lib/employee');
    
const employee = new Employee('Lacy', 21, 'test@test.com');

describe('Employee constructor', () => {
  test('should confirm that getName method functions properly', () => {
    expect(employee.getName()).toBe('Lacy');
  });

  test('should confirm that getId method functions properly', () => {
    expect(employee.getId()).toBe(21);
  });

  test('should confirm that getEmail method functions properly', () => {
    expect(employee.getEmail()).toBe('test@test.com');
  });

  test('should confirm that getRole method functions properly', () => {
    expect(employee.getRole()).toBe('Employee');
  });
});