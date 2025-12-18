// 6kyu | Mexican Wave

function wave(str) {
  const result = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      result.push(
        str.slice(0, i) + str.charAt(i).toUpperCase() + str.slice(i + 1)
      );
    }
  }

  return result;
}
