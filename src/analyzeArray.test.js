const array = require("./analyzeArray");

test("Contains the following properties", () => {
  expect(array([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
