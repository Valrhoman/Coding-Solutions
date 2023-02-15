"use strict";

const oddishOrEvenish = function (n) {
  let sum = 0;
  sum = n
    .toString()
    .split("")
    .map(Number)
    .reduce(function (a, b) {
      return a + b;
    }, 0);

  if (sum % 2 === 0) {
    return `Evenish`;
  } else return `Oddish`;
};

oddishOrEvenish(123897);
