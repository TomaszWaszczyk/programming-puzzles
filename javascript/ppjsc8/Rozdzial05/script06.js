var bannerArray = new Array("images/redBanner.gif", "images/greenBanner.gif", "images/blueBanner.gif");

window.onload = initLinks;

function initLinks() {
	for (var i=0; i<parent.document.links.length; i++) {
		parent.document.links[i].onclick = setBanner;
	}
	
	setBanner();	
}

function setBanner() {
	var randomNum = Math.floor(Math.random() * bannerArray.length);

	parent.document.getElementById("adBanner").src = bannerArray[randomNum];
	return false;
}
