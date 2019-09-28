let data = {};

var ul = document.getElementById("container"); // Targetting the parent div element
ul.addEventListener("click", function() {
	var temp = event.target;
	console.log(temp);

	let sel = temp.getAttribute("data-value"); // Getting content attribute from each of the selected element.

	if (data[sel]) {
		data[sel] = data[sel] + 1;
	} else {
		data[sel] = 1; // data[B] = 1
	}
	console.log(data);

	let display = "";
	display =
		display + `<li data-value=${sel}${data[sel]}>${sel}${data[sel]}</li>`;

	const displayEl = document.createElement("ul");
	displayEl.innerHTML = `${display}`;
	temp.appendChild(displayEl);
});
