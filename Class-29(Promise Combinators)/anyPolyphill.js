function fetchFromOpenWeather(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const weatherData = { temperature: 25, condition: "Sunny" };
            resolve(weatherData);
        }, 1000);
    });
}

function fetchFromWeatherAPI(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const weatherData = { temperature: 22, condition: "Cloudy" };
            resolve(weatherData);
        }, 700);
    });
}

function fetchFromAccuWeather(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const weatherData = { temperature: 24, condition: "Partly Cloudy" };
            resolve(weatherData);
        }, 1200);
    });
}


Promise.myAny=function(subPromises){
    const promise=new Promise(function(resolve,reject){
        if(subPromises.length===0) reject(new AggregateError("No promises were passed"));

        let rejections=[]
        let rejectedCount=0;

        subPromises.forEach((subPromise,index)=>{
            Promise.resolve(subPromise).then(resolve)
            .catch((err)=>{
                rejections[index]=err;
                rejectedCount++;
                if(rejectedCount==subPromises.length){
                    reject (new AggregateError(rejections,"All promises were rejected"));
                }
            })
        })
    });
    return promise;
}