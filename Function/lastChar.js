// lastChar – Return last character of a string (empty string → null).lastChar("cat") → "t"

function lastChar(str) {
  return str === " " ? null : str.slice(-1);
}

console.log(lastChar(" "));
console.log(lastChar("cat"));
