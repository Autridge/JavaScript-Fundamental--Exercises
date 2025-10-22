// 7 kyu
// Vowel Count

function getCount(str) {
  let counter = 0;

  for (let char of Array.from(str)) {
    if ("aeiou".includes(char)) counter++;
  }

  return counter;
}
