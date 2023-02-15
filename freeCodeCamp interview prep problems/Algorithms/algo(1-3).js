"use strict";
////////////////////////////////////
// #1 Finding Symmetric Difference

function sym(...args) {
  return Array.from(args.reduce(reducer, new Set()));
}

function reducer(result, arr) {
  const compare = new Set(arr);
  for (let val of compare) {
    if (result.has(val)) {
      result.delete(val);
    } else {
      result.add(val);
    }
  }
  return result;
}

const test1 = sym([1, 2], [2, 3], [3, 5]);
const test2 = sym([1, 2, 5], [2, 3, 5], [3, 4, 5]);

////////////////////////////////////
// #2 Inventory Update

function updateInventory(arr1, arr2) {
  arr2.forEach((newItem) => {
    const index = arr1.findIndex((item) => item[1] === newItem[1]);
    if (index === -1) arr1.push(newItem);
    else arr1[index][0] += newItem[0];
  });
  return sortInventoryABC(arr1);
}

function sortInventoryABC(arr) {
  const sorted = [...arr].sort((a, b) => a[1].localeCompare(b[1]));
  return sorted;
}

// Example inventory lists
var curInv = [
  [21, "Bowling Ball"],
  [2, "Dirty Sock"],
  [1, "Hair Pin"],
  [5, "Microphone"],
];

var newInv = [
  [2, "Hair Pin"],
  [3, "Half-Eaten Apple"],
  [67, "Bowling Ball"],
  [7, "Toothpaste"],
];

const test3 = updateInventory(curInv, newInv);

////////////////////////////////////
// #3 No Repeats Please

function permAlone(str) {
  const allPerms = permutator(Array.from(str));
  // console.log(allPerms);
  const filtered = allPerms.filter((x) => /(.)\1+/.test(x));
  // console.log(mapped);
  return allPerms.length - filtered.length;
}

function permutator(inputArr) {
  let result = [];

  const permute = (arr, m = []) => {
    if (arr.length === 0) {
      result.push(m.join(""));
    } else {
      for (let i = 0; i < arr.length; i++) {
        let curr = arr.slice();
        let next = curr.splice(i, 1);
        permute(curr.slice(), m.concat(next));
      }
    }
  };

  permute(inputArr);

  return result;
}

const test4 = permAlone("abcdefa");
console.log(test4);

///// Heap's Algorithm from YT

// const getPermutations = (arr) => {
//   if (arr === []) {
//     console.log("💥");
//     return;
//   }

//   const output = [];

//   const swapInPlace = (arrToSwap, indexA, indexB) => {
//     const temp = arrToSwap[indexA];
//     arrToSwap[indexA] = arrToSwap[indexB];
//     arrToSwap[indexB] = temp;
//   };

//   const generate = (n, heapArr) => {
//     if (n === 1) {
//       output.push(heapArr.slice());
//       return;
//     }

//     generate(n - 1, heapArr);

//     for (let i = 0; i < n - 1; i++) {
//       if (n % 2 === 0) {
//         swapInPlace(heapArr, i, n - 1);
//       } else {
//         swapInPlace(heapArr, 0, n - 1);
//       }

//       generate(n - 1, heapArr);
//     }
//   };

//   generate(arr.length, arr.slice());
//   return output;
// };
