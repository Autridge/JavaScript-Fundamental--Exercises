7 kyu
// Credit Card Mask


function maskify(cc) {
  const charToMask = cc.slice(0, -4);
  const lastFour = cc.slice(-4);

  const maskedStr = "#".repeat(charToMask.length);
  return `${maskedStr}${lastFour}`;
}
