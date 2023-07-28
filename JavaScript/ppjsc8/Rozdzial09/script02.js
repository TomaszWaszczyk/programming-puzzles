window.onload = nameFieldInit;

function nameFieldInit() {
	if (document.cookie != "") {
		document.getElementById("nameField").innerHTML = "Cześć " + document.cookie.split("=")[1];
	}
}
