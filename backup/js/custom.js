/* ========================================================================= */
/*	Preloader
/* ========================================================================= */

jQuery(window).load(function(){

	$("#preloader").fadeOut("slow");

});


$(document).ready(function(){

	/* ========================================================================= */
	/*	Menu item highlighting
	/* ========================================================================= */

	// jQuery('#nav').singlePageNav({
	// 	offset: jQuery('#nav').outerHeight(),
	// 	filter: ':not(.external)',
	// 	speed: 1200,
	// 	currentClass: 'current',
	// 	easing: 'easeInOutExpo',
	// 	updateHash: true,
	// 	beforeStart: function() {
	// 		console.log('begin scrolling');
	// 	},
	// 	onComplete: function() {
	// 		console.log('done scrolling');
	// 	}
	// });
	
    $(window).scroll(function () {
        if ($(window).scrollTop() > 400) {
            $("#navigation").css("background-color","rgb(22,25,28)");
        } else {
            $("#navigation").css("background-color","rgb(22,25,28)");
        }
    });
	
	/* ========================================================================= */
	/*	Fix Slider Height
	/* ========================================================================= */	

	var slideHeight = $(window).height();
	
	$('#slider, .carousel.slide, .carousel-inner, .carousel-inner .item').css('height','650px');

	$(window).resize(function(){'use strict',
		$('#slider, .carousel.slide, .carousel-inner, .carousel-inner .item').css('height','350px');
	});
	
	
	/* ========================================================================= */
	/*	Portfolio Filtering
	/* ========================================================================= */	
	
	
    // portfolio filtering

    $(".project-wrapper").mixItUp();
	
	
	$(".fancybox").fancybox({
		padding: 0,

		openEffect : 'elastic',
		openSpeed  : 650,

		closeEffect : 'elastic',
		closeSpeed  : 550,

		closeClick : true,
	});
	
	/* ========================================================================= */
	/*	Parallax
	/* ========================================================================= */	
	
	$('#facts').parallax("50%", 0.6);
	
	/* ========================================================================= */
	/*	Timer count
	/* ========================================================================= */

	// "use strict";
 //    $(".number-counters").appear(function () {
 //        $(".number-counters [data-to]").each(function () {
 //            var e = $(this).attr("data-to");
 //            $(this).delay(6e3).countTo({
 //                from: 50,
 //                to: e,
 //                speed: 3e3,
 //                refreshInterval: 50
 //            })
 //        })
 //    });
	
	/* ========================================================================= */
	/*	Back to Top
	/* ========================================================================= */
	
	
    $(window).scroll(function () {
        if ($(window).scrollTop() > 500) {
            $("#back-top").fadeIn(200)
        } else {
            $("#back-top").fadeOut(200)
        }
    });
    $("#back-top").click(function () {
        $("html, body").stop().animate({
            scrollTop: 0
        }, 1500, "easeInOutExpo")
    });

    /* ========================================================================= */
	/*	Odre button
	/* ========================================================================= */
	
	$('#order-button').click(function(){

      	var orderSub =  $(this).siblings('.order-sub').text();
	    var orderTitle = $(this).siblings('.order-title').text();
	           
	   $('#message').val($('#message').val()+" "+orderTitle+" "+orderSub+" "); // putting text into textarea
	})


	//     function defer(method) {
	//   if (window.jQuery)
	//     method();
	//   else
	//     setTimeout(function() {
	//       defer(method)
	//     }, 50);
	// }
	// defer(function() {
	//   (function($) {
	    
	//     function doneResizing() {
	//       var totalScroll = $('.logo-slider-frame').scrollLeft();
	//       var itemWidth = $('.logo-slider-item').width();
	//       var difference = totalScroll % itemWidth;
	//       if ( difference !== 0 ) {
	//         $('.logo-slider-frame').animate({
	//           scrollLeft: '-=' + difference
	//         }, 500, function() {
	//           // check arrows
	//           checkArrows();
	//         });
	//       }
	//     }
	    
	//     function checkArrows() {
	//       var totalWidth = $('#logo-slider .logo-slider-item').length * $('.logo-slider-item').width();
	//       var frameWidth = $('.logo-slider-frame').width();
	//       var itemWidth = $('.logo-slider-item').width();
	//       var totalScroll = $('.logo-slider-frame').scrollLeft();
	      
	//       if ( ((totalWidth - frameWidth) - totalScroll) < itemWidth ) {
	//         $(".next").css("visibility", "hidden");
	//       }
	//       else {
	//         $(".next").css("visibility", "visible");
	//       }
	//       if ( totalScroll < itemWidth ) {
	//         $(".prev").css("visibility", "hidden");
	//       }
	//       else {
	//         $(".prev").css("visibility", "visible");
	//       }
	//     }
	    
	//     $('.arrow').on('click', function() {
	//       var $this = $(this),
	//         width = $('.logo-slider-item').width(),
	//         speed = 500;
	//       if ($this.hasClass('prev')) {
	//         $('.logo-slider-frame').animate({
	//           scrollLeft: '-=' + width
	//         }, speed, function() {
	//           // check arrows
	//           checkArrows();
	//         });
	//       } else if ($this.hasClass('next')) {
	//         $('.logo-slider-frame').animate({
	//           scrollLeft: '+=' + width
	//         }, speed, function() {
	//           // check arrows
	//           checkArrows();
	//         });
	//       }
	//     }); // end on arrow click
	    
	//     $(window).on("load resize", function() {
	//       checkArrows();
	//       $('#logo-slider .logo-slider-item').each(function(i) {
	//         var $this = $(this),
	//           left = $this.width() * i;
	//         $this.css({
	//           left: left
	//         })
	//       }); // end each
	//     }); // end window resize/load
	    
	//     var resizeId;
	//     $(window).resize(function() {
	//         clearTimeout(resizeId);
	//         resizeId = setTimeout(doneResizing, 500);
	//     });
	    
	//   })(jQuery); // end function
	// });
	
});


// // ==========  START GOOGLE MAP ========== //
// function initialize() {
//     var myLatLng = new google.maps.LatLng(44.786568,20.4489216)
//     var myLatLng2 = new google.maps.LatLng(44.786568,20.5489216)

//     var mapOptions = {
//         zoom: 12,
//         center: myLatLng,
//         disableDefaultUI: true,
//         scrollwheel: false,
//         navigationControl: false,
//         mapTypeControl: false,
//         scaleControl: false,
//         draggable: false,
//         mapTypeControlOptions: {
//             mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'roadatlas']
//         }
//     };

//     var map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);


//     var marker = new google.maps.Marker({
//         position: myLatLng,
//         map: map,
//         icon: 'img/location-icon.png',
//         title: '',
//     });

// }

// google.maps.event.addDomListener(window, "load", initialize);
// // ========== END GOOGLE MAP ========== //