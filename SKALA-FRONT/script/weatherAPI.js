//weather.js를 모듈분리 한 것중 데이터를 책임지는 weatherAPI.js
export var cities = [
  { name: "서울", lat: 37.5665, lng: 126.9780 },
  { name: "부산", lat: 35.1796, lng: 129.0756 },
  { name: "광주", lat: 35.1595, lng: 126.8526 },
  { name: "인천", lat: 37.4563, lng: 126.7052 },
  { name: "제주", lat: 33.4996, lng: 126.5312 }
];

export async function fetchWeather(lat, lng) {
  var url =
    "https://api.open-meteo.com/v1/forecast?latitude=" + lat +
    "&longitude=" + lng +
    "&current=temperature_2m,relative_humidity_2m";

  var response = await fetch(url);

  if (!response.ok) {
    throw new Error("서버 응답 오류: " + response.status);
  }

  var data = await response.json();

  return {
    temperature: data.current.temperature_2m,
    humidity: data.current.relative_humidity_2m
  };
}