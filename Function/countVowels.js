//   countVowels – Return an object of vowel counts {a:2,e:1,…}.countVowels("banana") → {a:3,e:0,i:0,o:0,u:0}

function countVowels(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  let count = { a: 0, e: 0, i: 0, o: 0, u: 0 };
  for (let letter of str) {
    if (vowels.includes(letter)) {
      count[letter]++;
    }
  }
  return count;
}

console.log(countVowels("banana"));
