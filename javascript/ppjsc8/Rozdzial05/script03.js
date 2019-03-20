window.onload = initLinks;

function initLinks() {
	for (var i=0; i<document.links.length; i++) {
		document.links[i].onclick = setContent;
	}
}

function setContent() {
	document.getElementById("icontent").contentWindow.document.location.href = this.href;
	return false;
}
