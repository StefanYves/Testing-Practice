const calculator = require("./calculator");

test("Contains functions for the four basic operations", () => {
  const calc = new calculator(4, 2);
  expect(calc.add()).toEqual(6);
  expect(calc.subtract()).toEqual(2);
  expect(calc.multiply()).toEqual(8);
  expect(calc.divide()).toEqual(2);
});
