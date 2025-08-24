// getMiddle – Return middle char(s) of a string.getMiddle("code") → "od" | getMiddle("wow") → "o"

function getMiddle(str) {
  const mid = Math.floor(str.length / 2);
  return str.length % 2 === 0
    ? str.slice(mid - 1, mid + 1)
    : str.slice(mid, mid + 1);
}

console.log(getMiddle("code"));
console.log(getMiddle("wow"));
