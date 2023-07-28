window.onload = initAll;

function initAll() {
	document.getElementById("redirect").onclick = initRedirect;
}

function initRedirect() {
	window.location = "jswelcome.html";
	return false;
}
