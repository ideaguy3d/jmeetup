/**
 * Created by Julius Hernandez on 2/4/2016.
 */

jQuery(function(){
	/* ========================================
	 Main Menu scroll down effect
	 ========================================= */
	$(window).scroll(function(){
		if($(window).scrollTop() > $("nav").height()){
			$("nav.navbar-down").addClass("down");
		} else{
			$("nav.navbar-down").removeClass("down");
			$(".navbar-down .navMenuCollapse").collapse({toggle: false});
			$(".navbar-down .navMenuCollapse").collapse("hide");
			$(".navbar-down .navbar-toggle").addClass("collapsed");
		}
	});

	$('.main-menu .nav a').on('click', function(){
		if($('.navbar-toggle').css('display') != 'none'){
			$(".navbar-toggle").click();
		}
	});


	/* ========================================
	 Main Menu Social blinking effect
	 ========================================= */

	var SocBlink = $('.main-menu .social_blinker'),
	    MenuSoc  = $('.main-menu .social');
	SocBlink.on('click', function(){
		$(this).toggleClass('hidden');
		MenuSoc.toggleClass('appear');
	});


	MenuSoc.mouseleave(function(){
		$(this).removeClass('appear');
		SocBlink.removeClass('hidden');
	});
});