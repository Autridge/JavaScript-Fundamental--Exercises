// unique – Return array with duplicates removed (preserve order).unique([1,1,2,3]) → [1,2,3]

function unique(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        arr.splice(j, 1);
        j--;
      }
    }
  }
  return arr;
}

// function unique(arr) {
//   return [...new Set(arr)];
// }

console.log(unique([1, 1, 2, 3]));
