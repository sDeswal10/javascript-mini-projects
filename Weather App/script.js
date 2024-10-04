const apiKey = "514bbeeaa9ef158cd790d1e0419cd2f1";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;
const userInput = document.querySelector(".user-input");
const searchButton = document.querySelector(".search-button");
const weatherImg = document.querySelector(".weather-image");

async function getWeather(city) {
    try {
        const response = await fetch(`${apiUrl}${city}&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{
        const data = await response.json();
        document.querySelector("h1").innerHTML = `${Math.round(
            data.main.temp
          )}°c`;
          document.querySelector("h2").innerHTML = data.name;
          document.querySelector(".humidity").innerHTML = `${data.main.humidity}%`;
          document.querySelector(".wind").innerHTML = `${data.wind.speed} km/h`;

          if (data.weather[0].main == "Clouds") {
            weatherImg.src = "images/clouds.png";
          } else if (data.weather[0].main == "Drizzle") {
            weatherImg.src = "images/drizzle.png";
          } else if (data.weather[0].main == "Rain") {
            weatherImg.src = "images/rain.png";
          } else if (data.weather[0].main == "Clear") {
            weatherImg.src = "images/clear.png";
          } else if (data.weather[0].main == "Snow") {
            weatherImg.src = "images/snow.png";
          } else if (data.weather[0].main == "Mist") {
            weatherImg.src = "images/mist.png";
          }
          document.querySelector(".weather").style.display = "block";
          document.querySelector(".error").style.display = "none";
    }
        
    } catch (error) {
        console.log(error)
        
    }
    
}
searchButton.addEventListener("click", function () {
  getWeather(userInput.value);
});
