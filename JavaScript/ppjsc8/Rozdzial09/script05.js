window.onload = cookieDelete;

function cookieDelete() {
	var cookieCt = 0;

	if (document.cookie != "" && confirm("Na pewno chcesz usunąć ciasteczka?")) {
		var thisCookie = document.cookie.split("; ");
		cookieCt = thisCookie.length;
		
		var expireDate = new Date();
		expireDate.setDate(expireDate.getDate()-1);
						   
		for (var i=0; i<cookieCt; i++) {
			var cookieName = thisCookie[i].split("=")[0];
			document.cookie = cookieName + "=;expires=" + expireDate.toGMTString();
		}
	}
	document.getElementById("cookieData").innerHTML = "Liczba usuniętych ciasteczek: " + cookieCt;
}
