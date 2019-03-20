window.onload = initAll;
var xhr = false;

function initAll() {
	document.getElementById("makeTextRequest").onclick = getNewFile;
	document.getElementById("makeXMLRequest").onclick = getNewFile;
}

function getNewFile() {
	makeRequest(this.href);
	return false;
}

function makeRequest(url) {
	if (window.XMLHttpRequest) {
		xhr = new XMLHttpRequest();
	}
	else {
		if (window.ActiveXObject) {
			try {
				xhr = new ActiveXObject("Microsoft.XMLHTTP");
			}
			catch (e) { }
		}
	}

	if (xhr) {
		xhr.onreadystatechange = showContents;
		xhr.open("GET", url, true);
		xhr.send(null);
	}
	else {
		document.getElementById("updateArea").innerHTML = "Przykro mi, ale nie udało się utworzyć obiektu XMLHttpRequest";
	}
}

function showContents() {
	if (xhr.readyState == 4) {
		if (xhr.status == 200) {
			if (xhr.responseXML && xhr.responseXML.childNodes.length > 0) {
				var outMsg = getText(xhr.responseXML.getElementsByTagName("choices")[0]);
			}
			else {
				var outMsg = xhr.responseText;
			}
		}
		else {
			var outMsg = "Wystąpiły problemy z żądaniem" + xhr.status;
		}
		document.getElementById("updateArea").innerHTML = outMsg;
	}
	
	function getText(inVal) {
		if (inVal.textContent) {
			return inVal.textContent;
		}
		return inVal.text;
	}
}