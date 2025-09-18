// 6 kyu The Supermarket Queue

function queueTime(customers, n) {
  const registers = Array(n).fill(0);

  for (const customerTime of customers) {
    registers.sort((a, b) => a - b);
    registers[0] += customerTime;
  }

  return Math.max(...registers);
}

console.log(queueTime([1, 2, 3, 4], 1));
