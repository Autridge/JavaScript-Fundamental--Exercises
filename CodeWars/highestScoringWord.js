// 6 kyu
// Highest Scoring Word

function high(x) {
  const strArr = x.split(" ");

  let highestWord = "";
  let maxScore = 0;

  strArr.forEach((word) => {
    let wordScore = 0;

    for (let i = 0; i < word.length; i++) {
      wordScore += word.charCodeAt(i) - 96;
    }
    if (wordScore > maxScore) {
      maxScore = wordScore;
      highestWord = word;
    }
  });

  return highestWord;
}
