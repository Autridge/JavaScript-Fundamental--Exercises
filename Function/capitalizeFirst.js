// capitalizeFirst – Capitalize first letter, lowercase rest.capitalizeFirst("hELLo") → "Hello"

function capitalizeFirst(str) {
  return str.slice(0, 1).toUpperCase() + str.slice(1).toLowerCase();
}

console.log(capitalizeFirst("hELLO"));
