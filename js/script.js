 // event link di klik
$('.pagescroll').on('click', function(e){

	//ambil isi href
	var tujuan = $(this).attr('href');
	// tangkap elemen ybs

	var elemenTujuan = $(tujuan);

	// pindahkan scroll
	$('html, body').animate({
		scrollTop: elemenTujuan.offset().top - 50

	}, 1250, 'easeInOutExpo');

	e.preventDefault();

});

// parallax

// about

$(window).scroll(function(){
	
	// jumbotron
	var wScroll = $(this).scrollTop();
	$('.jumbotron img').css({
		'transform': 'translate(0px, '+ wScroll/4.5+'%)'
	});
	$('.jumbotron h1').css({
		'transform': 'translate(0px, '+ wScroll/2.5 +'%)'
	});
	$('.jumbotron p').css({
		'transform': 'translate(0px, '+ wScroll/1.5 +'%)'
	});

	$('.about .aboutkiri').addClass('muncul');
	$('.about .aboutkanan').addClass('muncul');

	// portfolio
	if(wScroll > $('.portfolio').offset().top - 220){
		$('.portfolio .card').each(function(i){

			setTimeout(function(){
					$('.portfolio .card').eq(i).addClass('muncul');
			}, 400*(i+1));
		});

		
	}
});






















