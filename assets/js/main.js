$(function(){
	var header = $('#header');
	var intro = $('#intro');
	var introH = intro.innerHeight();
	var scrollOffset = $(window).scrollTop();

	checkScroll(scrollOffset);

	//Fixed Header
	$(window).on('scroll', function(){
		scrollOffset = $(this).scrollTop();

		checkScroll(scrollOffset);
	});

	function checkScroll(scrollOffset){

		if(scrollOffset > introH){
			header.addClass('fixed');
		} else{
			header.removeClass('fixed');
		}
	}

	//Smooth Scroll
	$('[data-scroll]').on('click', function(e){
		event.preventDefault();
		var $this = $(this);

		var sectionId = $(this).data('scroll');
		var blockOffset = $(sectionId).offset().top;

		$('.nav a').removeClass('active');
		$this.addClass('active');

		$('html, body').animate({
			scrollTop: blockOffset
		}, 700);

	});

	//Menu-nav-toggle
	$('#nav__toggle').on('click', function(e){
		event.preventDefault();

		$('.nav').removeClass('active');
		$(this).toggleClass('active');
	});

	//Accordion

	$('[data-collapse]').on('click', function(e){
		event.preventDefault();

 		sectionId = $(this).data('collapse');
					$(sectionId).slideToggle();
	
		$(this).toggleClass('active');
	});

	//Sliders reviews

	$('.reviews').slick({
		nextArrow: '<a href="#" class="reviews__btn reviews__btn--next">Next</a>',
		prevArrow: '<a href="#" class="reviews__btn reviews__btn--prev">Prev</a>'  
	});
});
