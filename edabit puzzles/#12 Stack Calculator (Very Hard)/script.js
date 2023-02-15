"use strict";

// function isNumeric(n) {
//   return !isNaN(parseFloat(n)) && isFinite(n);
// }

// const StackCalc = function (str) {
//   if (str === "") return 0;
//   else {
//     const arr = str.split(" ");
//     const stack = [];
//     for (const item of arr) {
//       if (isNumeric(item)) stack.push(Number(item));
//       else
//         switch (item) {
//           case "+":
//             stack.push(stack.pop(-1) + stack.pop(-2));
//             break;
//           case "-":
//             stack.push(stack.pop(-1) - stack.pop(-2));
//             break;
//           case "*":
//             stack.push(stack.pop(-1) * stack.pop(-2));
//             break;
//           case "/":
//             stack.push(stack.pop(-1) / stack.pop(-2));
//             break;
//           case "DUP":
//             stack.push(stack[stack.length - 1]);
//             break;
//           case "POP":
//             stack.pop();
//             break;
//           default:
//             return `Invalid instruction: ${item}`;
//         }
//     }
//     return stack[stack.length - 1];
//   }
// };

// console.log(StackCalc("34 4 + DUP DUP + DUP"));
// console.log(StackCalc("6 5 5 7 * - /"));
// console.log(StackCalc("2 5 - 5 + DUP +"));
// console.log(StackCalc("1 2 3 4 5 POP POP POP"));

class StackCalc {
  constructor() {}

  run(str) {
    this.constructor.stack = [];
    const stack = this.constructor.stack;
    console.log(stack);
    if (str === "") return;
    else {
      const arr = str.split(" ");

      for (const item of arr) {
        console.log(item);
        if (this.isNumeric(item)) stack.push(Number(item));
        else
          switch (item) {
            case "+":
              console.log("+");
              stack.push(stack.pop(-1) + stack.pop(-2));
              break;
            case "-":
              console.log("-");
              stack.push(stack.pop(-1) - stack.pop(-2));
              break;
            case "*":
              console.log("*");
              stack.push(stack.pop(-1) * stack.pop(-2));
              break;
            case "/":
              console.log("/");
              stack.push(stack.pop(-1) / stack.pop(-2));
              break;
            case "DUP":
              console.log("DUP");
              stack.push(stack[stack.length - 1]);
              break;
            case "POP":
              console.log("POP");
              stack.pop();
              break;
            default:
              console.log("default");
              stack.push("Invalid instruction: " + item);
              return;
          }
      }
      return;
    }
  }
  get value() {
    const stack = this.constructor.stack;
    return stack[stack.length - 1] || 0;
  }

  isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }
}
