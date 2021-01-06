//Scripts

$( document ).ready(function() {
    console.log( "ready!" );

$(".imagtab").css("transition", "transform " + 1.2 * $(".imagtab").height() + "s ease");

$('h1, h2, h3').click(function() {
	$(this).next('.section-text').toggle("hide");
});

// $('h3').click(function() {
// 	$(this).next('.section-p').toggle("hide");
// });

});


