function countChars(str) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  const count = { a: 0, b: 0 };

  for (let letter of str) {
    if (alphabet.includes(letter)) {
      count[letter]++;
    }
  }

  return count;
}

console.log(countChars("aba"));
