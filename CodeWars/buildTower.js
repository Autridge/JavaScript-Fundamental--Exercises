// 6 kyu Build Tower

function towerBuilder(nFloors) {
  const tower = [];

  for (let i = 1; i <= nFloors; i++) {
    let row = "";
    const spaces = " ".repeat(nFloors - i);
    const stars = "*".repeat(i * 2 - 1);
    tower.push(spaces + stars + spaces);
  }
  return tower;
}
