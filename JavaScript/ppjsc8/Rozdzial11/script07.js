window.onload = initAdvert;

function initAdvert() {
	var adBox = "annoyingAdvert";
	
	document.getElementById(adBox).style.display = "block";
	document.getElementById("closeBox").onclick = function() {
		document.getElementById(adBox).style.display = "none";	
	}
}
