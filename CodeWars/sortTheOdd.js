function sortArray(array) {
  const odd = array.filter((value) => value % 2).sort((a, b) => a - b);

  return array.map((value) => (value % 2 ? odd.shift() : value));
}

console.log(sortArray([5, 3, 2, 8, 1, 4]));
