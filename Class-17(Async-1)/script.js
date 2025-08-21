console.log('start')

function test(){
    console.log('i am test function')
}

function sayHello(){
    for(let i=0;i<10000000000;i++){

    }
    console.log('hello');
}

function sayBye(){
    console.log('Bye')
}

test()
//sayHello() --synchronous
setTimeout(sayHello,2000) //async
sayBye()
console.log('End');