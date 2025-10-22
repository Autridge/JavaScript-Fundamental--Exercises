function parse(data) {
  let counter = 0;
  let result = [];

  for (let char of Array.from(data)) {
    switch (char) {
      case "i":
        counter++;
        break;
      case "s":
        counter = Math.pow(counter, 2);
        break;
      case "d":
        counter--;
        break;
      case "o":
        result.push(counter);
        break;
      default:
        "";
    }
  }
  return result;
}
