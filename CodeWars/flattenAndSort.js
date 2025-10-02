// 7 kyu
// Flatten and sort an array
"use strict";

function flattenAndSort(array) {
  return array.flat().sort((a, b) => a - b);
}
