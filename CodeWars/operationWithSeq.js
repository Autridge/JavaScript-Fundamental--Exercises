// 7 kyu
// Operations with sequence

const calc = function (a) {
  const transformed = a.map((ele, index) => {
    let result = ele;

    if (ele > 0) {
      result = Math.pow(ele, 2);
    }

    if ((index + 1) % 3 === 0) {
      result *= 3;
    }

    if ((index + 1) % 5 === 0) {
      result *= -1;
    }
    return result;
  });

  return transformed.reduce((acc, cur) => acc + cur, 0);
};
