var xhr = new XMLHttpRequest();
var url = 'https://newsapi.org/v1/articles?source=bbc-news&sortBy=top&apiKey=c7342b04f1cd416684d43de5c48c9431';
xhr.open('get', url, true);
xhr.send(null);

xhr.addEventListener('error', function() {
    var errorMessage = document.getElementById('BBCauthor');
    errorMessage.innerText = "We work on this problem";
}, false);

xhr.addEventListener('load', function() {
    var infoBBC = JSON.parse(xhr.responseText);
    console.log(infoBBC);
    if ((!(Error in infoBBC)) && (xhr.status >= 200 && xhr.status <= 299) || (xhr.status == 304)) {
        var ankerBBC = document.getElementById('BBClink');
        var authorBBC = document.getElementById('BBCauthor');
        var titleBBC = document.getElementById('BBCtitle');
        var dataBBC = document.getElementById('BBCdata');
        var imgBBC = document.getElementById('BBCimage');

        ankerBBC.href = infoBBC.articles[1].url;
        authorBBC.innerHTML = infoBBC.articles[1].author;
        titleBBC.innerHTML = infoBBC.articles[1].title;
        dataBBC.innerHTML = infoBBC.articles[1].publishedAt;
        imgBBC.src = infoBBC.articles[1].urlToImage;
    }
}, false);


var request2 = new XMLHttpRequest();
var url = 'https://newsapi.org/v1/articles?source=national-geographic&sortBy=top&apiKey=c7342b04f1cd416684d43de5c48c9431';
request2.open('get', url, true);
request2.send(null);

request2.addEventListener('error', function() {
    var errorMessage = document.getElementById('NGauthor');
    errorMessage.innerText = "We work on this problem";
}, false);

request2.addEventListener('load', function() {
    var infoNG = JSON.parse(request2.responseText);
    console.log(infoNG);
    if ((!(Error in infoNG)) && (request2.status >= 200 && request2.status <= 299) || (request2.status == 304)) {
        var ankerNG = document.getElementById('NGlink');
        var authorNG = document.getElementById('NGauthor');
        var titleNG = document.getElementById('NGtitle');
        var dataNG = document.getElementById('NGdata');
        var imgNG = document.getElementById('NGimage');

        ankerNG.href = infoNG.articles[1].url;
        authorNG.innerHTML = infoNG.articles[1].author;
        titleNG.innerHTML = infoNG.articles[1].title;
        dataNG.innerHTML = infoNG.articles[1].publishedAt;
        imgNG.src = infoNG.articles[1].urlToImage;
    }
}, false);

var request3 = new XMLHttpRequest();
var url = 'https://newsapi.org/v1/articles?source=mtv-news&sortBy=top&apiKey=c7342b04f1cd416684d43de5c48c9431';
request3.open('get', url, true);
request3.send(null);

request3.addEventListener('error', function() {
    var errorMessage = document.getElementById('MTVauthor');
    errorMessage.innerText = "We work on this problem";
}, false);

request3.addEventListener('load', function() {
    var infoMTV = JSON.parse(request3.responseText);
    console.log(infoMTV);
    if ((!(Error in infoMTV)) && (request3.status >= 200 && request3.status <= 299) || (request3.status == 304)) {
        var ankerMTV = document.getElementById('MTVlink');
        var authorMTV = document.getElementById('MTVauthor');
        var titleMTV = document.getElementById('MTVtitle');
        var dataMTV = document.getElementById('MTVdata');
        var imgMTV = document.getElementById('MTVimage');

        ankerMTV.href = infoMTV.articles[1].url;
        authorMTV.innerHTML = infoMTV.articles[1].author;
        titleMTV.innerHTML = infoMTV.articles[1].title;
        dataMTV.innerHTML = infoMTV.articles[1].publishedAt;
        imgMTV.src = infoMTV.articles[1].urlToImage;
    }
}, false);

var request4 = new XMLHttpRequest();
var url = 'https://newsapi.org/v1/articles?source=the-new-york-times&sortBy=top&apiKey=c7342b04f1cd416684d43de5c48c9431';
request4.open('get', url, true);
request4.send(null);

request4.addEventListener('error', function() {
    var errorMessage = document.getElementById('NYTauthor');
    errorMessage.innerText = "We work on this problem";
}, false);

request4.addEventListener('load', function() {
    var infoNYT = JSON.parse(request4.responseText);
    console.log(infoNYT);
    if ((!(Error in infoNYT)) && (request4.status >= 200 && request4.status <= 299) || (request4.status == 304)) {
        var ankerNYT = document.getElementById('NYTlink');
        var authorNYT = document.getElementById('NYTauthor');
        var titleNYT = document.getElementById('NYTtitle');
        var dataNYT = document.getElementById('NYTdata');
        var imgNYT = document.getElementById('NYTimage');

        ankerNYT.href = infoNYT.articles[1].url;
        authorNYT.innerHTML = infoNYT.articles[1].author;
        titleNYT.innerHTML = infoNYT.articles[1].title;
        dataNYT.innerHTML = infoNYT.articles[1].publishedAt;
        imgNYT.src = infoNYT.articles[1].urlToImage;
    }
}, false);

var request5 = new XMLHttpRequest();
var url = 'https://newsapi.org/v1/articles?source=google-news&sortBy=top&apiKey=c7342b04f1cd416684d43de5c48c9431';
request5.open('get', url, true);
request5.send(null);

request5.addEventListener('error', function() {
    var errorMessage = document.getElementById('Gauthor');
    errorMessage.innerText = "We work on this problem";
}, false);

request5.addEventListener('load', function() {
    var infoG = JSON.parse(request5.responseText);
    console.log(infoG);
    if ((!(Error in infoG)) && (request5.status >= 200 && request5.status <= 299) || (request5.status == 304)) {
        var ankerG = document.getElementById('Glink');
        var authorG = document.getElementById('Gauthor');
        var titleG = document.getElementById('Gtitle');
        var dataG = document.getElementById('Gdata');
        var imgG = document.getElementById('Gimage');

        ankerG.href = infoG.articles[1].url;
        authorG.innerHTML = infoG.articles[1].author;
        titleG.innerHTML = infoG.articles[1].title;
        dataG.innerHTML = infoG.articles[1].publishedAt;
        imgG.src = infoG.articles[1].urlToImage;
    }
}, false);

var request6 = new XMLHttpRequest();
var url = 'https://newsapi.org/v1/articles?source=new-scientist&sortBy=top&apiKey=c7342b04f1cd416684d43de5c48c9431';
request6.open('get', url, true);
request6.send(null);

request6.addEventListener('error', function() {
    var errorMessage = document.getElementById('NSauthor');
    errorMessage.innerText = "We work on this problem";
}, false);

request6.addEventListener('load', function() {
    var infoNS = JSON.parse(request6.responseText);
    console.log(infoNS);
    if ((!(Error in infoNS)) && (request6.status >= 200 && request6.status <= 299) || (request6.status == 304)) {
        var ankerNS = document.getElementById('NSlink');
        var authorNS = document.getElementById('NSauthor');
        var titleNS = document.getElementById('NStitle');
        var dataNS = document.getElementById('NSdata');
        var imgNS = document.getElementById('NSimage');

        ankerNS.href = infoNS.articles[1].url;
        authorNS.innerHTML = infoNS.articles[1].author;
        titleNS.innerHTML = infoNS.articles[1].title;
        dataNS.innerHTML = infoNS.articles[1].publishedAt;
        imgNS.src = infoNS.articles[1].urlToImage;
    }
}, false);