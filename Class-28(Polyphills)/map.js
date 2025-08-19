//polyfill of Map
let nums=[1,2,3,4];

// let newnums=nums.map(function(num){
//     return num*num;
// });

// console.log(newnums);

Array.prototype.myMap=function(callback){
    let resultantArry=[];
    for(let i=0;i<this.length;i++){
        resultantArry.push(callback(this[i]))
    }

    return resultantArry;
}

let newnums=nums.myMap(function(num){
    return num*num;
})
console.log(newnums);