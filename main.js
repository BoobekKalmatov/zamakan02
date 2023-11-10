var hamburger = document.querySelector(".hamburger");
var nav = document.querySelector(".nav");
hamburger.addEventListener("click", function() {
  hamburger.classList.toggle("is-active");
  nav.classList.toggle("is-active");
});

var close = document.querySelector(".close");
close.addEventListener("click", function() {
  hamburger.classList.toggle("is-active");
  nav.classList.toggle("is-active");
});


function calculateScroll() {
	var contentTop      =   [];
	var contentBottom   =   [];
	var winTop      =   $(window).scrollTop();
	var rangeTop    =   200;
	var rangeBottom =   500;
	$('.navmenu').find('.scroll_btn a').each(function(){
		contentTop.push( $( $(this).attr('href') ).offset().top );
		contentBottom.push( $( $(this).attr('href') ).offset().top + $( $(this).attr('href') ).height() );
	})
	$.each( contentTop, function(i){
		if ( winTop > contentTop[i] - rangeTop && winTop < contentBottom[i] - rangeBottom ){
			$('.navmenu li.scroll_btn')
			.removeClass('active')
			.eq(i).addClass('active');			
		}
	})
};

