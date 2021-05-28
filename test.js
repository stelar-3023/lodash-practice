var _ = require("lodash");

// Pure functions are easier to test / Leads to fewer bugs / easier to read and comprehend

// The code is easier to read and can be completed with typing less code

// Pure functions take objects and/or primitive data types as arguments but doesn't modify the objects - Doesn't have side effects
// Impure Functions change the state of received objects - Impure functions have side effects.

// Examples
// const pureAdd = (num1, num2) => {
//   return num1 + num2;
// };

// //always returns same result given same inputs
// pureAdd(5, 5);
// //10
// pureAdd(5, 5);
// //10

// //IMPURE FUNCTION
// let plsMutateMe = 0;
// const impureAdd = (num) => {
//   return (plsMutateMe += num);
// };

// //returns different result given same inputs
// impureAdd(5);
// //5
// impureAdd(5);
// //10
// console.log(plsMutateMe);

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
// console.log(other);
// let other2 = _.last(array);
// console.log(other2);

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
// let array = _.forEach({ name: "Steve", age: 45 }, function (value, key) {
//   console.log(value);
// });

// let test = _.every([true, 1, null, "yes"], Boolean);
// console.log(test);

// let users = [
//   { user: "Steve", age: 47, active: true },
//   { user: "Dawn", age: 52, active: false },
//   { user: "Anthony", age: 33, active: true },
// ];
// let other = _.find(users, function (n) {
//   return n.age > 50;
// });
// console.log(other);

// let array = [1, 1, 3, 4, 5, 9, 9, 7];
// let other = _.flatMap(array, function duplcate(n) {
//   return [n, n, n];
// });
// console.log(other);

// console.log(_.groupBy([2.5, 4.4, 8.9], Math.floor))

// let array = [1, 2, 4, "Dawn"];
// let other = _.includes(array, "Dawn");
// console.log(other);

// let users = [{ user: "Steve" }, { user: "Dawn" }, { user: "Dave" }];
// let other = _.map(users, "user")
// console.log(other);

// let users = [{ user: "Steve" }, { user: "Dawn" }, { user: "Dave" }, {"user": "Brookelynn"}, {"user": "Vince"}];
// let other = _.orderBy(users, ["user"], ["desc"])
// console.log(other)

// let users = [{ user: "Steve" }, { user: "Dawn" }, { user: "Dave" }, {"user": "Brookelynn"}, {"user": "Vince"}];
// let other = _.sortBy(users, "user")
// console.log(other)

// let array = [1, 2, 3, 4, 5, 6];
// let other = _.reduce(array, function (sum, n) {
//   return sum * n;
// });
// console.log(other)

// String Functions

// let string = "queen of-hearts";
// let other = _.camelCase(string);
// console.log(other);

// let string = "STEVE"
// let other = _.capitalize(string)
// console.log(other);

// let string = "QueenOfHearts";
// let other = _.kebabCase(string);
// console.log(other);

// let string = "QueenOfHearts";
// let other = _.lowerCase(string)
// console.log(other);

// let string = "Steve"
// let other = _.lowerFirst(string)
// console.log(other);

// let string = "steve"
// let other = _.upperFirst(string)
// console.log(other)

// let string = "queenOfHearts"
// let other = _.snakeCase(string)
// console.log(other)

// let string = "Steve";
// let other = _.startsWith(string, "S");
// console.log(other);

// let string = "  Dawn  "
// let other = _.trim(string)
// console.log(other);

// let string = "_string_"
// let other = _.trimEnd(string, "_")
// console.log(other);

// let string = "_string_"
// let other = _.trimStart(string, "_")
// console.log(other);

// let string = "Steve"
// let other = _.pad(string, 12, "-")
// console.log(other)

// let string = "Steve"
// let other = _.padEnd(string, 8, "-")
// console.log(other)

// let string = "Steve"
// let other = _.padStart(string, 8, "-")
// console.log(other)

// let string = "six > five";
// let other = _.escape(string);
// console.log(other);

// let string = "six &gt; five";
// let other = _.unescape(string);
// console.log(other);

// let string = "Steve, Dawn, and Anthony";
// let other = _.words(string);
// console.log(other);

// let string =
//   "The Death Star plans are not in the main computer. Where are those transmissions you intercepted? What have you done with those plans? We intercepted no transmissions. Aaah....This is a consular ship. Were on a diplomatic mission. If this is a consular ship...were is the Ambassador? Commander, tear this ship apart until you've found those plans and bring me the Ambassador. I want her alive! There she is! Set for stun! She'll be all right. Inform Lord Vader we have a prisoner.";
// let other = _.truncate(string, {
//   "length": 28,
//   "separator": " "
// })
// console.log(other);
