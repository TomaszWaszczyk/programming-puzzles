window.onload = initAdvert;

function initAdvert() {
	var adBox = "annoyingAdvert";
	
	document.getElementById(adBox).style.display = "block";
	document.getElementById(adBox).onmouseover = slide;
	document.getElementById("closeBox").onclick = function() {
		document.getElementById(adBox).style.display = "none";	
	}
}

function slide() {
	var adBox = "annoyingAdvert";
	
	if (nextPos(adBox) <= (document.body.clientWidth-150)) {
		document.getElementById(adBox).style.left = nextPos(adBox) + "px";
		setTimeout(slide,100);
	}
	
	function nextPos(elem) {
		return document.getElementById(elem).offsetLeft+1;
	}
}
