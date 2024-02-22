function reverseString(string) {
  const array = string.split("");
  let reversedString = "";

  for (let i = array.length - 1; i >= 0; i--) {
    reversedString += array[i];
  }
  return reversedString;
}
module.exports = reverseString;
