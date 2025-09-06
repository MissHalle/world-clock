function updatePragueTime() {
  let pragueElement = document.querySelector("#prague");
  let pragueDateElement = pragueElement.querySelector(".date");
  let pragueTimeElement = pragueElement.querySelector(".time");
  let pragueTime = moment().tz("Europe/Prague");

  pragueDateElement.innerHTML = pragueTime.format("MMMM Do YYYY");
  pragueTimeElement.innerHTML = pragueTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}

// This isn't in a function, showing the differences in getting the same thing
setInterval(function () {
  //Denver
  let denverElement = document.querySelector("#denver");
  let denverDateElement = denverElement.querySelector(".date");
  let denverTimeElement = denverElement.querySelector(".time");
  let denverTime = moment().tz("America/Denver");

  denverDateElement.innerHTML = denverTime.format("MMMM Do YYYY");
  denverTimeElement.innerHTML = denverTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}, 1000);

//Prague
updatePragueTime();

setInterval(updatePragueTime, 1000);
