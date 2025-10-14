// 7 kyu
// Find Your Villain Name

function getVillainName(birthday) {
  const month = [
    "The Evil",
    "The Vile",
    "The Cruel",
    "The Trashy",
    "The Despicable",
    "The Embarrassing",
    "The Disreputable",
    "The Atrocious",
    "The Twirling",
    "The Orange",
    "The Terrifying",
    "The Awkward",
  ];

  const date = [
    "Mustache",
    "Pickle",
    "Hood Ornament",
    "Raisin",
    "Recycling Bin",
    "Potato",
    "Tomato",
    "House Cat",
    "Teaspoon",
    "Laundry Basket",
  ];

  const firstName = birthday.getMonth();
  const lastName = birthday.getDate();

  return `${month[firstName]} ${datess[lastName % 10]}`;
}

console.log(getVillainName(new Date("April 21")));
