window.myFunction = function (event) {
  // reset all menu items
  document.querySelectorAll("ul li a.is-active").forEach(function (item) {
    item.classList.remove("is-active");
  });
  // mark as active selected menu item
  event.target.classList.add("is-active");
  console.log(event.target.id);

  if (event.target.id === "covidshield") {
    console.log("covi");
    document.getElementById("name").innerHTML = "Covidshield (ChAdOx1 nCoV-19)";
    document.getElementById("company").innerHTML = "Oxford University, AstraZeneca Plc, U.K.";
    document.getElementById("name1").innerHTML =
      "Covidshield (ChAdOx1 nCoV-19)";
    document.getElementById("desc").innerHTML =
      "The vaccine is made from a harmless virus that’s been altered to produce the surface spike protein from SARS-CoV-2.";
    document.getElementById("status").innerHTML =
      " Early analysis of trial data showed the vaccine stopped an average of 70% of participants from falling ill, but effectiveness rose to 90% for one of two dosing regimes, using half a dose followed by a full one later'.' Among those who received the vaccine, there were no severe cases, and no participants were hospitalized.";
  } 
  
  else if (event.target.id === "covaxin") {
    console.log("cova");
    document.getElementById("name").innerHTML = "Covaxin";
    document.getElementById("name1").innerHTML = "Covaxin";
    document.getElementById("company").innerHTML = "Bharat Biotech, india ";
    document.getElementById("desc").innerHTML =
      "In collaboration with the Indian Council of Medical Research and the National Institute of Virology, the Indian company Bharat Biotech designed a vaccine called Covaxin based on an inactivated form of the coronavirus.";
    document.getElementById("status").innerHTML =
      "In June, Bharat’s coronavirus vaccine became the first created in India to go into clinical trials. While the results of the Phase 1/2 trials have yet to be published, an executive at Bharat told India Today that about 85 to 90 percent of the 1,000 volunteers produced antibodies to the coronavirus and experienced no serious adverse effects due to Covaxin. On Oct. 23, the company announced they were initiating a Phase 3 trial. Bharat expects results in early 2021 and anticipates distributing the vaccine next June.";
  } 
  
  else if (event.target.id === "sputnik") {
    console.log("spu");
    document.getElementById("name").innerHTML = "Sputnik-V";
    document.getElementById("name1").innerHTML = "Sputnik-V";
    document.getElementById("company").innerHTML = "Gamaleya Research Institute, Russia";
    document.getElementById("desc").innerHTML =
      " Gamaleya’s candidate is a viral vector vaccine based on human adenovirus—a common cold virus—fused with the spike protein of SARS CoV-2 to stimulate an immune response.";
    document.getElementById("status").innerHTML =
      "The developer of Russia’s flagship vaccine said it shows a 92% efficacy rate in preventing cases of the illness. The preliminary Phase 3 findings are based on results from 20,000 volunteers who were given the first dose, including more than 16,000 who also received a second injection.";
  }
};