let promise1 = new Promise(function(resolve,reject){
    setTimeout(function(){
        const isHeads=Math.random()>=0.5;
        if(isHeads){
            resolve('we got heads and we win')
        }else{
            reject('we got tails and we lose')
        }
    },2000)
});

promise1.then(function(output){
    console.log(output);
})

promise1.catch(function(output){
    console.log(output)
})

promise1.finally(function(){
    console.log('settled')
})