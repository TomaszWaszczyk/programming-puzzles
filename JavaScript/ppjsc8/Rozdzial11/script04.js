window.onload = initDate;

function initDate() {
	var allTags = document.getElementsByTagName("*");
	
	for (var i=0; i<allTags.length; i++) {
		if (allTags[i].className.indexOf("tz") == 0) {
			showTheTime(allTags[i],allTags[i].className.substring(2));
		}
	}
}

function showTheTime(currElem,tzOffset) {
	var dayName = new Array("niedziela","poniedziałek","wtorek","środa","czwartek","piątek","sobota");

	var thatTZ = new Date();
	var dateStr = thatTZ.toUTCString();

	dateStr = dateStr.substr(0,dateStr.length - 3);
	thatTZ.setTime(Date.parse(dateStr));
	thatTZ.setHours(thatTZ.getHours() + parseInt(tzOffset));
	
	currElem.innerHTML = dayName[thatTZ.getDay()] + ', ' + showTheHours(thatTZ.getHours()) + showZeroFilled(thatTZ.getMinutes()) + showAmPm(thatTZ.getHours());

	function showTheHours(theHour) {
		if (theHour == 0) {
			return 12;
		}
		if (theHour < 13) {
			return theHour;
		}
		return theHour-12;
	}
	
	function showZeroFilled(inValue) {
		if (inValue > 9) {
			return ":" + inValue;
		}
		return ":0" + inValue;
	}
	
	function showAmPm(thatTime) {
		if (thatTime < 12) {
			return " przed południem ";
		}
		return " po południu ";
	}
}
