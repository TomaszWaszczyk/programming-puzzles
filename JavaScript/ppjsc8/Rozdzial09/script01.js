window.onload = nameFieldInit;

function nameFieldInit() {
	var userName = "";
	if (document.cookie != "") {
		userName = document.cookie.split("=")[1];
	}

	document.getElementById("nameField").value = userName;
	document.getElementById("nameField").onblur = setCookie;
	document.getElementById("cookieForm").onsubmit = setCookie;
}

function setCookie() {
	var expireDate = new Date();
	expireDate.setMonth(expireDate.getMonth()+6);
	
	var userName = document.getElementById("nameField").value;
	document.cookie = "userName=" + userName + ";expires=" + expireDate.toGMTString();
	
	document.getElementById("nameField").blur();
	return false;
}
