// swap – Swap first/last elements in‑place; return array.swap([1,2,3]) → [3,2,1]

function swap(arr) {
  [arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]];
  return arr;
}

let arr = [1, 2, 3, 9, 10, 15];

console.log(swap(arr));
