//burger
const nav = document.querySelector('nav');
document.querySelector('.burger').addEventListener('click', function() {
	this.classList.toggle('active');
	nav.classList.toggle('active');	
});
$('.btn1').on('click', function () {
	$('body, html').animate({
		scrollTop: $('header').offset().top
	}, 500)
})
$('.btn2').on('click', function () {
	$('body, html').animate({
		scrollTop: $('.about').offset().top
	}, 500)
})
$('.btn3').on('click', function () {
	$('body, html').animate({
		scrollTop: $('.skills').offset().top
	}, 750)
})
$('.btn4').on('click', function () {
	$('body, html').animate({
		scrollTop: $('.portfolio').offset().top
	}, 1000)
})
$('.btn5').on('click', function () {
	$('body, html').animate({
		scrollTop: $('.contact').offset().top
	}, 1250)
})	

$('a.arrow-down').click(function() {
	$('html,body').animate({
		scrollTop: $('.about').offset().top
	}, 500)
});

$(document).ready(function() {
	$('a.arrow-up').hide();

	$(function() {
		$(window).scroll(function() {
			if ($(this).scrollTop() > 100) {
				$('a.arrow-up').fadeIn();
			} else {
				$('a.arrow-up').fadeOut();
			}
		});

		$('a.arrow-up').click(function() {
			$('html, body').animate({
				scrollTop: 0
			}, 1000);
			return false;
		});
	});
});
