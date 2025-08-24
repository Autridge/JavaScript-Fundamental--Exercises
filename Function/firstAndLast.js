//firstAndLast – Return an object {first, last} of first/last characters.firstAndLast("code") → {first:"c", last:"e"}

function firstAndLast(str) {
  const first = str.slice(0, 1);
  const last = str.slice(-1);
  return {
    first,
    last,
  };
}

console.log(firstAndLast("code"));
