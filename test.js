var _ = require("lodash");

// Pure functions are easier to test / Leads to fewer bugs / easier to read and comprehend

// The code is easier to read and can be completed with typing less code

// Pure functions take objects and/or primitive data types as arguments but doesn't modify the objects - Doesn't have side effects
// Impure Functions change the state of received objects - Impure functions have side effects.

// Examples
const pureAdd = (num1, num2) => {
  return num1 + num2;
};

//always returns same result given same inputs
pureAdd(5, 5);
//10
pureAdd(5, 5);
//10

//IMPURE FUNCTION
let plsMutateMe = 0;
const impureAdd = (num) => {
  return (plsMutateMe += num);
};

//returns different result given same inputs
impureAdd(5);
//5
impureAdd(5);
//10
console.log(plsMutateMe)

// Array Functions

// let array = [
//   { name: "Steve", age: 45 },
//   { name: "Dawn", age: 51 },
// ];
// let other = _.concat(array, { name: "Anthony", age: 31 });
// console.log(other);

// let array = [4, 3]
// let other = _.difference(array,[2, 3])
// console.log(other);

// let array = [1, 2, 3];
// let other = _.fill(array, 10)
// let array2 = _.fill(Array(4), 2)
// console.log(other)
// console.log(array2)

// let array = [
//   { name: "Steve", age: 45 },
//   { name: "Dawn", age: 51 },
//   [
//     {
//       name: "Anthony",
//       age: 31,
//     },
//   ],
//   [
//     {
//       name: "Tiffany",
//       age: 29,
//     },
//   ],
// ];
// let other = _.flatten(array);
// console.log(other);

// let array = _.indexOf([1, 2, 3, 4], 4)
// console.log(array);

// let array = _.join([1,2,3,4,5],"-")
// console.log(array)

// let array = [
//   { name: "Steve", age: 45 },
//   { name: "Dawn", age: 51 },
// ];
// let other = _.head(array);
// let other2 = _.last(array);
// console.log(other2);
// console.log(other);

// let array = ['a', 'b', 'c', 'd']
// let other = _.nth(array, 2)
// console.log(other);

// let array = [1, 2, 3, 4, 5, 6, 7, 8];
// let evens = _.remove(array, function (n) {
//   return n % 2 == 0;
// });
// console.log(array);
// console.log(evens);

// let array = [1, 2, 3, 4, 5, 6, 7, 8];
// let reversed = _.reverse(array)
// console.log(reversed);

// let array = [1, 2, 3, 4, 5, 6, 7, 8];
// let other = _.slice(array, 1, 4)
// console.log(other);

// let array = [1, 2, 3, 4, 5, 6, 7, 8];
// let other = _.take(array, 4);
// console.log(other);

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4];
// let unique = _.uniq(array)
// console.log(unique);

// Collection Functions
