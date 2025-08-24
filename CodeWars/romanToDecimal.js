function romanToDecimal(roman) {
  const romToDec = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 500,
    M: 1000,
  };

  let result = 0;

  for (let i = 0; i < roman.length; i++) {
    const current = romToDec[roman[i]];
    const next = romToDec[roman[i + 1]];

    if (current < next) {
      result -= current;
    } else {
      result += current;
    }
  }

  return result;
}

console.log(romanToDecimal("MMXVII"));
