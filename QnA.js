/* 
q1. Write a js function to check weather a input is an array or not
test:
log(is_array(''w3school))
log(is_array([1,2,3,4]))
*/

function is_array(arr) {
  return Array.isArray(arr);
}
console.log("q1");
console.log("Is 'w3schools' an array? " + (typeof "" === typeof [])); // true
console.log("Is [1,2,3,4] an array? " + is_array([1, 2, 3, 4]));

/*
q2. Write a js function to check weather a input is an object or not
test:
log(is_object({}))
log(is_object([1,2,3,4]))
*/
function is_object(obj) {
  return Object.prototype.toString.call(obj) === "[object Object]";
}
console.log("q2");
console.log("Is {} an object? " + is_object({}));
console.log("Is [1,2,3,4] an object? " + is_object([1, 2, 3, 4]));

/*
Write a function to clone an array
test:
log(clone([1,2,3,4]));
log(clone(['a','b']));
*/
function clone(inp) {
  var arr = [...inp];
  return arr;
}
console.log("q3");
console.log(clone([1, 2, 3, 4]));
console.log(clone(["a", "b", [1, 2, 3, 4]]));

/*
write a js function to get a frist element of an array
test:
log(first([1,2,3,4]));
log(first([[],'a','b']));
*/
function first(inp) {
  return inp[0];
}
console.log("q4");
console.log(first([1, 2, 3, 4]));
console.log(first([[], "a", "b"]));
