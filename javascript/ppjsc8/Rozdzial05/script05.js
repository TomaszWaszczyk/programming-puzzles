var pageCount = new Array(0,0,0,0);

window.onload = initLinks;

function initLinks() {
	for (var i=0; i<document.links.length; i++) {
		document.links[i].onclick = writeContent;
		document.links[i].thisPage = i+1;
	}
}

function writeContent() {
	pageCount[this.thisPage]++;

	var newText = "<h1>Wyświetlono przykład " + this.thisPage;
	newText += ".<br>Strona ta została wyświetlona już ";
	newText += pageCount[this.thisPage] + " times.<\/h1>";

	document.getElementById("icontent").contentWindow.document.body.innerHTML = newText;
	return false;
}
