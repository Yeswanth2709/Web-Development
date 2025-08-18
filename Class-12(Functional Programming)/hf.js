let myRadiusArray=[2,3,4,5,8]
function calculate(myRadiusArray,cb){
    let result=[]
    for(let i=0; i<myRadiusArray.length; i++){
        result.push(cb(myRadiusArray[i]));
    }
    return result;
}

function calculateCircum(radius){
    return 2 * Math.PI * radius;
}

function calculateDiameter(radius){
    return 2 * radius;
}

function calculateArea(radius){
    return Math.PI * Math.pow(radius, 2);
}

console.log("Area of circles: ", calculate(myRadiusArray, calculateArea));
console.log("Perimeter of circles: ", calculate(myRadiusArray, calculateCircum));
console.log("Diameter of circles: ", calculate(myRadiusArray, calculateDiameter));
