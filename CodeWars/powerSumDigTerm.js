function powerSumDigTerm(n) {
  let sequence = [];

  for (let base = 2; base <= 162; base++) {
    for (let pow = 2; pow <= 9; pow++) {
      const candidate = Math.pow(base, pow);

      const strArr = Array.from(candidate.toString());
      const numbers = strArr.map((ele) => Number(ele));
      const sumOfDigits = numbers.reduce((acc, val) => acc + val);

      // populating the array
      if (sumOfDigits === base) {
        sequence.push(candidate);
      }
    }
  }
  // sorted and subtracted 1 because of 0-based index
  sequence.sort((a, b) => a - b);
  return sequence[n - 1];
}

console.log(powerSumDigTerm(1));
