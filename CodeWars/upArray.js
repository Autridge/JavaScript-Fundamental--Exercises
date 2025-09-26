// 6 kyu
// +1 Array

function upArray(arr) {
  if (arr.length === 0 || arr.some((ele) => ele > 9 || ele < 0)) {
    return null;
  }

  const bigNum = BigInt(arr.join("")) + 1n;
  const result = bigNum.toString().split("").map(Number);

  while (result.length < arr.length) {
    result.unshift(0);
  }

  return result;
}
