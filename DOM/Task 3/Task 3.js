// 3.	Да се създаде функция, която по даден масив с елементи ги създава и ги пъха в див. Да се модифицира да работи с многомерни масиви.

var arrNode = [
    ['div', 'div', 'div', 'div', 'div', ],
    ['h1', 'h1', 'h1', 'h1', 'h1', ],
    ['p', 'p', 'p', 'p', 'p', ]
];
var createElements = function(arr) {
    var divParent = document.createElement('div');
    divParent.setAttribute("id", "glavenDIV");
    divParent.style.backgroundColor = "orange";
    divParent.style.width = "100%";
    divParent.style.height = "auto";
    divParent.style.display = "inline-block";
    document.body.appendChild(divParent);
    if (Array.isArray(arr)) {

        var arrElements = Array.prototype.slice.call(arr);
        for (var row = 0; row < 3; row++) {

            for (var col = 0; col < 5; col++) {

                var newElement = document.createElement(arrElements[row][col]);
                newElement.style.display = 'block';
                newElement.style.width = '100px';
                newElement.style.height = '100px';
                newElement.style.backgroundColor = 'tomato';
                newElement.style.border = "2px solid green"
                newElement.style.float = 'left';
                document.getElementById("glavenDIV").appendChild(newElement);

            }
        }
    } else {
        alert('Tova koeto si vuvel ne e masiv.')
    }
}
createElements(arrNode);