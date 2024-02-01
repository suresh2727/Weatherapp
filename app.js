
const apiKey = "e7da0ab8135fc072cd24c405d09f2a90";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";




const searchBox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const bgimg = document.querySelector(".bgimg");
var body = document.body;



async function checkWeather(city) {
    const response = await fetch( apiUrl + city + `&appid=${apiKey}`)
 
    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
        body.style.backgroundImage = "none";
       
    }
    else{
        
        document.querySelector(".error").style.display = "none";
        var data = await response.json();
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+  `°C`;
        document.querySelector(".humidity").innerHTML = `${data.main.humidity}%`;
        document.querySelector(".wind").innerHTML = `${data.wind.speed}Km/h`;
        document.querySelector(".mintemp").innerHTML = Math.round(data.main.temp_min) + `°C`;
        document.querySelector(".maxtemp").innerHTML = Math.round(data.main.temp_max) + `°C`;
        document.querySelector(".country_name").innerHTML = data.sys.country;
        var newTitle = city  + ` `+ Math.round(`${data.main.temp}`) + `°C` ;
        document.title = newTitle;
        console.log(data);
        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "images/clouds.png";
            body.style.backgroundImage = "url('https://images.unsplash.com/photo-1603437873662-dc1f44901825?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')";
            
        }
        else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "images/clear.png";
            body.style.backgroundImage = "url('https://plus.unsplash.com/premium_photo-1677105700661-dbfad22793ca?q=80&w=2068&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')";
            

        }
        else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "images/rain.png";
            body.style.backgroundImage = "url('https://images.unsplash.com/photo-1520609798519-2e1e8c18df3a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')";
            
        }
        else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "images/drizzle.png";
            body.style.backgroundImage = "url('https://images.unsplash.com/photo-1556485689-33e55ab56127?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')";
            

        }
        else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "images/mist.png";
            body.style.backgroundImage = "url('https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')";

        }
    
        document.querySelector(".weather").style.display = "block";
       
    }
}

searchbtn.addEventListener("click" , () =>{
    checkWeather(searchBox.value);
})
