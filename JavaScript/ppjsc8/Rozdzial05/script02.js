window.onload = initLinks;

function initLinks() {
	for (var i=0; i<document.links.length; i++) {
		document.links[i].target = "icontent";
	}
}
