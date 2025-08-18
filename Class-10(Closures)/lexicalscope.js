//lexical scoping
function outerFunction() {
    let outerVariable = "I'm from outer scope";

    function innerFunction() {
        let innerVariable = "I'm from inner scope";
        console.log(outerVariable); // Accessing outer variable
        console.log(innerVariable); // Accessing inner variable
    }

    innerFunction();
}

outerFunction();
