// 6 kyu
// Persistent Bugger.

function persistence(num) {
  let count = 0;

  let numArr = num.toString().split("");
  while (numArr.length !== 1) {
    let result = numArr.map((ele) => Number(ele)).reduce((a, b) => a * b);
    numArr = result.toString().split("");
    count++;
  }
  return count;
}
