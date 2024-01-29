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
  let forecastHtml = "";
  let days = [
    "Monday",
    "Tuseday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  days.forEach(function (day) {
    forecastHtml =
      forecastHtml +
      `
    <div class="forecast">
                <i class="fas fa-sun fa-2x"></i>
                <div class="forecast-des">
                  <span class="dayTwo dayofWeek">${day}</span>
                  <span class="dayTwo-date date">22 JAN</span>
                  <p class="f-temp dayTwo-temp">15 <span>°C</span></p>
                </div>
              </div>
              `;
  });
}
let form = document.querySelector("#search-form");
form.addEventListener("submit", search);

let forecastElement = document.querySelector("#forecast");
forecastElement.innerHTML = forecastHtml;
displayForecast();
