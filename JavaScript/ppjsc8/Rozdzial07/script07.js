window.onload = rolloverInit;

function rolloverInit() {
	for (var i=0; i<document.images.length; i++) {
		if (document.images[i].parentNode.tagName.toLowerCase() == "a") {
			setupRollover(document.images[i]);
		}
	}
}

function setupRollover(thisImage) {
	var re = /\s*_off\s*/;

	thisImage.outImage = new Image();
	thisImage.outImage.src = thisImage.src;
	thisImage.onmouseout = function() {
		this.src = this.outImage.src;
	}

	thisImage.overImage = new Image();
	thisImage.overImage.src = thisImage.src.replace(re,"_on");
	thisImage.onmouseover = function() {
		this.src = this.overImage.src;
	}

	thisImage.clickImage = new Image();
	thisImage.clickImage.src = thisImage.src.replace(re,"_click");
	thisImage.onclick = function() {
		this.src = this.clickImage.src;
	}

	thisImage.parentNode.childImg = thisImage;
	thisImage.parentNode.onblur = function() {
		this.childImg.src = this.childImg.outImage.src;
	}	
	thisImage.parentNode.onfocus = function() {
		this.childImg.src = this.childImg.overImage.src;
	}
}
