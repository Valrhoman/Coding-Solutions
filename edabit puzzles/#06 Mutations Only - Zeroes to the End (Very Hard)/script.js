"use strict";

const zeroesToEnd = function (arr) {
  let a = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[a] === 0) {
      arr.splice(a, 1);
      arr.push(0);
      a--;
    }
    a++;
  }
  return arr;
};

const test1 = [1, 2, 0, 0, 4, 0, 5];
const test2 = [1, 0, 4, 0, 5];
const test3 = [3, 2, 0, 0, 0, 0, 4, 0, 5];
const test4 = [0, 5, 4, 2, 0, 5, 1, 3];
const test5 = [1, 2];

console.log(zeroesToEnd(test1));
console.log(zeroesToEnd(test2));
console.log(zeroesToEnd(test3));
console.log(zeroesToEnd(test4));
console.log(zeroesToEnd(test5));
