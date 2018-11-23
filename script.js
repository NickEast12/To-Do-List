var input = document.getElementById('inputField');
var btn = document.getElementById('submitBtn');

btn.addEventListener('click', () => {
	var list = document.getElementsByTagName('ul')[0];
	var listItem = document.createElement('li');
	var dBtn = document.createElement('button');
	listItem.innerHTML = input.value;
	dBtn.appendChild(document.createTextNode("X"));
	list.appendChild(listItem);
	listItem.appendChild(dBtn);
	input.value = ' ';
	dBtn.addEventListener('click', () => {
		listItem.remove();
	})
	listItem.addEventListener('click', () => {
		listItem.style.backgroundColor = 'green';	
	})
})


