window.onload = showTheTime;

function showTheTime() {
	var now = new Date();

	document.getElementById("showTime").innerHTML = showTheHours(now.getHours()) + showZeroFilled(now.getMinutes()) + showZeroFilled(now.getSeconds()) + showAmPm();
	setTimeout(showTheTime,1000);
	
	function showTheHours(theHour) {	
		if (show24Hour() || (theHour > 0 && theHour < 13)) {
			return theHour;
		}
		if (theHour == 0) {
			return 12;
		}
		return theHour-12;
	}
	
	function showZeroFilled(inValue) {
		if (inValue > 9) {
			return ":" + inValue;
		}
		return ":0" + inValue;
	}

	function show24Hour() {
		return (document.getElementById("show24").checked);
	}
	
	function showAmPm() {
		if (show24Hour()) {
			return "";
		}
		if ((now.getHours() < 12)) {
			return " przed południem";
		}
		return " po południu";
	}
}
