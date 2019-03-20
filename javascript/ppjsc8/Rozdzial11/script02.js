window.onload  = initDate;

function initDate() {
	var now = new Date();

	if (now.getDay() > 0 && now.getDay() < 6) {
		var dtString = "Przykro mi, mamy dzień roboczy.";
	}
	else {
		var dtString = "Hurra, mamy właśnie weekend!";
	}
	
	document.getElementById("dtField").innerHTML = dtString;
}
