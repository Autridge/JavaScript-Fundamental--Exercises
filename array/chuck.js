// chunk – Split array into sub‑arrays of length size.chunk([1,2,3,4],2) → [[1,2],[3,4]]

function chunk(arr, chunkSize) {
  let result = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    result.push(arr.slice(i, i + chunkSize));
  }

  return result;
}

console.log(chunk([1, 2, 3, 4, 6], 2));
