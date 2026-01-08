function score(dice) {
  let count = {};
  for (let data of dice) {
    count[data] = (count[data] || 0) + 1;
  }

  const scoringRule = {
    1: { triple: 1000, single: 100 },
    5: { triple: 500, single: 50 },
    6: { triple: 600, single: 0 },
    4: { triple: 4000, single: 0 },
    3: { triple: 300, single: 0 },
    2: { triple: 200, single: 0 },
  };

  let points = 0;

  for (let [key, value] of Object.entries(count)) {
    const quotient = Math.floor(value / 3);
    const remainder = value % 3;

    const rule = scoringRule[key];
    if (scoringRule[key]) {
      if (quotient === 1) points += rule.triple;
      if (remainder <= 2) points += remainder * rule.single;
    }
  }

  //   for (let [key, value] of Object.entries(count)) {
  //     const quotient = Math.floor(value / 3);
  //     const remainder = value % 3;

  //     switch (key) {
  //       case "1":
  //         if (quotient === 1) points += 1000;
  //         if (remainder <= 2) points += remainder * 100;
  //         break;
  //       case "5":
  //         if (quotient === 1) points += 500;
  //         if (remainder <= 2) points += remainder * 50;
  //         break;
  //       case "6":
  //         if (quotient === 1) points += 600;
  //         break;
  //       case "4":
  //         if (quotient === 1) points += 400;
  //         break;
  //       case "3":
  //         if (quotient === 1) points += 300;
  //         break;
  //       case "2":
  //         if (quotient === 1) points += 200;
  //         break;
  //     }
  //   }

  return points;
}

const dice = [1, 1, 1, 5, 1];
// const dice = [5, 1, 3, 4, 1];
console.log(score(dice));
