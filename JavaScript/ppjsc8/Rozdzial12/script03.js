window.onload = initAll;

function initAll() {
	var allLinks = document.getElementsByTagName("a");
	
	for (var i=0; i<allLinks.length; i++) {
		if (allLinks[i].className.indexOf("menuLink") > -1) {
			allLinks[i].onmouseover = toggleMenu;
			allLinks[i].onclick = clickHandler;
		}
	}
}

function clickHandler(evt) {
	if (evt) {
		if (typeof evt.target == "string") {
			toggleMenu(evt,evt.target);
		}
		else {
			toggleMenu(evt,evt.target.toString());
		}
	}
	else {
		toggleMenu(evt,window.event.srcElement.href);
	}
	return false;
}

function toggleMenu(evt,currMenu) {
	if (toggleMenu.arguments.length < 2) {
		var currMenu = this.href;
	}

	var startMenu = currMenu.lastIndexOf("/")+1;
	var stopMenu = currMenu.lastIndexOf(".");
	var thisMenuName = currMenu.substring(startMenu,stopMenu);

	var thisMenu = document.getElementById(thisMenuName);
	thisMenu.style.display = "block";

	thisMenu.parentNode.className = thisMenuName;
	thisMenu.parentNode.onmouseout = function() {
		document.getElementById(this.className).style.display = "none";
	}
	thisMenu.parentNode.onmouseover = function() {
		document.getElementById(this.className).style.display = "block";
	}
}
