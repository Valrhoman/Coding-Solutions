"use strict";

const test = [1, 2, 32, 42, 4, 124, 5, 124];

const countBoomerangs = function (arr) {
  let counter = 0;
  for (let i = 0; i < arr.length - 2; i++) {
    if (arr[i] === arr[i + 2] && arr[i] !== arr[i + 1]) {
      counter++;
    }
  }
  return counter;
};

const testReturn = countBoomerangs(test);
console.log(testReturn);

const test1 = [2, 3, 2, 3, 4, 1, 5, 1];
const test1Return = countBoomerangs(test1);
console.log(test1Return);
