function printerErrors(s) {
  const errors = "nopqrstuvwxyz".split("");
  const newArr = s.split("");

  const errorsCount = newArr.filter((char) => errors.includes(char)).length;

  return `${errorsCount}/${newArr.length}`;
}
