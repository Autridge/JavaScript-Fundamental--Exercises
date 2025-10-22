// 6 kyu
// Take a Ten Minutes Walk

function isValidWalk(walk) {
  if (walk.length !== 10) return false;

  const countObj = walk.reduce((count, item) => {
    count[item] = (count[item] || 0) + 1;
    return count;
  }, {});

  return countObj["n"] === countObj["s"] && countObj["e"] === countObj["w"];
}
