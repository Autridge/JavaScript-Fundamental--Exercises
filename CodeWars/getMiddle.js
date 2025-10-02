//7 kyu
// Get the Middle Character

function getMiddle(str) {
  let pos = 0;
  let length = 0;

  if (str.length % 2 === 0) {
    pos = str.length / 2 - 1;
    length = 2;
  } else {
    pos = str.length / 2;
    length = 1;
  }
  const result = str.substring(pos, pos + length);
  return result;
}
