setInterval(function(){


//Los Angeles
let losAngelesTimeElement = document.querySelector("#los-angeles-time")
let losAngelesDateElement = document.querySelector("#los-angeles-date");
let losAngelesTime = moment().tz("America/Los_Angeles")
losAngelesDateElement.innerHTML = losAngelesTime.format("MMM Do YYYY")
losAngelesTimeElement.innerHTML = losAngelesTime.format(
  "h:mm:ss[<small>]a[</small>]"
);
}, 1000);

setInterval(function(){
//Paris

let parisTimeElement = document.querySelector("#paris-time");
let parisDateElement = document.querySelector("#paris-date");
let parisTime = moment().tz("Europe/Paris");
parisDateElement.innerHTML = parisTime.format("MMM Do YYYY");
parisTimeElement.innerHTML = parisTime.format(
  "h:mm:ss[<small>]a[</small>]"
);
}, 1000);

setInterval(function () {
  //tokyo

  let tokyoTimeElement = document.querySelector("#tokyo-time");
  let tokyoDateElement = document.querySelector("#tokyo-date");
  let tokyoTime = moment().tz("Asia/Tokyo");
  tokyoDateElement.innerHTML = tokyoTime.format("MMM Do YYYY");
  tokyoTimeElement.innerHTML = tokyoTime.format("h:mm:ss[<small>]a[</small>]");
}, 1000);

setInterval(function () {
  //nirobi

  let nirobiTimeElement = document.querySelector("#nirobi-time");
  let nirobiDateElement = document.querySelector("#nirobi-date");
  let nirobiTime = moment().tz("Africa/Nairobi");
  nirobiDateElement.innerHTML = nirobiTime.format("MMM Do YYYY");
  nirobiTimeElement.innerHTML = nirobiTime.format("h:mm:ss[<small>]a[</small>]");
}, 1000);