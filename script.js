async function fetchData() {
  const res = await fetch(
    "https://api.covid19api.com/live/country/turkey/status/confirmed"
  );
  const record = await res.json();
  const covidData = record.slice(-1);
  document.getElementById("date").innerHTML = covidData[0].Date.slice(0, 10);
  document.getElementById("active").innerHTML = covidData[0].Active;
  document.getElementById("latestBy").innerHTML = covidData[0].Confirmed;
  document.getElementById("deathNew").innerHTML = covidData[0].Deaths;
  console.log(covidData[0].Date.slice(0, 10));
}
fetchData();
