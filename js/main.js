$( document ).ready(function() {

	// set trigger for scroll-triggered css animations 
	const trigger = new ScrollTrigger({ addHeight: true });

    let menu = {};

    //open menu when hamburger is clicked
	$('#toggle').click(function() {
		menu = $(this);
		menu.toggleClass('active');
		$('#overlay').toggleClass('open');
	});

	// close menu when item is clicked 
	$('.overlay-menu').click(function() {
		$('#overlay').toggleClass('open');
		menu.toggleClass('active');
	});
});