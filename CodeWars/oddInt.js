// 6 kyu Find the odd int

function findOdd(A) {
  const countInt = A.reduce((count, item) => {
    count[item] = (count[item] || 0) + 1;
    return count;
  }, {});

  let result = "";
  for (const key in countInt) {
    if (countInt[key] % 2 !== 0) {
      result = key;
    }
  }
  return Number(result);
}
