window.onload = initAll;

function initAll() {
	var allLinks = document.getElementsByTagName("a");
	
	for (var i=0; i<allLinks.length; i++) {
		if (allLinks[i].className.indexOf("menuLink") > -1) {
			allLinks[i].onmouseover = toggleMenu;
			allLinks[i].onclick = function() {
				return false;
			}
		}
	}
}

function toggleMenu() {
	var startMenu = this.href.lastIndexOf("/")+1;
	var stopMenu = this.href.lastIndexOf(".");
	var thisMenuName = this.href.substring(startMenu,stopMenu);

	document.getElementById(thisMenuName).style.display = "block";

	this.parentNode.className = thisMenuName;
	this.parentNode.onmouseout = function() {
		document.getElementById(this.className).style.display = "none";
	}
	this.parentNode.onmouseover = function() {
		document.getElementById(this.className).style.display = "block";
	}
}
