function updateCityTime() {
  let pragueElement = document.querySelector("#prague");
  if (pragueElement) {
    let pragueDateElement = pragueElement.querySelector(".date");
    let pragueTimeElement = pragueElement.querySelector(".time");
    let pragueTime = moment().tz("Europe/Prague");

    pragueDateElement.innerHTML = pragueTime.format("MMMM Do YYYY");
    pragueTimeElement.innerHTML = pragueTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
  let denverElement = document.querySelector("#denver");
  if (denverElement) {
    let denverDateElement = denverElement.querySelector(".date");
    let denverTimeElement = denverElement.querySelector(".time");
    let denverTime = moment().tz("America/Denver");

    denverDateElement.innerHTML = denverTime.format("MMMM Do YYYY");
    denverTimeElement.innerHTML = denverTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

// This isn't in a function, showing the differences in getting the same thing
//setInterval(function () {
//Denver
//  let denverElement = document.querySelector("#denver");
//  let denverDateElement = denverElement.querySelector(".date");
//  let denverTimeElement = denverElement.querySelector(".time");
//  let denverTime = moment().tz("America/Denver");
//
//  denverDateElement.innerHTML = denverTime.format("MMMM Do YYYY");
//  denverTimeElement.innerHTML = denverTime.format(
//   "h:mm:ss [<small>]A[</small>]"
//  );
//}, 1000);

//Updating the cities from drop-down
function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", "").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
 <div class="city">
    <div>
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></div>
    </div>
    <a href="/">All cities</a>
  `;
}

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);

//Prague
updateCityTime();

setInterval(updateCityTime, 1000);
