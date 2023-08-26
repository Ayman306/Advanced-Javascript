function a() {
  var b = 0;
  c();
  function c() {
    console.log(b);
  }
}

// var b = 10;
a();
// lexical env is local + refrenece to lexican env of parent
