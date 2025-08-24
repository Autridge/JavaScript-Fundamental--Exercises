// 8 kyu
// Remove First and Last Character

function removeChar(str) {
  return str.length >= 2 ? str.slice(1, -1) : str;
}
