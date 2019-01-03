const functions = require('./functions');

test('add function 1 + 2 = 3', () => {
expect(functions.add(1,2)).toBe(3);
});
