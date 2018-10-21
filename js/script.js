//burger
const nav = document.querySelector('nav');
document.querySelector('.burger').addEventListener('click', function() {
	this.classList.toggle('active');
	nav.classList.toggle('active');	
});

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