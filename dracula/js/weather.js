fetch('https://api.openweathermap.org/data/2.5/weather?q=Campo+Grande&units=metric&appid=3dedab9a1e2b6e1cb120ae2f421b477d').then(function(response) {
    return response.json();
}).then(function(json) {
    document.querySelector('.clima').innerHTML = '<i class="fas fa-thermometer-half"></i> ' + json.main.temp + '°C';
});
