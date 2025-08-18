let arr=[1,2,3,4,5,6,7,8,9]

function sum(arr){
    let ans=0; //accumulator
    for(let i=0;i<arr.length;i++){
        ans=ans+arr[i];
    }
    return ans;
}

console.log(sum(arr));

let ans=arr.reduce(function(acc, curr) {
    return acc + curr;
}, 0);

console.log(ans);