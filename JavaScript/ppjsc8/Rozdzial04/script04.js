window.onload = rolloverInit;

function rolloverInit() {
	for (var i=0; i<document.links.length; i++) {
		var linkObj =  document.links[i];
		if (linkObj.id) {
			var imgObj = document.getElementById(linkObj.id + "Img");
			if (imgObj) {
				setupRollover(linkObj,imgObj);
			}
		}
	}
}

function setupRollover(thisLink,thisImage) {
	thisLink.imgToChange = thisImage;
	thisLink.onmouseout = function() {
		this.imgToChange.src = this.outImage.src;
	}
	thisLink.onmouseover = function() {
		this.imgToChange.src = this.overImage.src;
	}
	
	thisLink.outImage = new Image();
	thisLink.outImage.src = thisImage.src;

	thisLink.overImage = new Image();
	thisLink.overImage.src = "images/" + thisLink.id + "_on.gif";
}
