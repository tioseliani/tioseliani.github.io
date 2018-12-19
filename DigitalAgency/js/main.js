$( document ).ready(function() {
	$('#burger').on('click', function (){
	$('.menu').addClass('active');
});

$('.close').on('click', function(){
	$('.menu').removeClass('active', 2000);
});
});
	$('.changeItem').click(function (e) {
		e.preventDefault();
		var target = $(this).attr('href');
	
		$('body').stop().animate({
			scrollTop:  $('body').scrollTop() - $('body').offset().top + $(target).offset().top
		}, 1000);
	});

