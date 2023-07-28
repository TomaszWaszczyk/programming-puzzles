window.onload = initDate;

function initDate() {
	var now = new Date();
	document.getElementById("dtField").innerHTML = timeString(now.getHours());

	function timeString(theHour) {
		if (theHour < 5) {
			return "Jeszcze nie śpisz o tej godzinie?";
		}
		if (theHour < 9) {
			return "Dzień dobry!";
		}
		if (theHour < 17) {
			return "W godzinach pracy nie korzystamy z internetu!";
		}
		return "Dobry wieczór!";
	}
}
