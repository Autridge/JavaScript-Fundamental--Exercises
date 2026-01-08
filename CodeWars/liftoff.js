function liftoff(instructions) {
  return `${instructions.sort((a, b) => b - a).join(" ")} liftoff!`;
}

const arr = [1, 2, 4, 3, 5];

console.log(liftoff(arr));
