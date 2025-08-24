//sumArray – Sum all numbers in an array.sumArray([4,‑2,3]) → 5

function sumArray(arr) {
  return arr.reduce((acc, curr) => acc + curr, 0);
}

console.log(sumArray([1, 2, 3, 4, 5]));
