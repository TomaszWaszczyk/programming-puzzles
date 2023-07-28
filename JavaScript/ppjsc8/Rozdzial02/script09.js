window.onload = initAll;

function initAll() {
	document.getElementById("Warszawa").onclick = saySomething;
	document.getElementById("Krakow").onclick = saySomething;
	document.getElementById("Wroclaw").onclick = saySomething;
}

function saySomething() {
	switch(this.id) {
		case "Warszawa":
			alert("Zamek królewski");
			break;
		case "Krakow":
			alert("Wawel");
			break;
		case "Wroclaw":
			alert("Ostrów tumski");
			break;
		default:
	}
}
