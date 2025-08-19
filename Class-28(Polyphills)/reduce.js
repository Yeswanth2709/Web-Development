let nums = [1, 2, 3, 4, 5, 6];

// let ans=nums.reduce(function(acc,val){
//     acc=acc+val;
//     return acc;
// },0);
// console.log(ans);

Array.prototype.myReduce = function (callback, initialValue) {
  if (Array.isArray(this) === true) {
    let accumulator;
    let firstIndex;
    if (arguments.length === 1) {
      accumulator = this[0];
      firstIndex = 1;
    } else {
      accumulator = initialValue;
      firstIndex = 0;
    }
    for (let i = firstIndex; i < this.length; i++) {
      accumulator = callback(accumulator, this[i]);
    }
    return accumulator;
  }
};

let ans = nums.myReduce(function (acc, val) {
  acc = acc + val;
  return acc;
}, 0);
console.log(ans);
