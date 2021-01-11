//Scripts

$( document ).ready(function() {
    console.log( "ready!" );

// $(".imagtab").css("transition", "transform " + 1.2 * $(".imagtab").height() + "s ease");

$('h1, h2').click(function() {
	$(this).next('.section-text').toggle("hide");
});

$('.title').click(function() {
	$(this).next('.text').toggle("hide");
});


$('.show').click(function() {
    $('.video').toggle("hide");
    $('.project-text').toggle("hide");
    $('.show').toggleClass('hide');
});

$('.projects-t').click(function() {
    $('.p-container').toggle("hide");
});

$('.p-container').slick({
    arrows: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
});

})

