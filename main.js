$(document).ready(function() {
	$('[data-svg]').each(function(i, val) {
		console.log("hello");
		var element = $(this);
		$.ajax({
			url: element.data('svg'),
			cache: true,
			async: false,
			dataType: "html",
			success: function(data) {
				element.replaceWith(data);
			}
		});
	});
});