// 7 kyu
// Simple remove duplicates

function solve(arr) {
  return arr.filter((num, index) => {
    return arr.lastIndexOf(num) === index;
  });
}
