// 1.	Да се създаде функция, която да създава елемент с дадени деца. 

var bornChild = function() {
    if (arguments.length > 0) {
        if (typeof arguments[0] == 'string') {
            var parentE = document.createElement(arguments[0]);
            parentE.style.width = '100%';
            parentE.style.height = 'auto';
            parentE.style.background = 'khaki';
            document.body.appendChild(parentE);
            console.log(parentE);
        } else {
            alert('Ma aide da vuvedesh neshto normalno A!')
        }
        for (var index = 1; index < arguments.length; index++) {
            if (typeof arguments[index] == 'string') {
                var childE = document.createElement(arguments[index]);
                parentE.appendChild(childE);
                childE.style.width = '50px';
                childE.style.height = '50px';
                childE.style.background = 'deepskyblue';
                childE.style.border = '2px black solid';
                childE.style.display = 'block';
            } else {
                alert('Tova: ' + arguments[index] + ' ne stava za tag.')
            }
        }
    } else {
        alert("Ne suzdade nishto!")
    }
}
bornChild('table', 'tr', 'tr', 'tr', 'tr');