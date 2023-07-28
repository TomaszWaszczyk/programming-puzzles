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
		xhr.onreadystatechange = showPictures;
		xhr.open("GET", "flickrfeed.xml", true);
		xhr.send(null);
	}
	else {
		alert("Przykro mi, ale nie udało się utworzyć obiektu XMLHttpRequest");
	}
}

function showPictures() {
	var tempDiv = document.createElement("div");
	var tempText = document.createElement("div");
			
	if (xhr.readyState == 4) {
		if (xhr.status == 200) {
			var allImages = xhr.responseXML.getElementsByTagName("content");

			for (var i=0; i<allImages.length; i++) {
				tempText.innerHTML = getPixVal(allImages[i]);
				tempDiv = tempText.getElementsByTagName("p");

				var theText = tempDiv[1].innerHTML;
				theText = theText.replace(/240/g,"75");
				theText = theText.replace(/180/g,"75");
				theText = theText.replace(/_m/g,"_s");
				document.getElementById("pictureBar").innerHTML += theText;
			}
		}
		else {
			alert("Wystąpiły problemy z żądaniem " + xhr.status);
		}
	}
	
	function getPixVal(inVal) {
		return (inVal.textContent) ? inVal.textContent : inVal.text;
	}
}
