"use strict";

const shadowSentence = function (str1, str2) {
  str1 = str1.split(" ");
  str2 = str2.split(" ");
  console.log(str1, str2);
  // console.log(str1.length, str2.length);

  if (str1.length === str2.length) {
    for (let i = 0; i < str1.length; i++) {
      if (str1[i].length != str2[i].length) return false;

      console.log(str1[i].split(""));

      if (str1[i].split("").some((x) => str2[i].includes(x))) return false;
    }
    return true;
  } else return false;
};

console.log(shadowSentence("etlog mo as3qr", "adsfs wwerwed sdwe"));

const a = "qwerf s";
console.log(a.includes("s"));
