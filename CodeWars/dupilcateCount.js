// 6 kyu Counting Duplicates

function duplicateCount(text) {
  const obj = text
    .toLowerCase()
    .split("")
    .reduce((count, item) => {
      count[item] = (count[item] || 0) + 1;
      return count;
    }, {});

  const result = Object.values(obj).filter((ele) => ele > 1).length;
  return result;
}
