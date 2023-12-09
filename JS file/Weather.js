const API = "5bfbbfad87569abee0e7c33bac449f00";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  console.log(lat, lon);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const WeatherSpan = document.querySelector("#Clock span:nth-child(4)");
      const name = data.name;
      const weather = data.weather[0].main;
      WeatherSpan.innerText = `현재 ${name} 날씨 : ${weather}`;
    });
}
function onGeoError() {
  alert("위치를 찾을 수가 없어요. ㅠㅠ");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
