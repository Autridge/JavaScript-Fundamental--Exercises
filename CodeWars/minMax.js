// 7 kyu
// The highest profit wins!

function minMax(arr) {
  const minValue = Math.min(...arr);
  const maxValue = Math.max(...arr);

  return [minValue, maxValue];
}
