// Scripts

$(document).ready(function () {
   
  $('.work-s').click(function (event) {
    if ($('.welcome').is('.on')) {
    $('.welcome').toggleClass('hide on');
    $('.work-text-s').toggleClass('hide on');
    $('.work-s').toggleClass('hide');
    $('.intro').toggleClass('hide');
    $('.head-s').addClass('hide');
    $('.holding').addClass('hold-height');
    } else if ($('.personal-text').is('.on')) {
      $('.personal-text').toggleClass('hide on');
      $('.personal').toggleClass('hide');
      $('.work-text-s').toggleClass('hide on');
      $('.work-s').toggleClass('hide');
      $('.head-s').addClass('hide');
      $('.holding').addClass('hold-height');
    }
  });

  $('.personal').click(function (event) {
    if ($('.welcome').is('.on')) {
    $('.welcome').toggleClass('hide on');
    $('.intro').toggleClass('hide');
    $('.personal-text').toggleClass('hide on');
    $('.personal').toggleClass('hide');
    $('.head-s').addClass('hide');
    $('.holding').addClass('hold-height');
    } else if ($('.work-text').is('.on')) {
      $('.work-text-s').toggleClass('hide on');
      $('.work-s').toggleClass('hide');
      $('.personal-text').toggleClass('hide on');
      $('.personal').toggleClass('hide');
      $('.head-s').addClass('hide');
      $('.holding').addClass('hold-height');
    }
  });

  $('.intro').click(function (event) {
    if ($('.work-text-s').is('.on')) {
    $('.work-text-s').toggleClass('hide on');
    $('.work-s').toggleClass('hide');
    $('.welcome').toggleClass('hide on');
    $('.intro').toggleClass('hide');
    $('.head-s').removeClass('hide');
    $('.holding').removeClass('hold-height');
    } else if ($('.personal-text').is('.on')) {
      $('.personal-text').toggleClass('hide on');
      $('.personal').toggleClass('hide');
      $('.welcome').toggleClass('hide on');
      $('.intro').toggleClass('hide');
      $('.head-s').removeClass('hide');
      $('.holding').removeClass('hold-height');
    }
  });

  $('.design').click(function (event) {
    $('.boring').toggleClass('hide');
    $('.change-s').toggleClass('hide');
    $('.header-text').toggleClass('hide');
    $('.cool').toggleClass('hide');
    $('.change-c').toggleClass('hide');
    });

  // show details or video when clicking button in carousel
  $('.show').click(function (event) {
    event.stopPropagation();
    $('.you-t').toggle('hide');
    $('.project-text').toggle('hide');
    $('.show').toggleClass('hide');
  });

  $('.show-s').click(function (event) {
    event.stopPropagation();
    $('.you-t-s').toggle('hide');
    $('.project-text-s').toggle('hide');
    $('.show-s').toggleClass('hide');
  });

  // carousel settings
  $('.main-slider').slick({
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: false,
    autoplaySpeed: 3000,
    pauseOnFocus: true,
    dots: true
  });

  $(window).load(function() {
    if ($(window).width() < 990)  {
      $('.about-me-heading').addClass('toggs');
      $('.toggs').click(function (event) {
        event.stopPropagation();  
        if (!($(this).is('.active-s')) && ($('.about-me-heading').is('.active-s')) )  {
          $('div.about-me-heading.active-s').toggleClass('active-s');
          $('div.text.open').toggleClass('hide open');      
          $(this).toggleClass('active-s');
          $(this).find('.text').toggleClass('hide open'); 
        }
    
        else if ($(this).is('.active-s'))  {
          $(this).toggleClass('active-s');
          $(this).find('.text').toggleClass('hide open');
        }
    
        else if ($('.about-me-heading').is('.active-s')) {
          $('div.about-me-heading.active-s').toggleClass('active-s');
          $('div.text.open').toggleClass('hide open');
          $(this).toggleClass('active-s');
          $(this).find('.text').toggleClass('hide open');  
        } 
    
        else if (!($(this).is('.active-s')))  {
          $(this).toggleClass('active-s');
          $(this).find('.text').toggleClass('hide open'); 
        } 
      });
    }   if ($(window).width() >= 990) {
          $('.work-text').removeClass('hide');
          $('.about-me-heading').addClass('high');
          $('.about-me-heading').removeClass('toggs');
    }
  });

  $(window).resize(function () {
    if (($(window).width() < 990) && ($('.small-screen').is('.hide'))) {
      $(".small-screen").removeClass("hide");
      $(".large-screen").addClass("hide");
      $('.design').toggleClass("hide");
      $('.header-text').toggleClass("hide"); 
      $('.toggs').click(function (event) {
        event.stopPropagation();  
        if (!($(this).is('.active-s')) && ($('.about-me-heading').is('.active-s')) )  {
          $('div.about-me-heading.active-s').toggleClass('active-s');
          $('div.text.open').toggleClass('hide open');      
          $(this).toggleClass('active-s');
          $(this).find('.text').toggleClass('hide open'); 
        }
    
        else if ($(this).is('.active-s'))  {
          $(this).toggleClass('active-s');
          $(this).find('.text').toggleClass('hide open');
        }
    
        else if ($('.about-me-heading').is('.active-s')) {
          $('div.about-me-heading.active-s').toggleClass('active-s');
          $('div.text.open').toggleClass('hide open');
          $(this).toggleClass('active-s');
          $(this).find('.text').toggleClass('hide open');  
        } 
    
        else if (!($(this).is('.active-s')))  {
          $(this).toggleClass('active-s');
          $(this).find('.text').toggleClass('hide open'); 
        } 
        });
    }
    else if (($(window).width() < 990)) {
      $('.work-text').addClass('hide');
      $('.about-me-heading').removeClass('high active-s');
      $('.about-me-heading').addClass('toggs')
      $('.toggs').click(function (event) {
        event.stopPropagation();  
        if (!($(this).is('.active-s')) && ($('.about-me-heading').is('.active-s')) )  {
          $('div.about-me-heading.active-s').toggleClass('active-s');
          $('div.text.open').toggleClass('hide open');      
          $(this).toggleClass('active-s');
          $(this).find('.text').toggleClass('hide open'); 
        }
    
        else if ($(this).is('.active-s'))  {
          $(this).toggleClass('active-s');
          $(this).find('.text').toggleClass('hide open');
        }
    
        else if ($('.about-me-heading').is('.active-s')) {
          $('div.about-me-heading.active-s').toggleClass('active-s');
          $('div.text.open').toggleClass('hide open');
          $(this).toggleClass('active-s');
          $(this).find('.text').toggleClass('hide open');  
        } 
    
        else if (!($(this).is('.active-s')))  {
          $(this).toggleClass('active-s');
          $(this).find('.text').toggleClass('hide open'); 
        } 
      });
    }    
  });

  $(window).resize(function () {
    if ($(window).width() > 990) {
      $('.work-text').removeClass('hide');
      $('.about-me-heading').addClass('high');
      $('.about-me-heading').removeClass('toggs');
    }
  });

});

  

