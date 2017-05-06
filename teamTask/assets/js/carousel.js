var stor = -1;
var maxstor = 3;
var timeout = 5000;
var timeoutRottate;

function autorot() {
    showNext();
    timeoutRottate = setTimeout('autorot();', timeout);
}

function rotateDiv(stor) {
    var divs = document.getElementById("storyContainer").getElementsByTagName("div");
    for (var index = 0; index < divs.length; index++) {
        var div = divs[index];
        if ((div.id != "")) {
            if (index != stor) {
                div.style.display = "none";
            } else {
                div.style.display = "block";
            }
        }
    }
    var spans = document.getElementById("nav").getElementsByTagName("span");
    for (var i = 0; i < spans.length; i++) {
        var span = spans[i];
        if ((span.id != "")) {
            if (i != stor)
                span.className = "none";
            else

                span.className = "selStory";
            // span.style.backgroundImage = "url()";
        }
    }
}



function showNext() {
    if (stor < maxstor)
        stor++;
    else
        stor = 0;

    rotateDiv(stor);
}

document.body.addEventListener('load', autorot(), false);

/*/////////
NAVIGATION
*/ ///////

function stoprot() {
    clearTimeout(timeoutRottate);
}


function showPrev() {
    if (stor > 0)
        stor--;
    else
        stor = maxstor;

    rotateDiv(stor);
}

function showStoryOne() {
    stor = 0;
    rotateDiv(stor);
}

function showStoryTwo() {
    stor = 1;
    rotateDiv(stor);
}

function showStoryThree() {
    stor = 2;
    rotateDiv(stor);
}

function showStoryFour() {
    stor = 3;
    rotateDiv(stor);
}