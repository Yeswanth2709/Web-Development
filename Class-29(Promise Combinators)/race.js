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

// Promise.race([fetchFromOpenWeather(), fetchFromWeatherAPI(), fetchFromAccuWeather()])
//     .then(function(result){
//         console.log("Fastest Weather Data:", result);
//     })
//     .catch(function(error){
//         console.error("Error:", error);
//     });

Promise.any([fetchFromOpenWeather(), fetchFromWeatherAPI(), fetchFromAccuWeather()])
    .then(function(result){
        console.log("First Successful Weather Data:", result);
    })
    .catch(function(error){
        console.error("Error:", error);
    });
