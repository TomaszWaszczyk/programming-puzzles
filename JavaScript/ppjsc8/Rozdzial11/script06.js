window.onload = showDays;

function showDays() {
	var allTags = document.getElementsByTagName("*");
	
	for (var i=0;i<allTags.length; i++) {
		if (allTags[i].className.indexOf("daysTill") > -1) {
			allTags[i].innerHTML = showTheDaysTill(allTags[i].id);
		}
	}
	
	function showTheDaysTill(thisDate) {
		var theDays;
		
		switch(thisDate) {
			case "anniv":
				theDays = daysTill(5,6);
				break;
			case "bday":
				theDays = daysTill(8,7);
				break;
			case "xmas":
				theDays = daysTill(12,25);
				break;
			default:
		}
		return theDays + " ";
	}

	function daysTill(mm,dd) {
		var now = new Date();
		var inDate = new Date(now.getFullYear(),mm-1,dd);

		if (inDate.getTime() < now.getTime()) {
			inDate.setYear(now.getFullYear()+1);
		}

		return (Math.ceil(dayToDays(inDate) - dayToDays(now)));
	}

	function dayToDays(inTime) {
		return (inTime.getTime() / (1000 * 60 * 60 * 24));
	}
}
