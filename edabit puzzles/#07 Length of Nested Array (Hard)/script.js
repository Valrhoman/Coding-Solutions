"use strict";

const getLength = function (arr) {
  return arr.flat(Infinity).length;
};

const test1 = [];

console.log(getLength(test1));
