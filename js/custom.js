// PRELOADER
$(window).load(function(){
    $('.preloader').delay(500).fadeOut("slow"); // set duration in brackets    
});

// HOME BACKGROUND SLIDESHOW
$(function(){
    jQuery(document).ready(function() {
		$('body').backstretch([
	 		 "images/bg-slide-1.jpg", 
	 		 "images/bg-slide-2.jpg",
			 "images/bg-slide-3.jpg"
	 			], 	{duration: 3200, fade: 1300});
		});
})