// 8 kyu
// Thinkful - Logic Drills: Traffic light

function updateLight(current) {
  return current === "green"
    ? "yellow"
    : current === "yellow"
    ? "red"
    : current === "red"
    ? "green"
    : 1;
}
