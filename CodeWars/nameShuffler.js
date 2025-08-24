// 8 kyu Name Shuffler

function nameShuffler(str) {
  const [first, last] = str.split(" ");
  return [last, first].join(" ");
}
