"use strict";

const heronF = function (arr) {
  const [a, b, c] = arr;
  const s = 0.5 * (a + b + c);
  const max = Math.max(...arr);

  return 2 * s - max > max && Math.sqrt(s * (s - a) * (s - b) * (s - c));
};

const doesTriangleFit = function (brick, hole) {
  return heronF(hole) && heronF(brick) && heronF(hole) >= heronF(brick);
};

const test2 = doesTriangleFit([1, 1, 1], [1, 1, 1]);
const test3 = doesTriangleFit([1, 1, 1], [2, 2, 2]);
const test4 = doesTriangleFit([1, 6, 8], [1, 6, 8]);
const test5 = doesTriangleFit([12, 63, 42], [1, 6, 8]);
const test6 = doesTriangleFit([3, 6, 8], [23, 63, 42]);
const test7 = doesTriangleFit([3, 6, 8], [1, 10, 8]);

console.log(test2);
console.log(test3);
console.log(test4);
console.log(test5);
console.log(test6);
console.log(test7);
