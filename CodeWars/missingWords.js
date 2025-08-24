// 7 kyu Jenny the youngest detective

function missingWord(nums, str) {
  const sortedNum = nums.sort((a, b) => a - b);
  const cleanedStr = str.split(" ").join("");

  if (nums.some((pos) => pos >= cleanedStr.length)) {
    return "No mission today";
  } else {
    return sortedNum
      .map((pos) => cleanedStr[pos])
      .join("")
      .toLowerCase();
  }
}
