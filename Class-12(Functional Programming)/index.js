function printName(name,cb){
    console.log(name)
    cb('ghosh')
}

function printLastName(lastName){
    console.log(lastName)
}

printName('rishav',printLastName)