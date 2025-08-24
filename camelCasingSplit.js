function solution(string) {
  let str = string.split("");
  str.map((char, index) => {
    if (/[A-Z]/.test(char)) {
      str[index] = " " + char;
    }
  });
  return str.join("");
}

console.log(solution("camelCasing"));
console.log(solution("camel"));
