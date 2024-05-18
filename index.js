const input = document.querySelector(".input");
const searchBtn = document.getElementById("search-btn");
const weather_img = document.querySelector("img-jpg");

const temprature = document.querySelector(".temprature");
const description = document.querySelector(".description");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector("#wind-space");

const location_not = document.querySelector(".location-not-found");
const weather_body = document.querySelector(".weather-body");

async function checkWheather(city) {
  const api_key = "80e544d37c7ede7f7ab9a195ffde58bf";

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

  const weather_data = await fetch(`${url}`).then((response) =>
    response.json()
  );
  if (weather_data.cod === `404`) {
    location_not.style.display = "flex";
    weather_body.style.display ="none";

    return;
  } 
  

  
  weather_body.style.display ="flex";
  location_not.style.display ="none";
  temprature.innerHTML = `${Math.round( weather_data.main.temp - 273.15)} <sup>°C</sup>`;
  description.innerHTML = `${weather_data.weather[0].description}`;
  humidity.innerHTML = `${weather_data.main.humidity}%`;
  wind.innerHTML = `${weather_data.wind.speed}KM/H`;

  switch (weather_data.weather[0].description) {
    case "Clouds":
      weather_img.src = "/New folder/cloud.png";
      break;
    case "Clear":
      weather_img.src = "/New folder/clear.jpeg";
      break;
    case "Snow":
      weather_img.src = "/New folder/snow.jpeg";
      break;

    case "Mist":
      weather_img.src = "/New folder/mist.png";
      break;

    case "Rainy":
      weather_img.src = "/New folder/Rainy.jpeg";
      break;
  }
}


searchBtn.addEventListener("click", () => {
  checkWheather(input.value);
});
