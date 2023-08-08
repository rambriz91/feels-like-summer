var userInput = document.getElementById('search-box');
var fetchBtn = document.getElementById('search-btn');
var today = document.getElementById('today');
var display = document.getElementById('display');
var card = document.querySelectorAll('.card');

var APIKey = '94f1fc415316d4290d1bcf565d7ea27a';

var weekday = [
    moment().format('ddd MMM Do'),
    moment().add(1, 'd').format('ddd MMM Do'),
    moment().add(2, 'd').format('ddd MMM Do'),
    moment().add(3, 'd').format('ddd MMM Do'),
    moment().add(4, 'd').format('ddd MMM Do'),
    moment().add(5, 'd').format('ddd MMM Do'),
    moment().add(6, 'd').format('ddd MMM Do'),
];

function displayWeather(data) {
    display.children[0].textContent = data.city.name;

    document.body.style.backgroundImage = `url('https://source.unsplash.com/1600x900/?landscape?` + userInput.value + `')`;
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundSize = 'cover';

    for (let i = 0; i < card.length; i++) {
        card[i].children[0].textContent = weekday[i];
        card[i].children[1].src = 'https://openweathermap.org/img/wn/' + data.list[i].weather[0].icon + '.png';
        card[i].children[2].children[0].textContent = '🌡️ ' + data.list[i].main.temp.toFixed(0) + '°F';
        card[i].children[2].children[1].textContent = '🌬️ ' + data.list[i].wind.speed.toFixed(0) + ' mph';
        card[i].children[2].children[2].textContent = '💦 ' + data.list[i].main.humidity + '%';
    }
}

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
                    displayWeather(data);
                })
        })
}

fetchBtn.addEventListener('click', getWeather);

window.addEventListener('load', function () {
    if(navigator.geolocation) {
        this.navigator.geolocation.getCurrentPosition((position) => {
            let lon = position.coords.longitude;
            let lat = position.coords.latitude;
            let geoCodeAPI = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + lat + '&lon=' + lon +'&limit=1&appid=' + APIKey +'&units=imperial';

            this.fetch(geoCodeAPI)
                .then(function (response){
                    return response.json()
                })
                .then(function (data){
                displayWeather(data);
                })
        })
    }
})