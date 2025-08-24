// longestWord(sentence) – return longest (break ties by first seen).	longestWord("The quick brown fox")	"quick"

function longestWord(str) {
  const newStr = str.split(" ");
  const maxLength = Math.max(...newStr.map((word) => word.length));

  const longestWord = newStr.find((word) => word.length === maxLength);

  return longestWord;
}

console.log(longestWord("The quick brown fox"));
