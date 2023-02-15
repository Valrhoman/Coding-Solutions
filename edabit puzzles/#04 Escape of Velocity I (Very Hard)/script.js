"use strict";

const escapeVelocity = function (str) {
  const planet = str.toLowerCase();

  const mEarth = 5.976e24;
  const rEarth = 6378e3;
  const gConstant = 6.67e-11;
  let m, r;
  switch (planet) {
    case "earth":
      m = 1;
      r = 1;
      break;
    case "mercury":
      m = 0.0558;
      r = 0.383;
      break;
    case "venus":
      m = 0.815;
      r = 0.95;
      break;
    case "mars":
      m = 0.107;
      r = 0.532;
      break;
    case "jupiter":
      m = 318;
      r = 11.2;
      break;
    case "saturn":
      m = 95.1;
      r = 9.41;
      break;
    case "uranus":
      m = 14.5;
      r = 4.06;
      break;
    case "neptune":
      m = 17.2;
      r = 3.88;
      break;
  }
  const mps = +Math.sqrt((2 * gConstant * m * mEarth) / (r * rEarth)).toFixed(
    2
  );
  const kph = +(3.6 * mps).toFixed(2);
  const kps = +(mps / 1000).toFixed(2);
  return `The escape velocity in m/s is: ${mps}. The escape velocity in km/h is: ${kph}. The escape velocity in km/s is: ${kps}.`;
};

console.log(escapeVelocity("Venus"));
console.log(escapeVelocity("jUpitEr"));

// Planet	Mass	Radius
// Mercury	0.0558	0.383
// Venus	0.815	0.95
// Earth	1	1
// Mars	0.107	0.532
// Jupiter	318	11.2
// Saturn	95.1	9.41
// Uranus	14.5	4.06
// Neptune	17.2	3.88
