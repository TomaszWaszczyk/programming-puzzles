window.onload = initAll;
var xhr = false;

function initAll() {
	if (window.XMLHttpRequest) {
		xhr = new XMLHttpRequest();
	}
	else {
		if (window.ActiveXObject) {
			try {
				xhr = new ActiveXObject("Microsoft.XMLHTTP");
			}
			catch (e) { }
		}
	}

	if (xhr) {
		getPix();
	}
	else {
		alert("Przykro mi, ale nie udało się utworzyć obiektu XMLHttpRequest");
	}
}

function getPix() {
	xhr.open("GET", "flickrfeed.xml", true);
	xhr.onreadystatechange = showPictures;
	xhr.send(null);

	setTimeout(getPix, 5 * 1000);
}

function showPictures() {
	var tempText = document.createElement("div");
			
	if (xhr.readyState == 4) {
		if (xhr.status == 200) {
			var allImages = xhr.responseXML.getElementsByTagName("content");
			var randomImg = Math.floor(Math.random() * allImages.length);

			tempText.innerHTML = getPixVal(allImages[randomImg]);
			var thisImg = tempText.getElementsByTagName("p")[1];
			document.getElementById("pictureBar").innerHTML = thisImg.innerHTML;
		}
		else {
			alert("Wystąpiły problemy z żądaniem " + xhr.status);
		}
	}
	
	function getPixVal(inVal) {
		return (inVal.textContent) ? inVal.textContent : inVal.text;
	}
}
