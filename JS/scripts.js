// Scripts

$(document).ready(function () {
  // Close/expand sections when clicked
  $('.title-container, .inner-container ').click( function (event) {
    event.stopPropagation();
    if (!($(this).find('.section-text').is('.active')) && ($('.section-text').is('.active'))) {               
        if ($('.text').is('.open')) {
          $('div.text.open').toggleClass('hide open');
          $('div.headings.active').toggleClass('active');
          $('div.section-text.active').toggleClass('hide active');
          $('div.inner-container.active').toggleClass('active');
          $(this).find('.section-text').toggleClass('hide active');
          $(this).closest('.inner-container').toggleClass('active');  
      } else {
          $('div.section-text.active').toggleClass('hide active');
          $('div.inner-container.active').toggleClass('active');
          $(this).find('.section-text').toggleClass('hide active');
          $(this).closest('.inner-container').toggleClass('active'); 
      }  
    }
    //  have to add else if including the headings not put the condtionals in the 4 else if already. 
    else if ($(this).find('.section-text').is('.active'))  {
          $(this).find('.section-text').toggleClass('hide active');
          $(this).closest('.inner-container').toggleClass('active');
        
    }

    else if ($('.section-text').is('.active')) {
        if ($('.text').is('.open')) {
          $('.text').toggleClass('hide open');
          $('div.section-text.active').toggleClass('hide active');
          $('div.inner-container.active').toggleClass('active');
          $(this).find('.section-text').toggleClass('hide active');
          $(this).closest('.inner-container').toggleClass('active');  
      } else {
          $('div.section-text.active').toggleClass('hide active');
          $('div.inner-container.active').toggleClass('active');
          $(this).find('.section-text').toggleClass('hide active');
          $(this).closest('.inner-container').toggleClass('active'); 
      } 
    } 
    else if (!($(this).find('.section-text').is('.active')))  {
          $(this).find('.section-text').toggleClass('hide active');
          $(this).closest('.inner-container').toggleClass('active'); 
    } 
})

  $('.headings').click(function (event) {
    event.stopPropagation();
    if (!($(this).is('.active')) && ($('.headings').is('.active')) )  {
      $('div.headings.active').toggleClass('active');
      $('div.text.open').toggleClass('hide open');      
      $(this).toggleClass('active');
      $(this).find('.text').toggleClass('hide open'); 
    }

    else if ($(this).is('.active'))  {
      $(this).toggleClass('active');
      $(this).find('.text').toggleClass('hide open');
    }

    else if ($('.headings').is('.active')) {
      $('div.headings.active').toggleClass('active');
      $('div.text.open').toggleClass('hide open');
      $(this).toggleClass('active');
      $(this).find('.text').toggleClass('hide open');  
    } 

    else if (!($(this).is('.active')))  {
      $(this).toggleClass('active');
      $(this).find('.text').toggleClass('hide open'); 
    } 
  });

  // show details or video when clicking button in carousel
  $('.show').click(function (event) {
    event.stopPropagation();
    $('.you-t').toggle('hide')
    $('.project-text').toggle('hide')
    $('.show').toggleClass('hide')
  })
  // show hide carousel when title clicked
  // $('.projects-t').click(function () {
  //   $('.p-container').toggle('hide')
  // })

  // carousel settings
  $('.main-slider').slick({
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnFocus: true
  })
})

  

