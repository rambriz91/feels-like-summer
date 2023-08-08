var userInput = document.getElementById('search-box');
var fetchBtn = document.getElementById('search-btn');
var today = document.getElementById('today');
var display = document.getElementById('display');
var card = document.querySelectorAll('.card');

var APIKey = '94f1fc415316d4290d1bcf565d7ea27a';


function getWeather() {
    var cityByName = 'https://api.openweathermap.org/geo/1.0/direct?q=' + userInput.value + '&limit=1&appid=' + APIKey +'';
    fetch(cityByName)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            var lat = data[0].lat;
            var lon = data[0].lon;
            var geoCodeAPI = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + lat + '&lon=' + lon +'&limit=1&appid=' + APIKey +'&units=imperial';
            fetch(geoCodeAPI)
                .then(function (response) {
                    return response.json();
                })
                .then(function (data) {
                    console.log(data);
                    display.children[0].textContent = data.city.name;

                    for (let i = 0; i < card.length; i++) {
                        card[i].children[0].textContent = '';
                        card[i].children[1].src = 'https://openweathermap.org/img/wn/' + data.list[i].weather[0].icon + '.png';
                        card[i].children[2].children[0].textContent = 'Temp: ' + data.list[i].main.temp.toFixed(0) + '°F';
                        card[i].children[2].children[1].textContent = 'Wind: ' + data.list[i].wind.speed.toFixed(0) + ' mph';
                        card[i].children[2].children[2].textContent = 'Humidity: ' + data.list[i].main.humidity + '%';
                    }

                })
        })
}

fetchBtn.addEventListener('click', getWeather);