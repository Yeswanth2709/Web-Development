function funcB(m, n) {
    return m + n;
}

function funcA(num1, num2) {
    return funcB(num1, num2);
}


function greet(num1,num2){
    return funcA(num1,num2)
}

let result = greet(5, 10);
console.log(result);    