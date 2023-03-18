(function($){
	$(document).ready(function() {	

		// Scroll to Top
		jQuery('.scrolltotop').click(function(){
			jQuery('html').animate({'scrollTop' : '0px'}, 400);
			return false;
		});
		
		jQuery(window).scroll(function(){
			var upto = jQuery(window).scrollTop();
			if(upto > 500) {
				jQuery('.scrolltotop').fadeIn();
				jQuery('header').addClass('nav-stciky').removeClass('header');
			} else {
				jQuery('.scrolltotop').fadeOut();
				jQuery('header').removeClass('nav-stciky').addClass('header');
			}
		});

		// owlCarousel
		$('.owl-carousel').owlCarousel({
			loop:true,
			margin:10,
			nav:false,
			navText:['<i class="fa-solid fa-angle-left"></i>','<i class="fa-solid fa-angle-right"></i>'],
			autoplay:false,
			autoplayTimeout:5000,
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				1000:{
					items:1
				}
			}
		})
		new WOW().init();
		

				
		
		
		
		
		
		
		
		
	});
})(jQuery);