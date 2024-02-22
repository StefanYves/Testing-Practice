const capitalize = require("./index");

test("Capitalizes first letter of the word tennis", () => {
  expect(capitalize("tennis")).toBe("Tennis");
});
test("Capitalizes first letter of the word barbut", () => {
  expect(capitalize("barbut")).toBe("Barbut");
});
