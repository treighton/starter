var add = require('../src/index');

test('Should add numbers', () => {
    expect(add(2,5)).toBe(9)
})