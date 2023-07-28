window.onload = initPage;

function initPage() {
	var expireDate = new Date();
	expireDate.setMonth(expireDate.getMonth()+6);

	var hitCt = parseInt(cookieVal("pageHit"));
	hitCt++;

	document.cookie = "pageHit=" + hitCt + ";expires=" + expireDate.toGMTString();
	document.getElementById("pageHits").innerHTML = "Zarejestrowano " + hitCt + " Twoich odwiedzin tej strony.";
}

function cookieVal(cookieName) {
	var thisCookie = document.cookie.split("; ");
	
	for (var i=0; i<thisCookie.length; i++) {
		if (cookieName == thisCookie[i].split("=")[0]) {
			return thisCookie[i].split("=")[1];
		}
	}
	return 0;
}
