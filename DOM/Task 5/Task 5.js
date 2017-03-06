// 5.	Да се направи количка от продукти - при добавяне, махане да се рефрешва и на екрана.

function show(shown, hidden) {
    document.getElementById(shown).style.display = 'block';
    document.getElementById(hidden).style.display = 'none';
    return false;
}

function addtoCart(idElement) {
    var product = document.getElementById(idElement);
    var newproduct = product.cloneNode(true);
    var lastTd = newproduct.getElementsByClassName('mahni');
    document.getElementById('tablecart').appendChild(newproduct);
}

function countProducts() {
    var nodelist = document.getElementsByTagName("TR").length;
    document.getElementsByClassName('fillCart')[0].innerHTML = "" + (nodelist - 3);
    document.getElementsByClassName('fillCart')[1].innerHTML = "" + (nodelist - 3);

}

function emptyCart(idEl) {
    var product = document.getElementById(idEl);
    product.removeChild(document.getElementById(idEl).childNodes[0]);
    var nodelistOut = document.getElementsByTagName("TR").length;
    document.getElementsByClassName('fillCart')[0].innerHTML = "" + (nodelistOut - 3);
    document.getElementsByClassName('fillCart')[1].innerHTML = "" + (nodelistOut - 3);
}