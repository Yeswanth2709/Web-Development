console.log(a);
var a=2;

greet("Alice");
function greet(name) {
    console.log("Hello, " + name);
}

//avoiding hoisting issues
//function as expression
var greet2=function(name){
    console.log("Hello, " + name);
}

greet2("Bob");