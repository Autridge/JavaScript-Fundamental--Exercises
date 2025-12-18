function incrementString(str) {
  let i = str.length - 1;
  while (i >= 0 && !isNaN(parseInt(str[i]))) {
    i--;
  }
  const text = str.slice(0, i + 1);
  const num = str.slice(i + 1);

  if (num === "") {
    return str + "1";
  }

  let newNum = (+num + 1).toString();

  while (newNum.length < num.length) {
    newNum = "0" + newNum;
  }

  return text + newNum;
}
