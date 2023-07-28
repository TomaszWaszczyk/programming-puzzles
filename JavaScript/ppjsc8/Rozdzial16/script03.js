$(function() {
	var dates = $("#from, #to").datepicker({
		defaultDate: "+1w",
		numberOfMonths: 2,
		onSelect: function(selectedDate) {
			var option = (this.id == "from") ? "minDate" : "maxDate",
			date = $.datepicker.parseDate($.datepicker._defaults.dateFormat, selectedDate);
			dates.not(this).datepicker("option", option, date);
		}
	});
});
