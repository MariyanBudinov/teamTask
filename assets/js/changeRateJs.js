document.getElementById('currMon').addEventListener('change', function() {
    document.getElementById('chCourse').innerHTML = '';
    if (this.selectedIndex == 0) return;
    var url = 'http://api.fixer.io/latest?base=' + this.value;
    var currency = this.value;
    var request = new XMLHttpRequest();

    request.open('get', url, true);
    request.send(null);

    request.addEventListener('load', function() {
        if (request.status >= 200 && request.status <= 299) {
            var info = JSON.parse(request.responseText);
            document.getElementById('chCourse').innerHTML = '';

            var st = document.getElementById('chCourse').innerText;

            var pDescr = document.createElement('p');
            pDescr.innerText = info.rates.BGN + "  лева";
            var img = document.createElement('img');
            // img.src = 'assets/images/usFlag.ico'
            img.src = 'assets/images/imgres.png';
            switch (currency) {
                case 'GBP':
                    img.src = 'assets/images/gbflag.png';
                    break;
                case 'USD':
                    img.src = 'assets/images/usFlag.ico';
                    break;
                case 'JPY':
                    img.src = 'assets/images/jpy.jpg';
                    break;
                case 'EUR':
                    img.src = 'assets/images/eur.png';
                    break;
                case 'CZK':
                    img.src = 'assets/images/che.png';
                    break;
                case 'CHF':
                    img.src = 'assets/images/ch.png';
                    break;
                case 'CAD':
                    img.src = 'assets/images/cad.png';
                    break;
            }

            document.getElementById('chCourse').appendChild(pDescr);
            pDescr.appendChild(img);
        }
    });
}, false);

document.getElementById('sendComment').addEventListener('click', function() {
    var commentText = document.getElementById('comment').value;
    var container = document.getElementById('comments-box');
    container.innerHTML += '<p class="comment-text">' + commentText + '</p>';
}, false)