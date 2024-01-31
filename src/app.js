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

weekDate.innerHTML = `${day} ${month} ${date}  ${year} , ${hour}:${minutes}`;

function displayTemp(response) {
  console.log(response.data);
  let tempElement = document.querySelector("#temp");
  let temperature = Math.round(response.data.temperature.current);
  let h1 = document.querySelector("h1");
  h1.innerHTML = response.data.city;
  tempElement.innerHTML = temperature;
}

function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-text-input");

  let city = searchInput.value;
  let apiKey = "b2a5adcct04b33178913oc335f405433";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayTemp);
}
let form = document.querySelector("#search-form");
form.addEventListener("submit", search);

function getForecast(city) {
  let apiKey = "b2a5adcct04b33178913oc335f405433";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayForecast);
}

function displayForecast(response) {
  console.log(response.data);
}

`<div class="weather-forecast-day">
   <div class="weather-forecast-date">Tuseday</div>
   <div class="weather-forecast-icon"></div>
   <div class="weather-forecast-temperatures"></div>
    <div class="weather-forecast-temperature"></div>
     <strong>12</strong>
    </div>
    <div class="weather-forecast-temperature">9</div></div >
  </div >
</div >`;
