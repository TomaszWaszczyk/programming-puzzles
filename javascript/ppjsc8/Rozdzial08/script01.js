addOnload(initOne);
addOnload(initTwo);
addOnload(initThree);

function addOnload(newFunction) {
	var oldOnload = window.onload;
	
	if (typeof oldOnload == "function") {
		window.onload = function() {
			if (oldOnload) {
				oldOnload();
			}
			newFunction();
		}
	}
	else {
		window.onload = newFunction;
	} 
}

function initOne() {
	document.getElementById("pageBody").style.backgroundColor = "#00F";
}

function initTwo() {
	document.getElementById("pageBody").style.color = "#F00";
}

function initThree() {
	var allTags = document.getElementsByTagName("*");

	for (var i=0; i<allTags.length; i++) {
		if (allTags[i].nodeName == "H1") {
			allTags[i].style.border = "5px green solid";
			allTags[i].style.padding = "25px";
			allTags[i].style.backgroundColor = "#FFF";
		}
	}
}
