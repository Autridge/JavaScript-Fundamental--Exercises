// 7 kyu Swap two elements

function swapTwo(array, a, b) {
  const first = array.indexOf(a);
  const last = array.lastIndexOf(b);

  [array[first], array[last]] = [array[last], array[first]];
  return array;
}
