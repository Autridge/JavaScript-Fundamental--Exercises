// 6 kyu
// Replace With Alphabet Position

function alphabetPosition(text) {
  const cleanText = text
    .split("")
    .filter((char) => {
      return (char >= "a" && char <= "z") || (char >= "A" && char <= "Z");
    })
    .join("");

  console.log(cleanText);

  return cleanText
    .toUpperCase()
    .split("")
    .map((char) => char.charCodeAt(0) - 65 + 1)
    .join(" ");
}
