// Nullable conversion
// you are given an object with properties that may contain null or undefined values. Your task is to implement a function called convertNullableValues that checks if any of the properties in the object contains null or undefined. If a property is null convert it to zero and if a property is undefined convert it to an empty string. Return the modified object.

let person = {
  name: null,
  age: 25,
};

function convertNullableValues(object) {
  for (const property in object) {
    typeof object[property] === "undefined"
      ? (object[property] = "")
      : typeof object[property] === "object"
      ? (object[property] = 0)
      : object[property];
  }

  return object;
}

console.log(convertNullableValues(person));
