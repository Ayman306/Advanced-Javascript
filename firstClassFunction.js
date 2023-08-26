/*
fucntion statement
function expression
function declaration
*/
//Function Statement
function a(){
    console.log("Function Statetment");
}
a();
//Function Expression
var b = function(){
    console.log("Function Expression");
}
b();

// difference between function statment and function expression is hoisting, func a is created but the var b is undifined initially

//Function Declaration and function statement are same
var c = function(){
    console.log("Function Declaration");
}
c();

// Anonymous function 
var d= ()=>{
    console.log("Anonymous Function");
}

// Named function 
var e =function x(){
    console.log("Named Function");
}
e()
// we cannot call x() as it throws error as x is not defined and its not declared in outer scope it is created in the local vraiable 

// first class fuction 
// passinf functions as argument
// passing functions or return function is first class function 

var f = function (p){
    return function (){
        console.log(p);
    }
}
function g(){
    console.log("passing function");
}
f(g())

// Arrow fucntion 
var h = ()=>{
    console.log("Arrow function");
}
h()