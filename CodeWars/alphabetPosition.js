// 6 kyu
// Replace With Alphabet Position

function alphabetPosition(text) {
  text = text.replace(/[^\w]/g, "").toUpperCase();
  return text
    .split("")
    .map((char) => char.charCodeAt(0) - 65 + 1)
    .join(" ");
}

// Without Regex

function alphabetPosition2(text) {
  const cleanText = text
    .split("")
    .filter((char) => {
      return (
        (char >= "a" && char <= "z") ||
        (char >= "A" && char <= "Z") ||
        (char >= "0" && char <= "9") ||
        char === "_"
      );
    })
    .join("");

  return cleanText
    .toUpperCase()
    .split("")
    .map((char) => char.charCodeAt(0) - 65 + 1)
    .join(" ");
}
