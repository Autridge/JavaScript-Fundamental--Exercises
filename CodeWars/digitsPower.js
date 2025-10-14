//  6 kyu
// Playing with digits

function digPow(n, p) {
  const numArr = Array.from(n.toString()).map((ele) => Number(ele));
  let sum = 0;

  numArr.forEach((value, index) => {
    let powSum = Math.pow(value, index + p);
    sum += powSum;
  });

  let k = Math.floor(sum / n);

  return n * k === sum ? k : -1;
}
