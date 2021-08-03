const reverseString = require('./reverseString');


test('string reverse short', () => {
  expect(reverseString('')).toBe('String too short');
});

test('string reverse long', () => {
  expect(reverseString('Hello world')).toBe('String too big');
});

test('string reversed', () => {
  expect(reverseString('Hello')).toBe('olleH');
})