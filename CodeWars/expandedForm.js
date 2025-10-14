// 6 kyu
// Write Number in Expanded Form

function expandedForm(num) {
  const numArr = Array.from(num.toString());

  const result = numArr.map((num, index) => {
    return num + "0".repeat(numArr.length - index - 1);
  });

  return result.filter((value) => value.at(0) !== "0").join(" + ");
}
