getName();
console.log(x);

var x = 7;

function getName() {
  console.log("Hey man");
}

var getName2 = () => {
  console.log("Hey man1");
};
// output: Hey man
// The memory is allocated first even before the execution  and assigns every variable undifined and incase of function whole function is copied to it
// undefined
// var getName2 will act as a variable
