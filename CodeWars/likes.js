function likes(names) {
  switch (names.length) {
    case 0:
      return `no one likes this`;
    case 1:
      return `${names[0]} likes this`;
    case 2:
      return `${names[0]} and ${names[1]} like this`;
    case 3:
      return `${names[0]}, ${names[1]}, ${names[2]} liked this`;

    default:
      return `${names[0]}, ${names[1]} and ${
        names.length - 2
      } others liked this`;
  }
}

console.log(likes(["Alex", "Jacob", "Mark", "Max"]));
console.log(likes(["Alex", "Jacob", "Mark"]));
console.log(likes([]));
console.log(likes(["Peter"]));
