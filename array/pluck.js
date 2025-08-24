// pluck – Given array of objects & key, return array of the key values.pluck([{n:1},{n:2}], "n") → [1,2]

function pluck(arr, key) {
  const result = arr.map((obj) => obj[key]);
  return result;
}

console.log(pluck([{ n: 1 }, { n: 2 }], "n"));
