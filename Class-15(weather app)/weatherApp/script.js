const form=document.querySelector('form');
const searchField=document.querySelector('.searchField');
const temperatureField=document.querySelector('.temp');
const locationField=document.querySelector('.location');
const datetime=document.querySelector('.datetime');
const iconField=document.querySelector('.weather-icon img');
const conditionField=document.querySelector('.condition');
const weatherDetailsItems=document.querySelectorAll('.detail-item');
let target='Mumbai';
form.addEventListener('submit',search);
function search(e){
    e.preventDefault();
    target=searchField.value;
    fetchData(target);
    searchField.value="";
}

async function fetchData(target){
    const endpoint=`https://api.weatherapi.com/v1/current.json?key=d761b6df2397495d972163057250207&q=${target}&aqi=no`;
    const response=await fetch(endpoint);
    const data=await response.json();
    let currTemp=data.current.temp_c;
    let cityName=data.location.name;
    let localTime=data.location.localtime;
    let condition=data.current.condition.text;
    let icon=data.current.condition.icon;
    temperatureField.innerText=currTemp;
    locationField.innerText=cityName;
    datetime.innerText=localTime;
    iconField.src=icon;
    conditionField.innerText=condition;
    let weatherDetails={
        "Feels like":`${data.current.feelslike_c} °`,
        "Humidity":`${data.current.humidity} %`,
        "Wind":`${data.current.wind_kph} km/h`,
        "Visibility":`${data.current.vis_km} km`,
        "UV Index":`${data.current.uv}`,
        "Pressure":`${data.current.pressure_mb} hpa`
    }

    for(let i=0;i<weatherDetailsItems.length;i++){
        let label=weatherDetailsItems[i].querySelector('.label').innerText;
        let value=weatherDetailsItems[i].querySelector('.value');
        
        if(weatherDetails[label]){
            
            value.innerText=weatherDetails[label];
        }
    }

}