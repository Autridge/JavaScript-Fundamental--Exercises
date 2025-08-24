// nextCharCodes – Map each char to its charCode+1 array.nextCharCodes("AB") → [66,67]

// function nextCharCodes(str) {
//   let charCode = [];
//   for (let i = 0; i < str.length; i++) {
//     charCode.push(str.charCodeAt(i) + 1);
//   }
//   return charCode;
// }

function nextCharCodes(str) {
  return str.split("").map((char) => char.charCodeAt(0) + 1);
}

console.log(nextCharCodes("AB"));
