//////////
//SITE MAP
//////////


var mapButton = document.getElementById('centerA');
mapButton.addEventListener("click", function(e) {
    console.log("aAaaaaaaaaaaaaaa");
    var siteCard = document.getElementById('siteCard');
    var homeMain = document.getElementById("HomeMain");
    var secondNav = document.getElementById("navigationSectionTwo");
    homeMain.style.display = "none";
    secondNav.style.display = "none";
    siteCard.style.display = "inline";
    e.preventDefault();
}, false);

////////////
//CONTACT US
////////////

var contactUsButton = document.getElementById("ContactUSButton");
contactUsButton.addEventListener("click", function(e) {
    var contactUs = document.getElementById("contactUs");
    var container = document.getElementById("container");
    container.style.filter = "blur(20px)";
    contactUs.style.display = "block";
    e.preventDefault();

}, false);

var exitImage = document.getElementById("ExitImage");
exitImage.addEventListener("click", function() {
    var contactUs = document.getElementById("contactUs");
    var container = document.getElementById("container");
    container.style.filter = "blur(0px)";
    contactUs.style.display = "none";

}, false);


//////////////
//REGISTRATION
//////////////
var logIn = document.getElementById("LogIn");
logIn.addEventListener("click", function(e) {
    var container = document.getElementById("container");
    var registrationForms = document.getElementById("registrationForms");
    var registration = document.getElementById("registration");
    var logIn = document.getElementById("loginForm");
    container.style.filter = "blur(10px)";
    registration.style.display = "none";
    registrationForms.style.display = "block";
    logIn.style.display = "block";

    e.preventDefault();
}, false);

var exitImageLogin = document.getElementById("ExitImageLogin");
exitImageLogin.addEventListener("click", function() {
    var container = document.getElementById("container");
    var registrationForms = document.getElementById("registrationForms");
    container.style.filter = "blur(0px)";
    registrationForms.style.display = "none";

}, false);

var registration = document.getElementById("Registration");
registration.addEventListener("click", function(e) {
    var container = document.getElementById("container");
    var registrationForms = document.getElementById("registrationForms");
    var registration = document.getElementById("registration");
    var logIn = document.getElementById("loginForm");
    container.style.filter = "blur(10px)";
    registration.style.display = "block";
    registrationForms.style.display = "block";
    logIn.style.display = "none";
    e.preventDefault();
}, false);