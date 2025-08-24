// 8 kyu
// Abbreviate a Two Word Name

function abbrevName(name) {
  return name
    .toUpperCase()
    .split(" ")
    .map((initial) => initial[0])
    .join(".");
}
