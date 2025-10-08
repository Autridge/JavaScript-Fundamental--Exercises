// 7 kyu
// Find Your Villain Name

function getVillainName(birthday) {
  const monthMap = {
    0: "The Evil",
    1: "The Vile",
    2: "The Cruel",
    3: "The Trashy",
    4: "The Despicable",
    5: "The Embarrassing",
    6: "The Disreputable",
    7: "The Atrocious",
    8: "The Twirling",
    9: "The Orange",
    10: "The Terrifying",
    11: "The Awkward",
  };

  const dateMap = {
    0: "Mustache",
    1: "Pickle",
    2: "Hood Ornament",
    3: "Raisin",
    4: "Recycling Bin",
    5: "Potato",
    6: "Tomato",
    7: "House Cat",
    8: "Teaspoon",
    9: "Laundry Basket",
  };

  const firstName = birthday.getMonth();
  const lastName = birthday.getDate();

  return `${monthMap[firstName]} ${dateMap[lastName % 10]}`;
}
