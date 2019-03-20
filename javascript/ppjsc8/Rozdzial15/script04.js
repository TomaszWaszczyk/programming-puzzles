$(document).ready(function() {
	$("tr").mouseover(function() {
		$(this).addClass("over");
	});

	$("tr").mouseout(function() {
		$(this).removeClass("over");
	});

	$("tr:even").addClass("even");
});
