// 7 kyu
// Square Every Digit

function squareDigits(num) {
  return parseInt(
    num
      .toString()
      .split("")
      .map((digit) => digit * digit)
      .join("")
  );
}
