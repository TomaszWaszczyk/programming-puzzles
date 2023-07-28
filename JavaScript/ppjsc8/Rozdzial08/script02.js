window.onresize = resizeFix;

if (document.layers) {
	var origWidth = window.innerWidth;
	var origHeight = window.innerHeight;
}

function resizeFix() {
	if (document.layers) {
		if (window.innerWidth != origWidth || window.innerHeight != origHeight) {
			window.location.reload();
		}
	}
}
