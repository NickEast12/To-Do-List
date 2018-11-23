var input = document.getElementById('inputField');
var btn = document.getElementById('submitBtn');

btn.addEventListener('click', () => {
	var list = document.getElementsByTagName('ul')[0];
	var listItem = document.createElement('li');
	var deleteBtn = document.createElement('span').innerHTML = '&times';
	deleteBtn.className = "span";
	listItem.innerHTML = input.value + deleteBtn;
	list.appendChild(listItem);
	input.value = ' ';
})
