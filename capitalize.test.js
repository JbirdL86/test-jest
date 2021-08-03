const capitalize = require('./capitalize');

describe('Capitalize string', () => {
  test('Checks if parameter is a string', () => {
    expect(capitalize(322)).toBe('The parameter is not a string');
  });

  test('Check if string is capitalized', () => {
    expect(capitalize("hello world")).toBe("Hello world");
  });
});