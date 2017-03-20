document.getElementById('currMon').addEventListener('change', function() {
    document.getElementById('chCourse').innerHTML = '';
    if (this.selectedIndex == 0) return;
    var url = 'http://api.fixer.io/latest?base=' + this.value;
    var request = new XMLHttpRequest();

    request.open('get', url, true);
    request.send(null);

    request.addEventListener('load', function() {
        if (request.status >= 200 && request.status <= 299) {
            var info = JSON.parse(request.responseText);
            document.getElementById('chCourse').innerHTML = '';

            var st = document.getElementById('chCourse').innerText;

            var pDescr = document.createElement('p');
            pDescr.innerText = info.rates.BGN;
            var img = document.createElement('img');
            img.src = 'assets/images/usFlag.ico'
            document.getElementById('chCourse').appendChild(pDescr);
            pDescr.appendChild(img);
        }
    });
}, false);