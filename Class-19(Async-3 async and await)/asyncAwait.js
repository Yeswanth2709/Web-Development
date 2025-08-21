const p1=new Promise(function(res,rej){
    setTimeout(function(){
        res('this is a resolved promise')
    },5000)
    
    
})

function resolvePromise(){
    p1.then(res=>{
        console.log(res);
    });

    console.log("scaler");
}

async function handlePromise(){
    let data=await p1;
    console.log(data);
    console.log("scaler");
}

function bye(){
    console.log('bye');
}

//resolvePromise();

handlePromise();

bye();


