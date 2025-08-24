function order(words) {
  const newStr = words.toString().split(" ");
  const result = newStr.map((word) => {
    let number = 0;
    for (let i = 0; i < newStr.length; i++) {
      let char = word[i];
      if (char >= "0" && char <= "9") {
        number = parseInt(char);
        break;
      }
    }
    return { word: word, number: number };
  });

  result.sort((a, b) => a.number - b.number);

  return result.map((item) => item.word).join(" ");
}

// function order(words){

//   const sortedWords = words.split(" ").sort((a, b) => {
//     let num1 = Number(a.match(/[0-9]/));
//     let num2 = Number(b.match(/[0-9]/));
//     return num1 - num2;
//   });

//   return sortedWords.join(" ");
// }
