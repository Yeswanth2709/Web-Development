//prints a greeting message
function greet(name) {
    console.log("Hello, " + name + "!");
}

greet("Alice"); // Output: Hello, Alice!

//function with return value
function add(a, b) {
    return a + b;
}   

let sum = add(5, 3);

//function as expression
const multiply = function(a, b) {
    return a * b;
};

let product = multiply(4, 6);