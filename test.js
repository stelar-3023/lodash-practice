var _ = require("lodash");

let array = [
  { name: "Steve", age: 45 },
  { name: "Dawn", age: 51 },
];
let other = _.concat(array, { name: "Anthony", age: 31 });

console.log(other);
