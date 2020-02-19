document.addEventListener("DOMContentLoaded", function () {
	const defaultCity = "dunwoody,ga,usa";
	getWeatherCallBack(defaultCity);
	getWeatherPromiseMultiple();
});

function getAPI(city = "") {
	const apiKey = "1c4698160a3a51fad3e7f6ac00bb993e";

	const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}`;

	return url;
}

function getWeatherPromiseMultiple() {
	const locations = ['atlanta,us', 'miami,us', 'new+york,us', 'stamford,us', 'suwanee,us', 'los+angeles,us', 'denver,us', 'fairbanks,us', 'seattle,us'];

	const urls = locations.map(function (location) {
		return getAPI(location);
	});

	Promise.all(urls.map(function (url) {
		return getPromise(url);
	})).then(function (responses) {
		return responses.map(function (response) {
			successHandler(response);
		});

	}).catch(function (status) {
		console.error("getWeatherPromiseMultiple error status : " + status);
		failHandler(status);
	}).finally(function () {
		console.log("getWeatherPromiseMultiple - finanally");
	});

}

function resetError() {
	const weatherError = document.querySelector("#weather-error");
	weatherError.innerHTML = "";
}

function cityError() {
	const errorFrag = `<div class="alert alert-danger" role="alert">Enter valid value for City
	</div>`;
	const weatherError = document.querySelector("#weather-error");
	weatherError.innerHTML = errorFrag;
}

function getWeatherPromise(city = "") {
	resetError();

	if (null == city || city.trim().length < 1) {
		city = document.getElementById("city-req-promise").value;
	}
	//console.log("getWeather city : " + city);
	if (city.trim().length > 1) {
		getPromise(getAPI(city))
			.then(function (response) {
				console.log("promise 1st then for city : " + city);
				successHandler(response);
			})
			.then(function (response) {
				console.log("promise 2nd then for city : " + city);
			})
			.catch(function (status) {
				console.error("promise error status : " + status);
				failHandler(status);
			})
			.finally(function () {
				console.log("promise finanally for city : " + city);
			});
	} else {
		cityError();
	}
}

function getWeatherCallBack(city = "") {
	resetError();

	if (null == city || city.trim().length < 1) {
		city = document.getElementById("city-req").value;
	}
	//console.log("getWeather city : " + city);
	city = city.trim();
	if (city.trim().length > 1) {
		getCallBack(getAPI(city), successHandler, failHandler);
	} else {
		cityError();
	}
}

function getPromise(url) {
	return new Promise(function (resolve, reject) {
		let httpRequest = new XMLHttpRequest();
		httpRequest.open("GET", url);

		httpRequest.onload = function () {
			if (httpRequest.status === 200) {
				// Resolve the promise with the response text
				// success(httpRequest.responseText);
				resolve(httpRequest.response);
			} else {
				// Reject the promise with the status text
				// fail(httpRequest.status);
				reject(Error(httpRequest.statusText));
			}
		};

		// Handle network errors
		httpRequest.onerror = function () {
			reject(Error("Network Error"));
		};

		httpRequest.send();
	});
}

function getCallBack(url, success, fail) {
	let httpRequest = new XMLHttpRequest();
	httpRequest.open("GET", url);

	httpRequest.onload = function () {
		if (httpRequest.status === 200) {
			success(httpRequest.responseText);
		} else {
			fail(httpRequest.status, httpRequest.responseText);
		}
	};

	httpRequest.send();
}

function successHandler(data) {
	const dataObj = JSON.parse(data);
	//console.log(dataObj);
	const city = `${dataObj.name},${dataObj.sys.country}`;
	const fragment = `
<div class="card" style="width: 18rem;">
<div class="card-body">
  <h5 class="card-title"> <img src="http://openweathermap.org/img/w/${dataObj.weather[0]
			.icon}.png" width="50" height="50" /> ${dataObj.name},
  ${dataObj.sys.country}</h5>
<ul class="list-group list-group-flush">
  <li class="list-group-item">Temprature - ${tempToF(dataObj.main.temp)}  &#8457;</li> <li class="list-group-item">Feels Like - ${tempToF(
				dataObj.main.feels_like
			)}  &#8457;</li> <li class="list-group-item">Min - ${tempToF(dataObj.main.temp_min)}  &#8457;</li> <li class="list-group-item">Max - ${tempToF(dataObj.main.temp_min)}  &#8457;</li>
</ul>
</div>
</div>
`;




	const weatherDiv = document.querySelector("#weather-data");
	weatherDiv.innerHTML = weatherDiv.innerHTML + fragment;
}

function failHandler(status = "", txt = "") {
	console.log("request faild status : " + status + " txt : " + txt);

	const errorFrag = `<div class="alert alert-danger" role="alert">status : ${status}, error : ${txt}
  </div>`;
	const weatherError = document.querySelector("#weather-error");
	weatherError.innerHTML = errorFrag;
}

function tempToF(kelvin) {
	return ((kelvin - 273.15) * 1.8 + 32).toFixed(0);
}
