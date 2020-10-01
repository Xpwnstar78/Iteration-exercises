//Exercise #1
//Using map, write a function that takes an array of numbers
//and makes them strings
function arrConvert(arr) {
  let newArr = arr.map(String)
  return newArr;
}
console.log(arrConvert([1, 2, 3, 4]))

//Exercise #2
//You must use forEach for this exercise
//Write a function that accepts an array and returns a new array
//with all the values in the array passed to the function doubled
function doubleValues(arr) {
  let newArr = [];
  arr.forEach(function (value) {
    newArr.push(value * 2);
  });
  return newArr;
}
console.log(doubleValues([1, 2, 3]));

//Exercise #3
//Write a function called firstAndLast which accepts
//an array of strings and returns a new array with
//only the first and last character of each string
//Example: ['winning', 'tomato'] => ['wg', 'to']
//hint: forEach show be used here
function firstAndLast(arr) {
  let newArray = [];
  arr.forEach((element) => {
    newArray.push(element.charAt(0) + element.charAt(element.length - 1));
  });
  return newArray;
}

//Bonus:
//Write a for loop that outputs this:
// 1 1 1 2 2 2 3 3 3 4 4 4
// function F(n) {
//   return 0 < n ? n - M(F(n - 1)) : 1
// }

function M(n) {
  return 0 < n ? n - F(M(n - 1)) : 0
}

var N = 10;
// var f = [];
var m = [];
for (var i = 0; i <= N; ++i) {
  // f.push(F(i));
  m.push(M(i));
}

// console.log('F: ' + f.join(','))
console.log('M: ' + m.join(','))