function capitalize(string) {
  const firstLetter = string.slice(0, 1);
  const capitalLetter = firstLetter.toUpperCase();
  const restOfTheWord = string.slice(1, string.length);
  const capital = capitalLetter + restOfTheWord;

  console.log(firstLetter);
  console.log(restOfTheWord);
  console.log(capital);
  return capital;
}

module.exports = capitalize;
