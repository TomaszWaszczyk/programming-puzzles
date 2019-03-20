window.onload = initPage;

function initPage() {
	var now = new Date();
	var lastVisit = new Date(cookieVal("pageVisit"));
	var expireDate = new Date();
	expireDate.setMonth(expireDate.getMonth()+6);
	
	document.cookie = "pageVisit=" + now + ";expires=" + expireDate.toGMTString();
	var allGrafs = document.getElementsByTagName("p");
	
	for (var i=0; i<allGrafs.length; i++) {
		if (allGrafs[i].id.indexOf("New-") != -1) {
			newCheck(allGrafs[i],allGrafs[i].id.substring(4));
		}
	}	
	
	function newCheck(grafElement,dtString) {
		var yyyy = parseInt(dtString.substring(0,4),10);
		var mm = parseInt(dtString.substring(4,6),10);
		var dd = parseInt(dtString.substring(6,8),10);
		var lastChgd = new Date(yyyy,mm-1,dd);
			
		if (lastChgd.getTime() > lastVisit.getTime()) {
			grafElement.className += " newImg";
		}
	}
}

function cookieVal(cookieName) {
	var thisCookie = document.cookie.split("; ");

	for (var i=0; i<thisCookie.length; i++) {
		if (cookieName == thisCookie[i].split("=")[0]) {
			return thisCookie[i].split("=")[1];
		}
	}
	return "1 January 1970";
}
