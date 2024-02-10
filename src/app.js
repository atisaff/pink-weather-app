let now = new Date();
let weekDate = document.querySelector("h5");
let date = now.getDate();
let hour = now.getHours();
let minutes = now.getMinutes();
let year = now.getFullYear();
let days = [
  "Monday",
  "Tuseday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
let day = days[now.getDay()];
let monthes = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let month = monthes[now.getMonth()];

let dayElement = document.querySelector("#day");
dayElement.innerHTML = `${day}`;
weekDate.innerHTML = `${month} ${date}  ${year} , ${hour}:${minutes}`;

function displayTemp(response) {
  console.log(response.data);
  let tempElement = document.querySelector("#temp");
  let temperature = Math.round(response.data.temperature.current);
  let h1 = document.querySelector("h1");
  h1.innerHTML = response.data.city;
  tempElement.innerHTML = temperature;
  let conditionElement = document.querySelector("#cond");
  conditionElement.innerHTML = response.data.condition.description;

  let windSpeed = document.querySelector("#wind-s");
  windSpeed.innerHTML = Math.round(response.data.wind.speed);

  let humidityElement = document.querySelector("#humid");
  humidityElement.innerHTML = response.data.temperature.humidity;

  getForecast(response.data.city);
}

function searchCity(city) {
  let apiKey = "b2a5adcct04b33178913oc335f405433";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayTemp);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-text-input");

  searchCity(searchInput.value);
}

function formatDate(timetamp) {
  let date = new Date(timetamp * 1000);
  let days = [
    "Monday",
    "Tuseday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  return days[date.getDay()];
}
function getForecast(city) {
  let apiKey = "b2a5adcct04b33178913oc335f405433";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;

  axios(apiUrl).then(displayForecast);
  console.log(apiUrl);
}

function displayForecast(response) {
  let forecastHtml = "";

  response.data.daily.forEach(function (day, index) {
    if (index < 5) {
      forecastHtml += ` 
   <div id="forecast-by-day"   
    <div class="weather-forecast-date">${formatDate(day.time)}</div>
      

      <img 
        src="${day.condition.icon_url}"
      
        class="weather-forecast-icon"
      />
     
     
      <div class="weather-forecast-temp">
        <div class="weather-forecast-temp-max">${Math.round(
          day.temperature.maximum
        )}°</div>
        <div class="weather-forecast-temp-min">${Math.round(
          day.temperature.minimum
        )}°</div>
      </div>
     </div> 
      
  
`;
    }
  });
  let forecastElement = document.querySelector("#forecast");
  forecastElement.innerHTML = forecastHtml;
}
let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSearchSubmit);

searchCity("Paris");
