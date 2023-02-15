"use strict";

const twoPowersTwo = function (n) {
  if (n === 0) return false;
  if (n === 1) return true;
  if (n % 2 === 1) {
    return Number.isInteger(Math.log2(n - 1));
  } else {
    while (n % 2 === 0) {
      n /= 2;
    }
    if (n === 1) return true;
    else return Number.isInteger(Math.log2(n - 1));
  }
};

twoPowersTwo(9);
console.log(twoPowersTwo(1));
console.log(twoPowersTwo(96));
console.log(twoPowersTwo(97));
console.log(twoPowersTwo(1048578));
