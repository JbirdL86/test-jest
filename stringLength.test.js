const stringLength = require('./stringLength');


test('string size', () => {
  expect(stringLength('Hello')).toBe(5);
});

test('string short', () => {
  expect(stringLength('')).toBe('String too short');
});

test('string long', () => {
  expect(stringLength('Hello world1')).toBe('String too big');
});

