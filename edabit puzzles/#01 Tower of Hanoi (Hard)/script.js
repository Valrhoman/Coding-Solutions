// const minMoves = function (discs) {
//   let moves = 0;
//   for (let i = 0; i < discs; i++) {
//     moves = 2 * moves + 1;
//   }
//   return moves;
// };

const minMoves = (discs) => 2 ** discs - 1;

const t1 = minMoves(1);
const t2 = minMoves(2);
const t3 = minMoves(3);
const t4 = minMoves(4);
const t5 = minMoves(5);
const t10 = minMoves(10);
const t20 = minMoves(20);
const t20a = 2 ** 20;

console.log(t1, t2, t3, t4, t5, t10, t20, t20a);
