//maxOfThree – Highest of three numbers (no Math.max).maxOfThree(7,1,9) → 9

function maxOfThree(arr) {
  if (arr[0] >= arr[1] && arr[0] >= arr[2]) {
    return arr[0];
  } else if (arr[1] >= arr[0] && arr[1] >= arr[2]) {
    return arr[1];
  } else if (arr[2] >= arr[0] && arr[2] >= arr[1]) {
    return arr[2];
  }
}

const testArr = [7, 1, 9];
console.log(maxOfThree(testArr));
