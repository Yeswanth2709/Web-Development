//deep copy
const obj = {
    a: 1,
    b: 2,
    c: {
        d: 3,
        e: 4
    }
};

const deepCopy = JSON.parse(JSON.stringify(obj));

deepCopy.c.d = 5;

console.log(obj.c.d); // 3
console.log(deepCopy.c.d); // 5

//another method
const anotherDeepCopy = structuredClone(obj);
anotherDeepCopy.c.d = 6;

console.log(obj.c.d); // 3
console.log(anotherDeepCopy.c.d); // 6

// Note: Both methods have limitations. JSON method cannot handle functions, undefined, or special objects like Date. structuredClone is more versatile but may not be supported in all environments.

