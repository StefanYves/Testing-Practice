function caesarCipher(str, shift) {
  const shiftedString = str
    .split("")
    .map((char) => {
      if (char.match(/[a-z]/i)) {
        let code = char.charCodeAt(0);

        let start = code < 97 ? 65 : 97;

        return String.fromCharCode(((code - start + shift) % 26) + start);
      }
      return char;
    })
    .join("");

  return shiftedString;
}

module.exports = caesarCipher;
