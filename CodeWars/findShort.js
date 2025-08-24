// 7 kyu
// Shortest Word

function findShort(s) {
  const newStr = s.split(" ");
  const minLength = Math.min(...newStr.map((word) => word.length));
  const shortWord = newStr.find((word) => word.length === minLength);

  return shortWord.length;
}
