const array = [";]", ":[", ";*", ":$", ";-D"];
const array2 = [":)", ":(", ":D", ":O", ":;"];
const arr = [":>", ";o)", ":o)", ":D", ":-)", ":D", ";~>"];
const arr2 = [":---)", "))", ";~~D", ";D", ":-)"];

function countSmileys(arr) {
  let count = 0;

  const smileyFace = (char) =>
    (char.startsWith(":") || char.startsWith(";")) &&
    (char.endsWith(")") || char.endsWith("D"));

  for (let ele of arr) {
    if (ele.length <= 2) {
      if (smileyFace(ele)) {
        count++;
      }
    } else if (ele.length === 3) {
      if (smileyFace(ele) && (ele.includes("-") || ele.includes("~"))) {
        count++;
      }
    }
  }
  return count;
}
