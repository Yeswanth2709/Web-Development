const fileSystem=require('fs');

let readFilePromise1 = fileSystem.promises.readFile('f1.txt');

readFilePromise1.then(function(data){
        console.log("File data 1 " +data);
}).catch(function(err){
    console.error(err);
})

let readFilePromise2=fileSystem.promises.readFile('f2.txt');

readFilePromise2.then(function(data){
    console.log("File data 2 " +data);
}).catch(function(err){
    console.error(err);
})

let readFilePromise3=fileSystem.promises.readFile('f3.txt');

readFilePromise3.then(function(data){
    console.log("File data 3 " +data);
}).catch(function(err){
    console.error(err);
})