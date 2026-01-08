// 5 kyu
// Convert PascalCase string into snake_case

function toUnderScore(string) {
  if (typeof string === "number") {
    return +string;
  } else {
    return string
      .split(/(?=[A-Z])/)
      .join("_")
      .toLowerCase();
  }
}

console.log(toUnderScore("Test7Controller"));
console.log(toUnderScore(1));
