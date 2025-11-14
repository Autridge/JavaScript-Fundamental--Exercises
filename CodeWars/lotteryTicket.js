function bingo(ticket, win) {
  let miniWin = 0;

  ticket.forEach((innerArr, i) => {
    const aStr = innerArr[0];
    const aNum = innerArr[1];
    const strArr = Array.from(aStr);
    const bool = strArr.some((char) => char.charCodeAt(0) === aNum);

    if (bool === true) miniWin++;
  });

  return miniWin > win ? "Winner" : "Loser";
}

console.log(
  bingo(
    [
      ["ABC", 65],
      ["HGR", 74],
      ["BYHT", 74],
    ],
    1
  )
);
