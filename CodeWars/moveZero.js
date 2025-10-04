// 5 kyu
// Moving Zeros To The End

function moveZeros(arr) {
  const removeZero = arr.filter((ele) => ele !== 0);
  const zeroArr = arr.filter((ele) => ele === 0);
  return [...removeZero, ...zeroArr];
}
