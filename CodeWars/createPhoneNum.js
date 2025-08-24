// 6 kyu
// Create Phone Number

function createPhoneNumber(numbers) {
  const firstThree = numbers.splice(0, 3);
  const secondThree = numbers.splice(0, 3);
  const lastFour = numbers.splice(0, 4);

  return (
    "(" +
    firstThree.join("") +
    ")" +
    secondThree.join("") +
    "-" +
    lastFour.join("")
  );
}
