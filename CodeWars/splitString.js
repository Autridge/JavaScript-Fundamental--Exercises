function solution(str) {
  let result = [];
  if (str.length % 2 === 1) {
    str = str + "_";
  }

  for (let i = 0; i < str.length; i += 2) {
    result.push(str.slice(i, i + 2));
  }
  return result;
}
