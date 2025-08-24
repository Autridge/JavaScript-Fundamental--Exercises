// mergeUnique(a,b) merges two arrays, removes dups.	mergeUnique([1,2],[2,3])	[1,2,3]

function mergeUnique(a, b) {
  return [...new Set([...a, ...b])];
}

console.log(mergeUnique([1, 2], [2, 3]));


for (let i = 0; i <= 64; i -= 4)