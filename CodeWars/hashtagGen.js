// 5 kyu The Hashtag Generator

function generateHashtag(str) {
  const newArr = str.split(" ");

  if (str.trim() === "") return false;

  const camelCase = newArr
    .filter((ele) => ele.length > 0)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join("");

  const hashtagStr = `#${camelCase}`;
  return hashtagStr.length > 140 ? false : hashtagStr;
}
