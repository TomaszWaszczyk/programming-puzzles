window.onload = initAll;

function initAll() {
	document.getElementsByTagName("form")[0].onsubmit = addNode;
}

function addNode() {
	var inText = document.getElementById("textArea").value;
	var newText = document.createTextNode(inText);

	var newGraf = document.createElement("p");
	newGraf.appendChild(newText);

	var docBody = document.getElementsByTagName("body")[0];
	docBody.appendChild(newGraf);
	
	return false;
}
