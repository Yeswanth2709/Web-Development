const car={
    brand: "Toyota",
    model: "Camry",
    year: 2020,
    start: function() {
        console.log("Car started");
    }
}


let cap={
    name:"Steve rogers",
    age:105,
    friends:["Bucky Barnes", "Natasha Romanoff"],
    address: {
        country: "USA",
        city:{
            name:"brooklyn",
            zip:"11201"
        }
    },

    isAvenger: true,
}

//how to access the properties of the object
//access properties -dot notation , bracket notation
console.log(cap.name); // "Steve rogers"
console.log(cap['age']); // 105
console.log(cap.friends[0]); // "Bucky Barnes"
console.log(cap.address.city.name); // "brooklyn"
console.log(cap['isAvenger']); // true

//manipulating object properties
cap.age = 106;
cap.friends.push("Clint Barton");
console.log(cap);

//delete properties of an object
delete cap.age;
console.log(cap);

//add new properties to an object
cap.isSuperSoldier = true;