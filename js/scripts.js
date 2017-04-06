
var add = document.getElementById('addElem'),
	list = document.getElementById('list');

add.addEventListener('click', function() {
	var newLi = document.getElementsByTagName('li'),
		newEl = document.createElement('li');
	newEl.innerHTML = ('item ' + newLi.length);
	list.appendChild(newEl);
});