// 8 kyu
// Exclamation marks series #11: Replace all vowel to exclamation mark in the sentence

function replace(s) {
  // return s.replace(/[aeiou]/gi, "!");

  return s
    .split("")
    .map((char) => ("aeiouAEIOU".includes(char) ? "!" : char))
    .join("");
}
