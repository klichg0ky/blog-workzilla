//= jquery.js

jQuery(document).ready(function($) {
	$('.profile__icon').click(function(event) {
		$('.profile__modal').slideToggle()	
	});

	$('.btn-menu').click(function(event) {
		$('.sidebar').animate({width:'toggle'},350);
	});
});