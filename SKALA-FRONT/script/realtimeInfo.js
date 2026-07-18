//실시간 날씨 API
import { cities, fetchWeather } from "./weatherAPI.js";

async function handleCityChange() {
  var selectEl = document.getElementById("citySelect");
  var weatherBox = document.getElementById("weather-box");

  var selectedIndex = selectEl.value;

  if (selectedIndex === "") {
    weatherBox.innerHTML = "<p>도시를 선택해주세요.</p>";
    return;
  }

  var city = cities[selectedIndex];

  weatherBox.innerHTML =
    "<p><strong>" + city.name + "</strong></p>" +
    "<p>위도: " + city.lat + " / 경도: " + city.lng + "</p>" +
    "<p>로딩 중... ⏳</p>";

  try {
    var weather = await fetchWeather(city.lat, city.lng);

    weatherBox.innerHTML =
      "<p><strong>" + city.name + "</strong></p>" +
      "<p>위도: " + city.lat + " / 경도: " + city.lng + "</p>" +
      "<p>🌡️ 현재 온도: " + weather.temperature + "°C</p>" +
      "<p>💧 습도: " + weather.humidity + "%</p>";

  } catch (error) {
    weatherBox.innerHTML =
      "<p><strong>" + city.name + "</strong></p>" +
      "<p>날씨 정보를 가져오지 못했습니다. 😥</p>";
    console.error("날씨 데이터 요청 실패:", error);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  var selectEl = document.getElementById("citySelect");
  if (selectEl) {
    selectEl.addEventListener("change", handleCityChange);
  }
});