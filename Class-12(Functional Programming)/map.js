let arr = [1, 2, 3, 4, 5];
//imperative style
function squares(arr){
    let result = [];
    for(let i = 0; i < arr.length; i++){
        result.push(arr[i] * arr[i]);
    }
    return result;
}

const squaredArray = squares(arr);
console.log(squaredArray);


//map method
//declarative style
let squaredArray1=arr.map(num=>square(num));

function square(a){
    return a*a;
}

console.log(squaredArray1)


const transactions = [1000, 3000, 4000, 2000, - 898, 3800, - 4500];
const inrtToUsd = 88.12;


let finalAmount=transactions.map(function(a){
    return (a/inrtToUsd).toFixed(2);
});
console.log(finalAmount)