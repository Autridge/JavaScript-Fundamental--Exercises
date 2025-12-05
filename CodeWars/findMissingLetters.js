// 6 kyu
// Find the missing letter

function findMissingLetter(array) {
  const letters = array.join("");

  const first = letters.charCodeAt(0);
  const last = letters.charCodeAt(letters.length - 1);

  const testArr = [];

  for (let i = first; i <= last; i++) {
    let char = String.fromCharCode(i);
    testArr.push(char);
  }

  return testArr.find((char) => ![...letters].includes(char));
}

console.log(findMissingLetter(["a", "b", "c", "d", "f"]));
console.log(findMissingLetter(["O", "Q", "R", "S"]));
