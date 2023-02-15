"use strict";

const product = (a, b) => (c, d) => (e, f) => a * c * e + b * d * f;

console.log(product(1, 2)(3, 4)(5, 6));

/*
CURRYING FUNCTION

const buildSandwich = function (ingredient1) {
  return function (ingredient2) {
    return function (ingredient3) {
      return `${ingredient1}, ${ingredient2}, ${ingredient3}`;
    };
  };
};

console.log(buildSandwich("Bread")("Tomato")("Cheese"));
*/
