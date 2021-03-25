// Scripts

$(document).ready(function () {

  $(window).load(function() {
    if ($(window).width() >= 768) {
          $('.box-text').addClass('textBox');
    }
  });

  $(window).load(function() {
    if ($(window).width() < 990)  {
      $('.about-me-heading').addClass('toggs');
      $('.toggs').bind('click', function (event) {
        event.stopPropagation();  
        if (!($(this).is('.active-s')) && ($('.about-me-heading').is('.active-s')) )  {
          $('div.about-me-heading.active-s').toggleClass('active-s');
          $('div.text.open').toggleClass('hide textBox open');      
          $(this).toggleClass('active-s');
          $(this).find('.text').toggleClass('hide textBox open');           
        }
    
        else if ($(this).is('.active-s'))  {
          $(this).toggleClass('active-s');
          $(this).find('.text').toggleClass('hide textBox open');
        }
    
        else if ($('.about-me-heading').is('.active-s')) {
          $('div.about-me-heading.active-s').toggleClass('active-s');
          $('div.text.open').toggleClass('hide textBox open');
          $(this).toggleClass('active-s');
          $(this).find('.text').toggleClass('hide textBox open');  
        } 
    
        else if (!($(this).is('.active-s')))  {
          $(this).toggleClass('active-s');
          $(this).find('.text').toggleClass('hide textBox open'); 
        } 
      });
    }   if ($(window).width() >= 990) {
          $('.work-text').removeClass('hide');
          $('.about-me-heading').addClass('high');
          $('.about-me-heading').removeClass('toggs');
          $('.work-text').addClass('textBox');
    }
  });

  $(window).resize(function () {
    if (($(window).width() < 990) && ($('.small-screen').is('.hide'))) {
      $(".small-screen").removeClass("hide");
      $(".large-screen").addClass("hide");
      $('.design').toggleClass("hide");
      $('.header-text').toggleClass("hide"); 
      $('.toggs').bind('click', function (event) {
        event.stopPropagation();  
        if (!($(this).is('.active-s')) && ($('.about-me-heading').is('.active-s')) )  {
          $('div.about-me-heading.active-s').toggleClass('active-s');
          $('div.text.open').toggleClass('hide textBox open');      
          $(this).toggleClass('active-s');
          $(this).find('.text').toggleClass('hide textBox open'); 
        }
    
        else if ($(this).is('.active-s'))  {
          $(this).toggleClass('active-s');
          $(this).find('.text').toggleClass('hide textBox open');
        }
    
        else if ($('.about-me-heading').is('.active-s')) {
          $('div.about-me-heading.active-s').toggleClass('active-s');
          $('div.text.open').toggleClass('hide textBox open');
          $(this).toggleClass('active-s');
          $(this).find('.text').toggleClass('hide textBox open');  
        } 
    
        else if (!($(this).is('.active-s')))  {
          $(this).toggleClass('active-s');
          $(this).find('.text').toggleClass('hide textBox open'); 
        } 
        });
    }
    else if (($(window).width() < 990)) {
      $('.work-text').addClass('hide');
      $('.text').removeClass('textBox open');
      $('.about-me-heading').removeClass('high active-s');
      $('.about-me-heading').addClass('toggs')
      $('.toggs').bind('click', function (event) {
        event.stopPropagation();  
        if (!($(this).is('.active-s')) && ($('.about-me-heading').is('.active-s')) )  {
          $('div.about-me-heading.active-s').removeClass('active-s');
          $('div.text.open').removeClass('hide textBox open');      
          $(this).addClass('active-s');
          $(this).find('.text').addClass('textBox'); 
          $(this).find('.text').removeClass('hide open'); 
        }
    
        else if ($(this).is('.active-s'))  {
          $(this).toggleClass('active-s');
          $(this).find('.text').toggleClass('hide textBox open');
        }
    
        else if ($('.about-me-heading').is('.active-s')) {
          $('div.about-me-heading.active-s').toggleClass('active-s');
          $('div.text.open').toggleClass('hide textBox open');
          $(this).toggleClass('active-s');
          $(this).find('.text').toggleClass('hide textBox open');  
        } 
    
        else if (!($(this).is('.active-s')))  {
          $(this).toggleClass('active-s');
          $(this).find('.text').toggleClass('hide textBox open'); 
        }
      });
    }    
  });

  $(window).resize(function () {
    if ($(window).width() > 990) {
      $('.work-text').removeClass('hide');
      $('.about-me-heading').addClass('high');
      $('.work-text').addClass('textBox');
      $('.about-me-heading').removeClass('toggs');
    }
  });
   
  $('.work-s').click(function () {
    if ($('.welcome').is('.on')) {
    $('.welcome').toggleClass('hide on');
    $('.intro').toggleClass('hide');
    $('.work-text-s').toggleClass('hide on');
    $('.work-s').toggleClass('hide');
    $('.head-s').addClass('hide');
    $('.holding').addClass('hold-height rows');
    $('.select-buttons').addClass('rows');
    $('.intro, .personal').addClass('button-size');
    } else if ($('.personal-text').is('.on')) {
      $('.personal-text').toggleClass('hide on');
      $('.personal').toggleClass('hide');
      $('.work-text-s').toggleClass('hide on');
      $('.work-s').toggleClass('hide');
      $('.head-s').addClass('hide');
      $('.holding').addClass('hold-height');
      $('.select-buttons').addClass('rows');
      $('.intro, .personal').addClass('button-size');
    }
  });

  $('.personal').click(function () {
    if ($('.welcome').is('.on')) {
    $('.welcome').toggleClass('hide on');
    $('.intro').toggleClass('hide');
    $('.personal-text').toggleClass('hide on');
    $('.personal').toggleClass('hide');
    $('.head-s').addClass('hide');
    $('.holding').addClass('hold-height');
    $('.select-buttons').addClass('rows');
    $('.intro, .work-s').addClass('button-size');
    } else if ($('.work-text-s').is('.on')) {
      $('.work-text-s').toggleClass('hide on');
      $('.work-s').toggleClass('hide');
      $('.personal-text').toggleClass('hide on');
      $('.personal').toggleClass('hide');
      $('.head-s').addClass('hide');
      $('.holding').addClass('hold-height');
      $('.select-buttons').addClass('rows');
      $('.intro, .work-s').addClass('button-size');
    }
  });

  $('.intro').click(function () {
    if ($('.work-text-s').is('.on')) {
    $('.work-text-s').toggleClass('hide on');
    $('.work-s').toggleClass('hide');
    $('.welcome').toggleClass('hide on');
    $('.intro').toggleClass('hide');
    $('.head-s').removeClass('hide');
    $('.holding').removeClass('hold-height');
    $('.select-buttons').removeClass('rows');
    $('.personal, .work-s').removeClass('button-size');
    } else if ($('.personal-text').is('.on')) {
      $('.personal-text').toggleClass('hide on');
      $('.personal').toggleClass('hide');
      $('.welcome').toggleClass('hide on');
      $('.intro').toggleClass('hide');
      $('.head-s').removeClass('hide');
      $('.holding').removeClass('hold-height');
      $('.select-buttons').removeClass('rows');
      $('.personal, .work-s').removeClass('button-size');
    }
  });

  $('.design').click(function () {
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

});

  

