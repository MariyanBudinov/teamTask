// 4.	Да се създаде конструткор за човек - име, години и снимка.
//  Да се добави метод, който да съдава див с елементи с данните за този обект. Да се тества.

function Person(name, years, picture) {
    this.name = name;
    this.years = years;
    this.picture = picture;
}
Person.prototype.showProfile = function() {
    var container = document.createElement('div');
    container.style.backgroundColor = "dimgrey";
    container.style.width = "100%";
    container.style.height = "auto";
    container.style.display = "inline-block";
    document.body.appendChild(container);

    var imageProfile = document.createElement('img');
    imageProfile.style.width = '300px';
    imageProfile.style.height = '300px';
    imageProfile.style.border = 'solid darkorange 10px';
    imageProfile.style.float = 'left';

    var pName = document.createElement('p');
    pName.style.marginLeft = '350px';
    pName.style.fontWeight = 'bold';
    pName.style.textShadow = '3px 3px 8px #fc980c';

    var pYears = document.createElement('p');
    pYears.style.marginLeft = '350px';
    pYears.style.fontWeight = 'bold';
    pYears.style.textShadow = '3px 3px 8px #fc980c';

    container.appendChild(imageProfile);
    container.appendChild(pName);
    container.appendChild(pYears);

    imageProfile.setAttribute('src', 'images/' + this.picture + '.jpg');
    imageProfile.setAttribute('alt', 'Upload your photo');

    if (typeof this.name == 'string') {
        pName.innerHTML = 'NAME: ' + this.name.toUpperCase();
    } else {
        pName.innerHTML = 'NAME: Missing'

        alert("Imeto trqbwa da se vkara kato tekst, izpolzvai - '' !")
    }
    if (typeof this.years == 'number' && this.years > 0 && this.years < 110) {
        pYears.innerHTML = 'YEARS: ' + this.years;
    } else {
        alert("Nevalidna vuzrast !!!")
        pYears.innerHTML = 'YEARS: Secret';
    }

}
var penio = new Person('Margarit', 101, 'noProfile');
penio.showProfile();