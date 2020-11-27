//Scripts

$( document ).ready(function() {
    console.log( "ready!" );

$('.imagtab').css("transition", "transform " + 0.02 * $('.imagtab').height() + "s ease");

$('h1, h2').click(function() {
	$(this).next('.section-text').toggle("hide");
});

});


