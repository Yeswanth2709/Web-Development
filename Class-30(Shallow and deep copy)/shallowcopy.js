//shallow copy
let obj1 = {
  name: "John",
  age: 30,
  address: {
    city: "New York",
    zip: 10001
  }
};

let obj2 = { ...obj1 }; // shallow copy
obj2.name = "Doe";
obj2.address.city = "Los Angeles";

console.log(obj1.name); // John
console.log(obj1.address.city); // Los Angeles