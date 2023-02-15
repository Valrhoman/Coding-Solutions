"use strict";

const sevenBoom = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].toString().indexOf("7") !== -1) {
      return "Boom!";
    }
  }
  return "there is no 7 in the array";
};

const sevenBoom2 = function (arr) {
  return arr.join().includes("7") ? "Boom!" : "there is no 7 in the array";
};

const sevenBoom3 = (arr) =>
  /7/.test(arr) ? "Boom!" : "there is no 7 in the array";

const test = [4, 6, 1, 7, 123, 54, 7, 867];
const test2 = 12354;

console.log(sevenBoom2([9, 1223424613, 524234, 983405913758]));
console.log(
  sevenBoom3([9, 1223424613, 524234, 983405791358, 139485392, 9234019])
);

sevenBoom2([7, 123, 5234]);
sevenBoom2([9, 123, 5234]);
sevenBoom2([9, 123, 5274]);
sevenBoom2([9, 123, 5234]);
sevenBoom2([9, 1273, 5274]);
sevenBoom([9, 1223424613, 524234, 983405913758]);
