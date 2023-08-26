/*
CallBack function in Js

*/
function x(y){
    console.log("Called x");
    // y()

}
x(function y(){
    console.log("Callled y");
})

setTimeout(() => {
    console.log("timer");
}, 1000);

// EventListner
function addEventLister(){
    let count =0
document.getElementById("clickMe").addEventListener("click",function (){
    console.log("Click event",++count);
})
}
addEventLister()

// garbage collection and removeEventListener 

// the event listners need to be removed as the values in event listners donot destroy itself die to closures which leads to slow down of system

