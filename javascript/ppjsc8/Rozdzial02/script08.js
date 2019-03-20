window.onload = initAll;

function initAll() {
	document.getElementById("redirect").onclick = initRedirect;
}

function initRedirect() {
	alert("Nie odpowiadamy za treści znajdujące się na stronach spoza naszej witryny");
	window.location = this;
	return false;
}
