//Scripts

$( document ).ready(function() {
    console.log( "ready!" );

$(".imagtab").css("transition", "transform " + 1.2 * $(".imagtab").height() + "s ease");

$('h1, h2, h3').click(function() {
	$(this).next('.section-text').toggle("hide");
});

$('.p-container').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
  });


});


