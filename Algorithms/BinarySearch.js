function binarySearch(arr, target) {
  //   arr.sort((a, b) => a - b);
  let left = arr[0];
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) return mid;
    target > arr[mid] ? (left = mid + 1) : (right = mid - 1);
  }

  return -1;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(binarySearch(arr, 6));
