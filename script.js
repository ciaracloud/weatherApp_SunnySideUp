const input = document.querySelector("input");
const searchButton = document.querySelector(".searchButton");
const todayContainer = document.querySelector(".todayContainer");
const forecastContainer = document.querySelector(".forecastContainer");
const weatherContainer = document.querySelector(".weatherContainer");
const homeContainer = document.querySelector(".homeContainer");

const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
  "Monday",
];

const apiKey = " ";
const searchWeatherAndForecast = async () => {
  todayContainer.innerHTML = "";
  const weatherUrl = `http://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&zip=${input.value}&units=imperial`;
  const weather = await fetch(weatherUrl);
  const weatherJson = await weather.json();
  const tempElement = document.createElement("p");
  tempElement.innerText = `${Math.floor(weatherJson.main.temp)}°F`;
  tempElement.className = "temp";
  const cityElement = document.createElement("p");
  cityElement.className = "cityElement";
  cityElement.innerText = `${weatherJson.name}`;
  const iconElement = document.createElement("img");
  iconElement.width = 100;
  iconElement.className = "iconElement";
  const hrElement = document.createElement("hr");
  hrElement.className = "hrElement";
  const descriptionElement = document.createElement("p");
  descriptionElement.className = "descriptionElement";
  if ((weatherJson.weather[0].main = "Clouds")) {
    descriptionElement.innerText = `Cloudy`;
    iconElement.src = "images/clouds-256.png";
  } else if ((weatherJson.weather[0].main = "Rain")) {
    descriptionElement.innerText = `Rainy`;
    iconElement.src = "images/rain-256.png";
  } else if ((weatherJson.weather[0].main = "Clear")) {
    descriptionElement.innerText = `Sunny`;
    iconElement.src = "images/sun-256.png";
  } else if ((weatherJson.weather[0].main = "Drizzle")) {
    descriptionElement.innerText = `Light Rain`;
    iconElement.src = "images/little-rain-256.png";
  } else if ((weatherJson.weather[0].main = "Thunderstorm")) {
    descriptionElement.innerText = `Thunderstorms`;
    iconElement.src = "images/storm-256.png";
  } else if ((weatherJson.weather[0].main = "Snow")) {
    descriptionElement.innerText = `Snowy`;
    iconElement.src = "images/snow-256.png";
  } else {
    descriptionElement.innerText = `${weatherJson.weather[0].main}`;
    iconElement.src = "images/snow-storm-256.png";
  }
  const feelsLikeElement1 = document.createElement("p");
  feelsLikeElement1.innerText = `${Math.floor(weatherJson.main.feels_like)}°F`;
  feelsLikeElement1.className = "infoElement1";
  const feelsLikeElement2 = document.createElement("p");
  feelsLikeElement2.innerText = "Feels like";
  feelsLikeElement2.className = "infoElement2";
  const feelsLikeElement = document.createElement("div");
  feelsLikeElement.className = "infoElement";
  feelsLikeElement.append(feelsLikeElement1, feelsLikeElement2);
  const windElement1 = document.createElement("p");
  windElement1.innerText = `${Math.floor(weatherJson.wind.speed)}`;
  windElement1.className = "infoElement1";
  const windElement2 = document.createElement("p");
  windElement2.innerText = "Wind in mph";
  windElement2.className = "infoElement2";
  const windElement = document.createElement("div");
  windElement.className = "infoElement";
  windElement.append(windElement1, windElement2);
  const humidityElement1 = document.createElement("p");
  humidityElement1.innerText = `${Math.floor(weatherJson.main.humidity)}%`;
  humidityElement1.className = "infoElement1";
  const humidityElement2 = document.createElement("p");
  humidityElement2.innerText = "Humidity";
  humidityElement2.className = "infoElement2";
  const humidityElement = document.createElement("div");
  humidityElement.className = "infoElement";
  humidityElement.append(humidityElement1, humidityElement2);
  const imgElement = document.createElement("img");
  imgElement.className = "imgElement";
  const forecastButton = document.createElement("button");
  forecastButton.className = "forecastButton";
  forecastButton.innerText = "Upcoming Weather";
  forecastContainer.append(forecastButton);
  const quoteElement = document.createElement("p");
  const quoteAndForecastContainer = document.createElement("div");
  quoteElement.className = "quoteElement";
  quoteAndForecastContainer.className = "quoteAndForecastContainer";
  quoteAndForecastContainer.append(quoteElement, forecastButton);
  if (weatherJson.weather[0].main == "Clear") {
    imgElement.src = "images/clear.jpg";
    quoteElement.innerText = `Sunny side up in ${weatherJson.name}!`;
  } else if (weatherJson.weather[0].main == "Clouds") {
    imgElement.src = "images/cloudy.jpg";
    quoteElement.innerText = `Fried egg in ${weatherJson.name}!`;
  } else if (weatherJson.weather[0].main == "Rain") {
    imgElement.src = "images/rainy.jpg";
    quoteElement.innerText = `Runny yolk in ${weatherJson.name}!`;
  } else if (weatherJson.weather[0].main == "Drizzle") {
    imgElement.src = "images/drizzle.jpg";
    quoteElement.innerText = `Runny yolk in ${weatherJson.name}!`;
  } else if (weatherJson.weather[0].main == "Thunderstorm") {
    imgElement.src = "images/thunderstorm.jpg";
    quoteElement.innerText = `Broken egg in ${weatherJson.name}!`;
  } else if (weatherJson.weather[0].main == "Snow") {
    imgElement.src = "images/snow.jpg";
    quoteElement.innerText = `Egg whites in ${weatherJson.name}!`;
  } else {
    imgElement.src = "images/other.jpg";
    quoteElement.innerText = `Scrambled eggs in ${weatherJson.name}!`;
  }

  const forecastUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${weatherJson.coord.lat}&lon=${weatherJson.coord.lon}&appid=${apiKey}&units=imperial`;
  const forecast = await fetch(forecastUrl);
  const forecastJson = await forecast.json();
  counter = 0;
  const d = new Date();
  let toDay = d.getDay();
  counter1 = toDay + 1;
  forecastButton.addEventListener("click", () => {
    forecastButton.remove();
    for (day of forecastJson.daily) {
      const dayElement = document.createElement("div");
      dayElement.className = `day${counter + 1} forecastElement`;
      const dayNameElement = document.createElement("p");
      dayNameElement.className = "dayNameElement";
      dayNameElement.innerText = `${daysOfWeek[counter1]}`;
      counter1++;
      const dayIconElement = document.createElement("img");
      dayIconElement.width = 38;
      dayIconElement.height = 38;
      dayIconElement.className = "dayIconElement";
      const dayDescriptionElement = document.createElement("p");
      const dayImgElement = document.createElement("img");
      dayImgElement.width = 44;
      dayImgElement.height = 44;
      dayImgElement.className = "dayImgElement";
      dayImgElement.style.borderRadius = "10px";
      if (forecastJson.daily[counter].weather[0].main == "Clouds") {
        dayDescriptionElement.innerText = `Cloudy`;
        dayIconElement.src = "images/clouds-256.png";
        dayImgElement.src = "images/cloudy.jpg";
      } else if (forecastJson.daily[counter].weather[0].main == "Rain") {
        dayDescriptionElement.innerText = `Rainy`;
        dayIconElement.src = "images/rain-256.png";
        dayImgElement.src = "images/rainy.jpg";
      } else if (forecastJson.daily[counter].weather[0].main == "Clear") {
        dayDescriptionElement.innerText = `Sunny`;
        dayIconElement.src = "images/sun-256.png";
        dayImgElement.src = "images/clear.jpg";
      } else if (forecastJson.daily[counter].weather[0].main == "Drizzle") {
        dayDescriptionElement.innerText = `Light Rain`;
        dayIconElement.src = "images/little-rain-256.png";
        dayImgElement.src = "images/drizzle.jpg";
      } else if (
        forecastJson.daily[counter].weather[0].main == "Thunderstorm"
      ) {
        dayDescriptionElement.innerText = `Thunderstorms`;
        dayIconElement.src = "images/storm-256.png";
        dayImgElement.src = "images/thunderstorm.jpg";
      } else if (forecastJson.daily[counter].weather[0].main == "Snow") {
        dayDescriptionElement.innerText = `Snowy`;
        dayIconElement.src = "images/snow-256.png";
        dayImgElement.src = "images/snow.jpg";
      } else {
        dayDescriptionElement.innerText = `${forecastJson.daily[counter].weather[0].main}`;
        dayIconElement.src = "images/snow-strom-256.png";
        dayImgElement.src = "images/other.jpg";
      }
      const dayHighLowElement = document.createElement("p");
      dayHighLowElement.innerText = `${Math.floor(
        forecastJson.daily[counter].temp.max
      )}°/${Math.floor(forecastJson.daily[counter].temp.min)}°`;
      dayElement.append(
        dayImgElement,
        dayNameElement,
        dayIconElement,
        dayHighLowElement
      );
      quoteAndForecastContainer.append(dayElement);
      counter++;
    }
  });
  const infoContainer = document.createElement("div");
  infoContainer.append(feelsLikeElement, windElement, humidityElement);
  infoContainer.className = "infoContainer";
  const tempAndDescriptionContainer = document.createElement("div");
  tempAndDescriptionContainer.className = "tempAndDescriptionContainer";
  tempAndDescriptionContainer.append(
    iconElement,
    tempElement,
    descriptionElement,
    hrElement,
    infoContainer
  );
  console.log("forecast object: ", forecastJson);
  todayContainer.append(tempAndDescriptionContainer, imgElement);
  weatherContainer.append(
    cityElement,
    todayContainer,
    quoteAndForecastContainer
  );
  console.log("weather object: ", weatherJson);
};

searchButton.addEventListener("click", () => {
  homeContainer.remove();
  searchWeatherAndForecast();
  weatherContainer.innerHTML = "";
  input.value = "";
  forecastContainer.innerHTML = "";
});
