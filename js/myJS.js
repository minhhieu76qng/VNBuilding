jQuery(function($){
	"use strict";

	var VNBuilding = window.VNBuilding || {};
	// main function
	VNBuilding.Slider  = function() {
		$('.slider-bar').slick({
			dots:true,
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: true,
			prevArrow: '<div class="custom-slick-prev"><i class="arrow-prev fa fa-angle-left" aria-hidden="true"></i></div>',
			nextArrow: '<div class="custom-slick-next"><i class="arrow-next fa fa-angle-right" aria-hidden="true"></i></div>',
		})
	}

	// init functions
	$(document).ready(function(){
		VNBuilding.Slider();
	});
	// end of function
	$(window).on('load', function(){

	});
});
