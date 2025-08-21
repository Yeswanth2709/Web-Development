//async functions will always return promise

async function getData(){
    return 'This is your data';
}

let data=getData();

console.log(data);