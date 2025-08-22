//primitive data types
let a = 10;
let b = a;
b = 20;
console.log(a); // 10
console.log(b); // 20

//non primitive data types
let obj1 = { name: "John" };
let obj2 = obj1;
obj2.name = "Doe";
console.log(obj1.name); // Doe
console.log(obj2.name); // Doe