// 6 kyu
// Convert string to camel case

function toCamelCase(str) {
  const arr = str.split(/_|-/);
  return arr
    .map((word, index) => {
      if (index === 0) {
        return word;
      }
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join("");
}
