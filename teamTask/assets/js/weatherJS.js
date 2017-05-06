function turiElement(text) {
    var p = document.createElement('p');
    p.innerText = text;
    document.getElementById('weather').appendChild(p);
}

document.getElementById('cities').addEventListener('change', function() {
    document.getElementById('weather').innerHTML = '';

    if (this.selectedIndex == 0) return;

    var url = "http://api.openweathermap.org/data/2.5/weather?q=" + this.value + ",bg&appid=f631fd357c75163a46154773a513dd64&lang=bg";

    var request = new XMLHttpRequest();

    request.open('get', url, true);
    request.send(null);

    request.addEventListener('readystatechange', function() {
        console.log(this.readyState);
        console.log(this.statusText);
        if (request.readyState === request.DONE) {
            if (request.status >= 200 && request.status <= 299) {
                var weatherInfo = JSON.parse(request.responseText);
                document.getElementById('weather').innerHTML = '';

                turiElement("Климатични условия : " + weatherInfo.weather[0].description);
                turiElement("Температура : " + Math.floor(weatherInfo.main.temp - 273.15) + " C");
                turiElement("Сила на вятъра : " + weatherInfo.wind.speed);

                var img = document.createElement('img');
                img.src = "http://openweathermap.org/img/w/" + weatherInfo.weather[0].icon + ".png";
                document.getElementById('weather').appendChild(img);
            }
        }
    });
}, false);