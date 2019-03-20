$(function() {
	$("#datepicker").datepicker({
		dateFormat: 'DD, MM dd, yy',
		onSelect: function(selectedDate) {
			$("#datepicked").empty().append(selectedDate);
		}
	});
});
