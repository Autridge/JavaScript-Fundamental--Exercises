// 6 kyu
// Duplicate Encoder

function duplicateEncode(str) {
  const lowerCaseArr = str.toLowerCase();
  let charCount = {};

  lowerCaseArr.split("").forEach((char) => {
    charCount[char] = (charCount[char] || 0) + 1;
  });

  return lowerCaseArr
    .split("")
    .map((char) => (charCount[char] === 1 ? "(" : ")"))
    .join("");
}
