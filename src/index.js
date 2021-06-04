const url2 = "https://api.covid19india.org/data.json";

async function getapiurl2(url2) {
  const resp = await fetch(url2);
  var data = await resp.json();
  console.log(data);
  var length = data.cases_time_series.length;
  var main_data = data.cases_time_series[length - 1];
  var dailyconfirmed = main_data.dailyconfirmed.replace(
    /(\d)(?=(\d\d)+\d$)/g,
    "$1,"
  );
  var dailydeceased = main_data.dailydeceased.replace(
    /(\d)(?=(\d\d)+\d$)/g,
    "$1,"
  );
  var dailyrecovered = main_data.dailyrecovered.replace(
    /(\d)(?=(\d\d)+\d$)/g,
    "$1,"
  );
  var totalconfirmed = main_data.totalconfirmed.replace(
    /(\d)(?=(\d\d)+\d$)/g,
    "$1,"
  );
  var totaldeceased = main_data.totaldeceased.replace(
    /(\d)(?=(\d\d)+\d$)/g,
    "$1,"
  );
  var totalrecovered = main_data.totalrecovered.replace(
    /(\d)(?=(\d\d)+\d$)/g,
    "$1,"
  );
  var totalactive =
    main_data.totalconfirmed -
    main_data.totalrecovered -
    main_data.totaldeceased;
  totalactive = totalactive.toString().replace(/(\d)(?=(\d\d)+\d$)/g, "$1,");

  if (dailyconfirmed != null)
  document.getElementById("dailyconfirmed").innerHTML = "+" + dailyconfirmed;
  document.getElementById("totalconfirmed").innerHTML = totalconfirmed;
  document.getElementById("totalactive").innerHTML = totalactive;
  document.getElementById("dailyrecovered").innerHTML = "+" + dailyrecovered;
  document.getElementById("totalrecovered").innerHTML = totalrecovered;
  document.getElementById("dailydeceased").innerHTML = "+" + dailydeceased;
  document.getElementById("totaldeceased").innerHTML = totaldeceased;
}
getapiurl2(url2);

const url1 = "https://india-covid19vaccine.github.io/api/national_latest.json";
async function getapi(url1) {
  // Storing response
  const response = await fetch(url1);

  //Storing data in form of JSON
  var data = await response.json();
  console.log(data);
  var totaldoses = data[0].total_doses;
  var totalvaccinated = data[0].total_vaccinated;
  var total_fully_vaccinated = data[0].total_fully_vaccinated;
  totaldoses = totaldoses.toString().replace(/(\d)(?=(\d\d)+\d$)/g, "$1,");
  totalvaccinated = totalvaccinated
    .toString()
    .replace(/(\d)(?=(\d\d)+\d$)/g, "$1,");
  total_fully_vaccinated = total_fully_vaccinated
    .toString()
    .replace(/(\d)(?=(\d\d)+\d$)/g, "$1,");
    if(totaldoses!=null)
  document.getElementById("totaldoses").innerHTML = totaldoses;
  document.getElementById("totalvaccinated").innerHTML = totalvaccinated;
  document.getElementById(
    "totalfullyvaccinated"
  ).innerHTML = total_fully_vaccinated;
}
getapi(url1);