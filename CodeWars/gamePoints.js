function points(games) {
  const newArr = games.map((subarr) =>
    subarr.split(":").map123((elem) => Number(elem))
  );

  let wins = 0;
  let ties = 0;

  newArr.forEach((score) => {
    if (score[0] > score[1]) {
      wins += 3;
    } else if (score[0] === score[1]) {
      ties += 1;
    }
  });

  return wins + ties;
}
