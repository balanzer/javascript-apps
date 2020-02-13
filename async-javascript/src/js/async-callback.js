document.addEventListener("DOMContentLoaded", function() {
	const defaultCity = "atlanta";
	getWeather(defaultCity);
	getWeather("miami");
	getWeather("london,uk");
});
function getWeather(city = "") {
	console.log("getWeather city : " + city);
	const apiKey = "1c4698160a3a51fad3e7f6ac00bb993e";

	const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}`;

	get(url, successHandler, failHandler);
}

function get(url, success, fail) {
	let httpRequest = new XMLHttpRequest();
	httpRequest.open("GET", url);

	httpRequest.onload = function() {
		if (httpRequest.status === 200) {
			success(httpRequest.responseText);
		} else {
			fail(httpRequest.status);
		}
	};

	httpRequest.send();
}

function successHandler(data) {
	const dataObj = JSON.parse(data);
	console.log(dataObj);
	const city = `${dataObj.name},${dataObj.sys.country}`;
	const fragment = `  <div class="card">
  <h5 class="card-header"> <img src="http://openweathermap.org/img/w/${dataObj.weather[0]
		.icon}.png" width="50" height="50" />${dataObj.name},
  ${dataObj.sys.country} - ${dataObj.weather[0].main} - ${dataObj.weather[0].description}</h5>
  <div class="card-body">
    <ul class="list-group">
      <li class="list-group-item">Temprature - ${tempToF(dataObj.main.temp)}, Feels Like - ${tempToF(
		dataObj.main.feels_like
	)}, Min - ${tempToF(dataObj.main.temp_min)}, Max - ${tempToF(dataObj.main.temp_min)} </li>
    </ul>
  </div>
</div>`;

	const weatherDiv = document.querySelector("#weather-data");
	weatherDiv.innerHTML = weatherDiv.innerHTML + fragment;
}

function failHandler(status) {
	console.log("request faild status : " + status);
}

function tempToF(kelvin) {
	return ((kelvin - 273.15) * 1.8 + 32).toFixed(0);
}
