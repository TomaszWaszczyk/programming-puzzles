window.onload = showCookies;

function showCookies() {
	var outMsg = "";

	if (document.cookie == "") {
		outMsg = "Brak jakichkolwiek ciasteczek";
	}
	else {
		var thisCookie = document.cookie.split("; ");
	
		for (var i=0; i<thisCookie.length; i++) {
			outMsg += "Ciasteczko nazywa się '" + thisCookie[i].split("=")[0];
			outMsg += "' i przechowuje wartość '" + thisCookie[i].split("=")[1] + "'<br />";
		}
	}
	document.getElementById("cookieData").innerHTML = outMsg;
}
