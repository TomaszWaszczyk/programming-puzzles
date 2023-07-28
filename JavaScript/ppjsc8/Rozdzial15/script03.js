$(document).ready(function() {
	$("#example").dialog({
		modal: true,
		resizable: false,
		overlay: {
			opacity: 0.4,
			background: "black"
		},
		buttons: {
			"OK": function() {
				$(this).dialog("close");
			}
		}
	});
});
