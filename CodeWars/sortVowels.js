// 7Kyu Sort the Vowels!

function sortVowels(s) {
  if (typeof s !== "string") return -1;

  return Array.from(s)
    .map((char) => ("aeiouAEIOU".includes(char) ? `|${char}` : `${char}|`))
    .join("\n");
}

console.log(sortVowels("CODEWARS"));
console.log(sortVowels("Rnd Te5T"));
console.log(sortVowels(12345));
