"use strict";

const admirable = function (n) {
  const factors = [...Array(Math.round(n / 2 + 1)).keys()].filter(
    (i) => n % i === 0
  );
  const sum = factors.reduce((a, b) => a + b);
  return sum === n
    ? "Perfect"
    : factors.find((x) => sum - 2 * x === n) || "Neither";
};

console.log(admirable(100));
console.log(admirable(12));
console.log(admirable(6));
console.log(admirable(5456));
