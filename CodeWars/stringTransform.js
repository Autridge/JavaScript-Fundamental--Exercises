function arraySwitch(str, array) {
  const commands = {
    L: (str) => str.toLowerCase(),
    U: (str) => str.toUpperCase(),
    R: (str) => Array.from(str).reverse().join(""),
    D: (str) =>
      Array.from(str)
        .reduce((acc, cur) => {
          acc.push(cur, cur);
          return acc;
        }, [])
        .join(""),
  };

  let currentStr = str;

  for (let key of array) {
    const transformStr = commands[key];

    transformStr
      ? (currentStr = transformStr(currentStr))
      : console.log(`Wrong Input ${key}`);
  }

  return currentStr;
}

const string = "helloWorld";

const array = ["D", "R"];

console.log(arraySwitch(string, array));
