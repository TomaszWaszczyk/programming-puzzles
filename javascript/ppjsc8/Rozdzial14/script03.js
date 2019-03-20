$(document).ready(function() {
	$("a").click(function(event) {
		$("#colorMe").attr("class", $(this).attr("id"));
		event.preventDefault();
	});
});
