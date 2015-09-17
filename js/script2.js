$(function() {
	'use strict';
	var tooltips = $( "[title]" ).tooltip({
		position: {
			my: "left top",
			at: "right+5 top-5"
		}
	});
	$( "<button>" )
		.text( "Show help" )
		.button()
		.click(function() {
		tooltips.tooltip( "open" );
	})
		.insertAfter( "form" );
});
