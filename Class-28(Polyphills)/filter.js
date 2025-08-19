let nums=[1,2,3,4,5,6,7,8];

// let filterNums=nums.filter(function(num){
//     return num%2==0;
// })

// console.log(filterNums);


Array.prototype.myFilter=function(callback){
    if(this==null || this==undefined){
        throw new TypeError("It should not be null");
        
    }

    let filteredArray=[];

    for(let i=0;i<this.length;i++){
        if(callback(this[i])){
            filteredArray.push(this[i]);
        }
    }
    return filteredArray;
}

let filterNums=nums.myFilter(function(num){
    return num%2==0;
})

console.log(filterNums);