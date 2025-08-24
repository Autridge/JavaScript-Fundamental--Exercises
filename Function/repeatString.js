//repeatString – Repeat string n times.repeatString("ha",3) → "hahaha"

function repeatString(str, times) {
  //   let result = "";
  //   for (let i = 0; i < times; i++) {
  //     result += str;
  //   }
  //   return result;
  return str.repeat(times);
}

console.log(repeatString("hi", 3));
