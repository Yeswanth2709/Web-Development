let toys={
    toy1:{name:'Teddy bear',color:'brown',isAvailable:false,quantity:0},
    toy2:{name:'Teddy bear1',color:'brown1',isAvailable:true,quantity:1},
    toy3:{name:'Teddy bear2',color:'brown2',isAvailable:false,quantity:4}
}
console.log(toys);
// to convert object to json use json.stringify
let jsonToys=JSON.stringify(toys);
console.log(jsonToys);

//json parse to convert json to js object
let toysObject=JSON.parse(jsonToys);
console.log(toysObject);
