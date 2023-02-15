"use strict";

const lowestElement = function (arr, x, y) {
  const arrTemp = [];
  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      if (
        y + j < arr.length &&
        x + i < arr.length &&
        y + j > -1 &&
        x + i > -1
      ) {
        arrTemp.push(arr[x + i][y + j]);
      }
    }
  }
  return Math.min(...arrTemp);
};

const test1 = lowestElement(
  [
    [-2, -5, -500, 49501],
    [1004, 10502, -5061, 19303],
    [40012, 487190, 39430, 13899],
    [3, 1, 4, 1],
  ],
  2,
  3
);

console.log(test1);
