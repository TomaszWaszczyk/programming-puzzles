window.onload = initAll;

function initAll() {
	for (var i=0; i<24; i++) {
		var newNum = Math.floor(Math.random() * 75) + 1;

		document.getElementById("square" + i).innerHTML = newNum;
	}
}
