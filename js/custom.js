// PRELOADER
$(window).load(function(){
    $('.preloader').delay(500).fadeOut("slow");   
});

// HOME BACKGROUND SLIDESHOW
$(function(){
    jQuery(document).ready(function() {
		$("body").backstretch(
      [
        "https://source.unsplash.com/1920x1280/?html",
        "https://source.unsplash.com/1920x1280/?programmer",
        "https://source.unsplash.com/1920x1280/?website",
      ],
      { duration: 3200, fade: 1300 }
    );
		});
})