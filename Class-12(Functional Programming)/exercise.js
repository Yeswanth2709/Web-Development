let myRadiusArray=[2,3,4,5,8]
let myAreaArray=[];
let myPerimeterArray=[];
let diameterArray=[];
function area(){
    for(let i=0; i<myRadiusArray.length; i++){
        myAreaArray.push(Math.PI * Math.pow(myRadiusArray[i], 2));
    }
    return myAreaArray;
}
function perimeter(){
    for(let i=0; i<myRadiusArray.length; i++){
        myPerimeterArray.push(2 * Math.PI * myRadiusArray[i]);
    }
    return myPerimeterArray;
}

function diameter(){
    for(let i=0; i<myRadiusArray.length; i++){
        diameterArray.push(2 * myRadiusArray[i]);
    }
    return diameterArray;
}

console.log("Area of circles: ", area());
console.log("Perimeter of circles: ", perimeter());
console.log("Diameter of circles: ", diameter());
