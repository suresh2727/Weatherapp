const apiKey = "e7da0ab8135fc072cd24c405d09f2a90";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=bangalore&units=metric";

async function checkWeather() {
    const response = await fetch( apiUrl + `&appid=${apiKey}`)
    var data = await response.json();

    console.log(data);
    
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = `${data.main.temp}`;
    document.querySelector(".humidity").innerHTML = `${data.main.humidity}%`;
    document.querySelector(".wind").innerHTML = `${data.wind.speed}Km/h`;


    
}

checkWeather();