// absDiff – Absolute difference between two numbers.absDiff(7,12) → 5

function absDiff(num1, num2) {
  return num1 > num2 ? num1 - num2 : num2 - num1;
}

console.log(absDiff(5, 10));
