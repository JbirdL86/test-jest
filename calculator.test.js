const Calculator = require('./calculator.js');

const calculator = new Calculator();

describe('Calculator add and substract', () => {
  test('adding numbers', () => {
    expect(calculator.add(1, 2)).toBe(3);
  });

  test('substrac numbers', () => {
    expect(calculator.substract(2, 1)).toBe(1);
  });

  test('substract from smaller value', () => {
    expect(calculator.substract(3, 5)).toBe('First parameter is smaller than second')
  });
});

describe('Calculator divide', () => {
  test('Dividing by zero', () => {
    expect(calculator.divide(5, 0)).toBe('Imposible to divide by zero');
  });

  test('Dividing good parameters', () => {
    expect(calculator.divide(6, 2)).toBe(3);
  });

  test('Dividing by zero', () => {
    expect(calculator.divide(0, 5)).toBe('Zero is not divisible');
  });
});

describe('Calculator multiply', ()=> {
  test('Multiplying good parameters', () => {
    expect(calculator.multiply(2, 2)).toBe(4);
  });

  test('Multiplying floating number', () => {
    expect(calculator.multiply(2.2, 2)).toBe("Value is not an integer");
  });

  test('Multiplying by zero', () => {
    expect(calculator.multiply(2, 0)).toBe(0);
  });
});

