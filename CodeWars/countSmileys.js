// 6 kyu
// Count the smiley faces!

function countSmileys(arr) {
  let count = 0;

  for (let ele of arr) {
    if (
      (ele.startsWith(":") || ele.startsWith(";")) &&
      (ele.endsWith(")") || ele.endsWith("D"))
    ) {
      count++;
    }
  }

  return count;
}
