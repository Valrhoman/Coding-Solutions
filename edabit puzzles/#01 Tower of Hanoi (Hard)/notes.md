There are three towers. The objective of the game is to move all the disks over to tower #3, but you can't place a larger disk onto a smaller disk. To play the game or learn more about the Tower of Hanoi, check the Resources tab.

Create a function that takes a number //discs// as an argument and returns the minimum amount of steps needed to complete the game.

Examples:
towerHanoi(3) ➞ 7

Notes:

1. The amount of discs is always a positive integer.
2. 1 disc can be changed per move.

// 4-step Problem Solving Framework

1. Understand the Problem

- how many steps is the minimum-step solution

2. Divide and Conquer

- solve a 3-disc version first
- try to expand

3. Research

4. Pseudocode

Possibly useful methods:

Array.prototype.at()
Returns the array item at the given index. Accepts negative integers, which count back from the last item.

Array.prototype.pop()
Removes the last element from an array and returns that element.

Array.prototype.push()
Adds one or more elements to the end of an array, and returns the new length of the array.

Array.prototype.reverse()
Reverses the order of the elements of an array in place. (First becomes the last, last becomes first.)
