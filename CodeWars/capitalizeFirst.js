function capitalsFirst(str) {
  if (!str.trim()) return str;

  const arr = str.split(" ");

  const validWords = arr.filter((word) => {
    const firstChar = word.charAt(0);
    return (
      (firstChar >= "A" && firstChar <= "Z") ||
      (firstChar >= "a" && firstChar <= "z")
    );
  });

  const capChar = validWords.filter(
    (value) => value.charAt(0) === value.charAt(0).toUpperCase()
  );
  const lowChar = validWords.filter(
    (value) => value.charAt(0) === value.charAt(0).toLowerCase()
  );

  const result = [];
  if (capChar.length > 0) result.push(capChar.join(" "));
  if (lowChar.length > 0) result.push(lowChar.join(" "));

  return result.join(" ");
}
