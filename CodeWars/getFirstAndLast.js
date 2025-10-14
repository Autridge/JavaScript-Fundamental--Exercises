// 7 kyu
// Extending JavaScript Objects: Get First & Last Array Element

Array.prototype.first = function () {
  return this.length === 0 ? undefined : this.at(0);
};
Array.prototype.last = function () {
  return this.length === 0 ? undefined : this.at(-1);
};

const a = [1, 2, 3, 4, 5];
a.first();
a.last();
