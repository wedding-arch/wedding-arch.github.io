jQuery(function ($) {

    'use strict';
	
	// ----------------------------------------------
    // Table of index
    // ----------------------------------------------

    /*-----------------------------------------------
    # Slider Height
    # Menu Toggle
    # Menu Scrolling
	# Animated Progress bar
    # Parallax Scroll
    # Fun Fact Timer
    # Pretty Photo
    # Portfolio Filter
    # Style Chooser
    # Google Map Customization
    -------------------------------------------------*/
	
    // ----------------------------------------------
    // # Demo Chooser
    // ----------------------------------------------

    (function() {

		$('.demo-chooser .toggler').on('click', function(event){
			event.preventDefault();
			$(this).closest('.demo-chooser').toggleClass('opened');
		})

    }());
	
	// ----------------------------------------------
    // Slider images Source
    // ----------------------------------------------
	(function () {
		$('#slider-section ').vegas({
			slides: [
				{ src: 'images/slider/1.jpg' },
				{ src: 'images/slider/2.jpg' },
				{ src: 'images/slider/3.jpg' },
			]
		});
	}());
		
	

	// ----------------------------------------------
    // Parallax Scrolling
    // ----------------------------------------------
	
	(function () {
		function parallaxInit() {				
			$("#our-products").parallax("50%", 0.3);
			$("#promo-offer").parallax("50%", 0.3);
			$("#extras").parallax("50%", 0.3);
			$("#comments").parallax("50%", 0.3);
		}	
		parallaxInit();
	}());
	
	
	// ----------------------------------------------
    // promo slider
    // ----------------------------------------------
	$('.promo-slider').bxSlider({
		mode: 'vertical',
		pager: false,
		auto: false,
		touchEnabled: true,
		controls: true,
		nextText: "<i class='fa fa-angle-down'></i>",
		prevText: "<i class='fa fa-angle-up'></i>",
		minSlides: 3,
		maxSlides: 3,
		moveSlides:1,
		slideMargin: 40,
		captions: true, 
		
		onSliderLoad: function () {
			$('.promo-slider>div:not(.bx-clone)').eq(1).addClass('active-slide');
		},
		onSlideAfter: function ($slideElement, oldIndex, newIndex) {
			$('.slide').removeClass('active-slide');
			$($slideElement).next().addClass('active-slide');        
		}
	
		
	});
	
	
	// ----------------------------------------------
    // Accordion Add Class
    // ----------------------------------------------
	
	
	jQuery('.accordion-heading a').click(function() {
		$('.accordion-heading').removeClass('active');
		$(this).parents('.accordion-heading').addClass('active');
	});
	
	
	
	
	
	
	
	
	// ----------------------------------------------
    // Magnific Popup
    // ----------------------------------------------
	
	(function () {
		$('#photo-gallery .image-link').magnificPopup({
			gallery: {
			  enabled: true
			},
			type: 'image' 
		});
		$('.video-link').magnificPopup({type:'iframe'});
	}());
	
	
	
	// ----------------------------------------------
    // # Google Map Customization
    // ----------------------------------------------


	(function(){

		var map;

		map = new GMaps({
			el: '#gmap',
			lat: 51.5016974,
			lng: -0.09548,
			scrollwheel:false,
			zoom: 16,
			zoomControl : true,
			panControl : false,
			streetViewControl : false,
			mapTypeControl: false,
			overviewMapControl: false,
			clickable: false
		});

		var image = 'images/map-icon.png';
		map.addMarker({
			lat: 51.5016974,
			lng: -0.09548,
			icon: image,
			animation: google.maps.Animation.DROP,
			verticalAlign: 'bottom',
			horizontalAlign: 'center',
			backgroundColor: '#d3cfcf',
			 infoWindow: {
				content: '<div class="map-info"><address>ThemeRegion<br />234 West 25th Street <br />New York</address></div>',
				borderColor: 'red',
			}
		});
		  
		var styles = [ 

			{
			  "featureType": "road",
			  "stylers": [
				{ "color": "#ffffff" }
			  ]
			  },{
			  "featureType": "landscape",
			  "stylers": [
				{ "color": "#ececec" }
			  ]
			  },{
			  "elementType": "labels.text.fill",
			  "stylers": [
				{ "color": "#d6d6d6" }
			  ]
			  },{
			  "featureType": "poi",
			  "stylers": [
				{ "color": "#cccccc" }
			  ]
			  },{
			  "elementType": "labels.text",
			  "stylers": [
				{ "saturation": 1 },
				{ "weight": 0.1 },
				{ "color": "#7f8080" }
			  ]
			}
	  
		];

		map.addStyle({
			styledMapName:"Styled Map",
			styles: styles,
			mapTypeId: "map_style"  
		});

		map.setStyle("map_style");
	}());
	
		
});

