window.onload = initAll;
var xhr = false;
var statesArray = new Array();

function initAll() {
	document.getElementById("searchField").onkeyup = searchSuggest;

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
		xhr.onreadystatechange = setStatesArray;
		xhr.open("GET", "wojewodztwa.xml", true);
		xhr.send(null);
	}
	else {
		alert("Przykro mi, ale nie udało się utworzyć obiektu XMLHttpRequest");
	}
}

function setStatesArray() {
	if (xhr.readyState == 4) {
		if (xhr.status == 200) {
			if (xhr.responseXML) {
				var allStates = xhr.responseXML.getElementsByTagName("item");
				for (var i=0; i<allStates.length; i++) {
					statesArray[i] = allStates[i].getElementsByTagName("label")[0].firstChild;
				}
			}
		}
		else {
			alert("Wystąpiły problemy z żądaniem " + xhr.status);
		}
	}
}

function searchSuggest() {
	var str = document.getElementById("searchField").value;
	document.getElementById("searchField").className = "";
	if (str != "") {
		document.getElementById("popups").innerHTML = "";
	
		for (var i=0; i<statesArray.length; i++) {
			var thisState = statesArray[i].nodeValue;
	
			if (thisState.toLowerCase().indexOf(str.toLowerCase()) == 0) {
				var tempDiv = document.createElement("div");
				tempDiv.innerHTML = thisState;
				tempDiv.onclick = makeChoice;
				tempDiv.className = "suggestions";
				document.getElementById("popups").appendChild(tempDiv);
			}
		}
		var foundCt = document.getElementById("popups").childNodes.length;
		if (foundCt == 0) {
			document.getElementById("searchField").className = "error";
		}
		if (foundCt == 1) {
			document.getElementById("searchField").value = document.getElementById("popups").firstChild.innerHTML;
			document.getElementById("popups").innerHTML = "";
		}
	}
}

function makeChoice(evt) {
	if (evt) {	
		var thisDiv = evt.target;
	}
	else {
		var thisDiv = window.event.srcElement;
	}
	document.getElementById("searchField").value = thisDiv.innerHTML;
	document.getElementById("popups").innerHTML = "";
}
