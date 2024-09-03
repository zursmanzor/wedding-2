(function ($) {
 "use strict";

// Mobile Menu Activation -----------------------

	jQuery('.mobile-menu nav').meanmenu({
         meanScreenWidth: "991",
    });

// Sticky Menu ----------------------------------

	 $(window).on('scroll', function(){
	 	if( $(window).scrollTop()>10 ){
	 		$('#sticky').addClass('sticky');
	 		} else {
	 		$('#sticky').removeClass('sticky');
	 	}
	 });

	 $(window).on('scroll', function(){
	 	if( $(window).scrollTop()>5 ){
	 		$('#sticky2').addClass('sticky2');
	 		} else {
	 		$('#sticky2').removeClass('sticky2');
	 	}
	 });

// Single page scroll js for main menu ----------

	 $('.menu_scroll ul li a').on('click' , function(e){
	 	$('.menu_scroll ul li').removeClass('active');
	 	$(this).parent().addClass('active');
	 	var target = $('[section-scroll='+$(this).attr('href')+']');
	 	e.preventDefault();
	 	var targetHeight = target.offset().top-parseInt('50');
	 	$('html, body').animate({
	 	 scrollTop: targetHeight
	 	}, 1000);
	   });

	   $(window).scroll(function() {
	 	var windscroll = $(window).scrollTop();
	 	var target = $('.menu_scroll ul li');
	 	if (windscroll >= 0) {
	 	 $('[section-scroll]').each(function(i) {
	 	  if ($(this).position().top <= windscroll + 95) {
	 	   target.removeClass('active');
	 	   target.eq(i).addClass('active');
	 	  }
	 	 });
	 	}else{
	 	 target.removeClass('active');
	 	 $('.menu_scroll ul li:first').addClass('active');
	 	}
	   });

// Testimonial Slider ---------------------------

	$(".testimonial-slider").owlCarousel({
	 	autoPlay: true, 
	 	slideSpeed:2000,
	 	pagination:true,
	 	navigation:false,	  
	 	items : 1,
	 	navigationText:["<i class='fas fa-angle-left'></i>","<i class='fas fa-angle-right'></i>"],
	 	itemsDesktop : [1199,1],
	 	itemsDesktopSmall : [992,1],
	 	itemsTablet: [768,1],
	 	itemsMobile : [480,1],
	});

// Family Slider --------------------------------

	$(".familyslider").owlCarousel({
		autoPlay: true, 
		slideSpeed:2000,
		pagination:true,
		navigation:false,	  
		items : 4,
		navigationText:["<i class='fas fa-angle-left'></i>","<i class='fas fa-angle-right'></i>"],
		itemsDesktop : [1199,4],
		itemsDesktopSmall : [992,3],
		itemsTablet: [768,2],
		itemsMobile : [480,1],
	});

// counterdown ----------------------------------

	 function e() {
	     var e = new Date;
	         e.setDate(e.getDate() + 25);
	     var dd = e.getDate();
	     var mm = e.getMonth() + 1;
	     var y = e.getFullYear();
	     var futureFormattedDate = mm + "/" + dd + "/" + y + ' 12:00:00';
	     return futureFormattedDate;
	}

	 $('.counter-list').downCount({
	 	date: e(),
	    offset: 16
	 });


// Contact: Маска ввода телефона ----------------

	document.addEventListener('DOMContentLoaded', () => {
	const elements = document.querySelectorAll('[data-mask="phone"]')
	if (!elements) return
	const phoneOptions = {
	  mask: '+{7}(000)000-00-00'
	}
	elements.forEach(el => {
	  IMask(el, phoneOptions)
  })
  })
  
  window.onload=function()
    {
    document.getElementById("pic").onclick=look;
    document.getElementById("view").onclick=del;
    };
    
    function look(event)
    {
    if(event.target.tagName=="IMG")
       {
       document.getElementById("photo").src=event.target.src;
       document.getElementById("view").style.visibility="visible";
       document.getElementById("bas").style.visibility="visible";
       }
    return false;
    }
    
    function del()
    {
    document.getElementById("view").style.visibility="hidden";
    document.getElementById("bas").style.visibility="hidden";
    document.getElementById("photo").src="img/point.jpg";
    return false;
    }



})(jQuery); 