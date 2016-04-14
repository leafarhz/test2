
$(document).ready(function() {	

   $('.user-icon').click(function(e) 
   { 
   		$("#myDropdown").toggleClass("show");
		$("#multiple-app-navigator").removeClass("show");
		e.stopPropagation();
   });
    $('.app-navigator').click(function(e) 
   { 
   		$("#multiple-app-navigator").toggleClass("show");
		$("#myDropdown").removeClass("show"); 
		e.stopPropagation();
   });
   
   $("#hamburger-menu").click(function(){
		$(".overlay-mobile").toggleClass("show-overlay");
		
   });
   
   $(".mobile-fav-brand-icon").click(function(){
	   $("#mobile-fav-brand-section").css("display","block");
	    $(".fav-overlay").css("display","block");
		$("#hvoc-navbar").removeClass("in");
   });
   
   $(".close-popup").click(function(){
	   $("#mobile-fav-brand-section").css("display","none");
	    $(".fav-overlay").css("display","none");
		$(".overlay-mobile").removeClass("show-overlay");
   });
   
   
     $(document).click( function(){
        $("#myDropdown").removeClass("show");
		$("#multiple-app-navigator").removeClass("show");
    });
			
});


	
	
