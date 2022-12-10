//ABOUT PAGE
//sections
jQuery(document).ready(function($) {

	var ns_in_viewport = function() {
		// Trigger transition on scroll for each content-row
		$('section.content-row').each(function(){
			$(this).isInViewport({ tolerance: -100 }).addClass('in-view');
		});
	}
	ns_in_viewport();

	$(window).scroll(ns_in_viewport);
});
