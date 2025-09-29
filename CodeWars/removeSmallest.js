// 7 kyu
// Remove the minimum

function removeSmallest(numbers) {
  const minValue = numbers.indexOf(Math.min(...numbers));

  return numbers.slice(0, minValue).concat(numbers.slice(minValue + 1));
}

// got this from other users

// const removeSmallest = numbers => numbers.filter((n,i) => i !== numbers.indexOf(Math.min(...numbers)));
