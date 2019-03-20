window.onload = rotate;

var thisAd = 0;

function rotate() {
	var adImages = new Array("images/reading1.gif","images/reading2.gif","images/reading3.gif");

	thisAd++;
	if (thisAd == adImages.length) {
		thisAd = 0;
	}
	document.getElementById("adBanner").src = adImages[thisAd];

	setTimeout(rotate, 3 * 1000);
}
