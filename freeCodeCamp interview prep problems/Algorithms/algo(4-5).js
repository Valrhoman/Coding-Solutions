"use strict";
function pairwise(arr, arg) {
  const diffed = arr.map((num) => arg - num);

  let arrResult = [];

  diffed.forEach((diff, i) => {
    const index = arr.findIndex(
      (num, index) => num === diff && !arrResult.includes(index) && i !== index
    );
    if (index !== -1) {
      arrResult.push(index);
    }
  });
  console.log(arrResult);

  return arrResult.reduce((sum, cur) => sum + cur, 0);
}

const test1 = pairwise([1, 3, 2, 4], 4);
console.log(test1);
