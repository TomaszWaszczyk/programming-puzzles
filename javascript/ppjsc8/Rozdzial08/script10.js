document.onkeydown = keyHit;
var thisPic = 0;

function keyHit(evt) {
	var myPix = new Array("images/callisto.jpg", "images/europa.jpg","images/io.jpg", "images/ganymede.jpg");
	var imgCt = myPix.length-1;
	var ltArrow = 37;
	var rtArrow = 39;

	if (evt) {
		var thisKey = evt.which;
	}
	else {
		var thisKey = window.event.keyCode;
	}
	
	if (thisKey == ltArrow) {
		chgSlide(-1);
	}
	else if (thisKey == rtArrow) {
		chgSlide(1);
	}
	return false;

	function chgSlide(direction) {
		thisPic = thisPic + direction;
		if (thisPic > imgCt) {
			thisPic = 0;
		}
		if (thisPic < 0) {
			thisPic = imgCt;
		}
		document.getElementById("myPicture").src = myPix[thisPic];
	}
}
