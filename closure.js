function x() {
  var a = 9;

  function y() {
    console.log(a);
  }
  y();
}
// x();

function x() {
  var a = 9;

  return function y() {
    console.log(a);
  };
}
// x();

// a function bundled together with lexical scope
/*
use case of closure
module design pattern
function rune ony one
memoize
iterators
setTimeouts
maintaining state in async
*/

// var counter = (function () {
//   var count = 0;
//   return function () {
//     return count++;
//   };
// })();

// console.log(counter());

function c() {
  for (var i = 1; i <= 5; i++) {
    function close(x) {
      setTimeout(() => {
        console.log(x);
      }, x * 1000);
    }
    close(i);
  }
  console.log("Test");
}
// c();

function l() {
  for (let i = 1; i <= 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }
  console.log("Test");
}
// l();

function s() {
  let b = 1;
  function inner() {
    console.log(b + 1);
  }
  return inner;
}
k = s();
k();
k();
