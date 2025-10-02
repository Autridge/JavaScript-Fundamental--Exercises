// Expression Calculator

function expressionCalculator(...expression) {
  return expression.map((expr) => {
    const [operators, ...numbers] = expr;

    switch (operators) {
      case "add":
        return numbers.reduce((a, b) => a + b, 0);

      case "subtract":
        return numbers.reduce((a, b) => a - b, 0);

      case "divide":
        return numbers.reduce((a, b) => a / b);

      case "multipy":
        return numbers.reduce((a, b) => a * b, 1);

      case "power":
        return Math.pow(numbers[0], numbers[1]);

      case "sqrt":
        return Math.sqrt(numbers[0]);

      default:
        return `Wrong operator: ${operators}`;
    }
  });
}

const results = expressionCalculator(["add", 1, 2, 8], ["divide", 2, 8]);

console.log(expressionCalculator(["jinx", 2, 3]));
console.log(results);
