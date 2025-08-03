//arrays
//indexed collection of elements of same or different datatypes

let data=[1,'hi',null,true,4,5]  //indexed

//index start from 0

console.log(data)

//length of array

console.log(data.length)

//methods and properties of arrays

//how to access an element

console.log(data[3])

//methods to do operations on array

let  cars=['BMW','Toyota','Urus']

//push method --add an element at end

cars.push('Audi')

//pop method --remove from end

cars.pop()

//unshift method --element to insert at start

cars.unshift('Mercedes')

//shift method --removes element from start

cars.shift()

//splice 

let arr=[20,30,40,50]
let arr1=arr.splice(1,2)
console.log(arr)
console.log(arr1)