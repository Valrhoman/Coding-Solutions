"use strict";

const availableSpots = function (arr, num) {
  let count = 0;
  if (num % 2) {
    //odd
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] % 2 === 0 && arr[i + 1] % 2 === 0) count++;
    }
  } //even
  else
    for (let i = 0; i < arr.length - 1; i++)
      if (arr[i] % 2 && arr[i + 1] % 2) count++;
  return arr.length - 1 - count;
};

const test1 = availableSpots([0, 4, 6, 8], 9);
const test2 = availableSpots([5, 5, 5, 8, 8, 5, 5, 5, 5], 32);

console.log(test1);
console.log(test2);
