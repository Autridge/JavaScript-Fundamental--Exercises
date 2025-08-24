// avgArray – Average a numeric array (0 length → null).avgArray([2,4]) → 3

function avgArray(arr) {
  const sum = arr.reduce((acc, curr) => acc + curr, 0);
  return sum / arr.length;
}

console.log(avgArray([2, 4]));
