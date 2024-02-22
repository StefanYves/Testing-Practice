const caesarCipher = require("./caesarCipher");

test("Caesar Shift of 3", () => {
  expect(caesarCipher("abc", 3)).toBe("def");
});
