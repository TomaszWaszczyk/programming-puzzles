window.onload = initLinks;

function initLinks() {
	for (var i=0; i<document.links.length; i++) {
		document.links[i].onclick = writeContent;
		document.links[i].thisPage = i+1;
	}
}

function writeContent() {
	var newText = "<h1>Wyświetlono przykład " + this.thisPage + ".<\/h1>";

	document.getElementById("icontent").contentWindow.document.body.innerHTML = newText;
	return false;
}
