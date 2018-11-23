var input = document.getElementById('inputField');
var btn = document.getElementById('submitBtn');

btn.addEventListener('click', () => {
	// assigning the variables & creating the li and the button
	var list = document.getElementsByTagName('ul')[0];
	var listItem = document.createElement('li');
	var dBtn = document.createElement('button');
	// gathering input from the text field and adding it to the li
	listItem.innerHTML = input.value;
	// appending on the X to the button and then the Li to the Ul 
	dBtn.appendChild(document.createTextNode("X"));
	list.appendChild(listItem);
	listItem.appendChild(dBtn);
	// adding a new value of nothing so when the submit button is pressed it clears the input field
	input.value = ' ';
	// removing the Li upon user request
	dBtn.addEventListener('click', () => {
		listItem.remove();
	})
	// changing the background colour when checked
	listItem.addEventListener('click', () => {
		listItem.style.backgroundColor = 'green';	
	})
})


