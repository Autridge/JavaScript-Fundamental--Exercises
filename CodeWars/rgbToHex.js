function rgb(r, g, b) {
  r = Math.max(0, Math.min(255, r));
  g = Math.max(0, Math.min(255, g));
  b = Math.max(0, Math.min(255, b));
  const hexMap = {
    10: "A",
    11: "B",
    12: "C",
    13: "D",
    14: "E",
    15: "F",
  };

  const quotR = Math.floor(r / 16);
  const remR = r % 16;
  const quotG = Math.floor(g / 16);
  const remG = g % 16;
  const quotB = Math.floor(b / 16);
  const remB = b % 16;

  function getHexChar(number) {
    if (number > 9) {
      return hexMap[number];
    } else if (number < 0) {
      return "0";
    } else {
      return number.toString();
    }
  }

  const hexR = getHexChar(quotR) + getHexChar(remR);
  const hexG = getHexChar(quotG) + getHexChar(remG);
  const hexB = getHexChar(quotB) + getHexChar(remB);

  return `${hexR}${hexG}${hexB}`;
}
