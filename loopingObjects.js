"use strict";

const openingHours = {
  Wednesday: {
    open: 12,
    close: 22,
  },
  Thursday: {
    open: 11,
    close: 23,
  },
  Friday: {
    open: 0,
    close: 24,
  },
};

// Property NAMES
const properties = Object.keys(openingHours);
console.log(properties);

for (const day of properties) {
  console.log(day);
}

//something cool with loops
let openStr = `We are open on ${properties.length} days: `;
for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);

// Property VALUES
const values = Object.values(openingHours);
console.log(values);

// Entire object
const entries = Object.entries(openingHours);

for (const [day, { open, close }] of entries) {
  console.log(`On ${day} we open at ${open} and close at ${close}`);
}

// Key Takeaways
// Objects in JavaScript are not iterable directly, but their keys, values, and entries can be looped over using specific methods.
// Object.keys() returns an array of property names (keys), which can be looped over with a for...of loop.
// Object.values() returns an array of property values, allowing similar iteration.
// Object.entries() returns an array of key-value pairs, enabling iteration over both names and values, and supports destructuring for cleaner code.
