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