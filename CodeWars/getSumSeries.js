// 7 kyu
// Beginner Series #3 Sum of Numbers

function getSum(a, b) {
  let sum = 0;
  const max = Math.max(a, b);
  const min = Math.min(a, b);

  for (let i = min; i <= max; i++) {
    sum += i;
  }
  return sum;
}
