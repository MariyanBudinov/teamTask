function sendRequest(url, method, parameters) {
    return new Promise(function(success, fail) {

        var request = new XMLHttpRequest();
        request.open(method, url, true);
        request.send(parameters || null);

        request.addEventListener('load', function() {
            if (request.status >= 200 && request.status < 300) {
                success(JSON.parse(this.responseText));
            } else {
                fail(new Error(request.statusText));
            }
        }, false);
        request.addEventListener('error', function() {
            fail(new Error(request.statusText));
        }, false);
    });
}

function getElByID(elementID) {
    return document.getElementById(elementID);
}
var url1 = "https://newsapi.org/v1/articles?source=bbc-news&sortBy=top&apiKey=c7342b04f1cd416684d43de5c48c9431";
sendRequest(url1, 'get').then(function(request) {
    var urlSorce1 = request.articles[0].urlToImage;
    var divStory1 = getElByID('story1');
    var image1 = document.createElement('img');
    image1.src = urlSorce1;
    image1.id = "image1";
    divStory1.appendChild(image1);

    var link1 = getElByID('StoryLink1');
    var author1 = getElByID('storyAuthor1');
    var desc1 = getElByID('storyDesc1');
    var data1 = getElByID('storyData1');

    link1.href = request.articles[0].url;
    author1.innerHTML = request.source.toUpperCase();
    desc1.innerHTML = request.articles[0].description;
    data1.innerHTML = request.articles[0].publishedAt;

}, function(fail) {
    alert("Нещо се обърка!");
});

var url2 = "https://newsapi.org/v1/articles?source=national-geographic&sortBy=top&apiKey=c7342b04f1cd416684d43de5c48c9431";
sendRequest(url2, 'get').then(function(request) {
    var urlSorce2 = request.articles[0].urlToImage;
    var divStory2 = getElByID('story2');
    var image2 = document.createElement('img');
    image2.src = urlSorce2;
    image2.id = "image2";
    divStory2.appendChild(image2);

    var link2 = getElByID('StoryLink2');
    var author2 = getElByID('storyAuthor2');
    var desc2 = getElByID('storyDesc2');
    var data2 = getElByID('storyData2');

    link2.href = request.articles[0].url;
    author2.innerHTML = request.source.toUpperCase();
    desc2.innerHTML = request.articles[0].description;
    data2.innerHTML = request.articles[0].publishedAt;

}, function(fail) {
    alert("Нещо се обърка!");
});

var url3 = "https://newsapi.org/v1/articles?source=mtv-news&sortBy=top&apiKey=c7342b04f1cd416684d43de5c48c9431";
sendRequest(url3, 'get').then(function(request) {
    var urlSorce3 = request.articles[0].urlToImage;
    var divStory3 = getElByID('story3');
    var image3 = document.createElement('img');
    image3.src = urlSorce3;
    image3.id = "image3";
    divStory3.appendChild(image3);

    var link3 = getElByID('StoryLink3');
    var author3 = getElByID('storyAuthor3');
    var desc3 = getElByID('storyDesc3');
    var data3 = getElByID('storyData3');

    link3.href = request.articles[0].url;
    author3.innerHTML = request.source.toUpperCase();
    desc3.innerHTML = request.articles[0].description;
    data3.innerHTML = request.articles[0].publishedAt;

}, function(fail) {
    alert("Нещо се обърка!");
});

var url4 = "https://newsapi.org/v1/articles?source=the-new-york-times&sortBy=top&apiKey=c7342b04f1cd416684d43de5c48c9431";
sendRequest(url4, 'get').then(function(request) {
    var urlSorce4 = request.articles[0].urlToImage;
    var divStory4 = getElByID('story4');
    var image4 = document.createElement('img');
    image4.src = urlSorce4;
    image4.id = "image4";
    divStory4.appendChild(image4);

    var link4 = getElByID('StoryLink4');
    var author4 = getElByID('storyAuthor4');
    var desc4 = getElByID('storyDesc4');
    var data4 = getElByID('storyData4');

    link4.href = request.articles[0].url;
    author4.innerHTML = request.source.toUpperCase();
    desc4.innerHTML = request.articles[0].description;
    data4.innerHTML = request.articles[0].publishedAt;

}, function(fail) {
    alert("Нещо се обърка!");
});