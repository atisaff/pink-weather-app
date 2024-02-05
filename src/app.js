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

function displayForecast() {
  let forecastElement = document.querySelector("#forecast");

  let days = ["Monday", "Tuseday", "Wednesday", "Thursday", "Friday"];
  let forecastHtml = "";

  days.forEach(function (day) {
    forecastHtml =
      forecastHtml +
      ` 
   <div id="forecast-by-day"   
    <div class="weather-forecast-date">${day}</div>
      

      <img 
        src="https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_49-1024.png"
        width="40"
        class="weather-forecast-icon"
      />
     
     
      <div class="weather-forecast-temp">
        <div class="weather-forecast-temp-max"> 18°</div>
        <div class="weather-forecast-temp-min"> 12°</div>
      </div>
     </div> 
      
  
`;
  });
  forecastElement.innerHTML = forecastHtml;
}
let form = document.querySelector("#search-form");
form.addEventListener("submit", search);
displayForecast();
