// Scripts

$(document).ready(function () {
  // Close/expand sections when clicked
//   $('.title-container, .inner-container ').click( function (event) {
//     event.stopPropagation();
//     if (!($(this).find('.section-text').is('.active-s')) && ($('.section-text').is('.active-s'))) {               
//         if ($('.text').is('.open')) {
//           $('div.text.open').toggleClass('hide open');
//           $('div.headings.active-s').toggleClass('active-s');
//           $('div.section-text.active-s').toggleClass('active-s');
//           $('div.inner-container.active-s').toggleClass('active-s');
//           $(this).find('.section-text').toggleClass('active-s');
//           $(this).closest('.inner-container').toggleClass('active-s');  
//       } else {
//           $('div.section-text.active-s').toggleClass('active-s');
//           $('div.inner-container.active-s').toggleClass('active-s');
//           $(this).find('.section-text').toggleClass('active-s');
//           $(this).closest('.inner-container').toggleClass('active-s'); 
//       }  
//     }
//     //  have to add else if including the headings not put the condtionals in the 4 else if already. 
//     else if ($(this).find('.section-text').is('.active-s'))  {
//           $(this).find('.section-text').toggleClass('active-s');
//           $(this).closest('.inner-container').toggleClass('active-s');
        
//     }

//     else if ($('.section-text').is('.active-s')) {
//         if ($('.text').is('.open')) {
//           $('.text').toggleClass('hide open');
//           $('div.section-text.active-s').toggleClass('active-s');
//           $('div.inner-container.active-s').toggleClass('active-s');
//           $(this).find('.section-text').toggleClass('active-s');
//           $(this).closest('.inner-container').toggleClass('active-s');  
//       } else {
//           $('div.section-text.active-s').toggleClass('active-s');
//           $('div.inner-container.active-s').toggleClass('active-s');
//           $(this).find('.section-text').toggleClass('active-s');
//           $(this).closest('.inner-container').toggleClass('active-s'); 
//       } 
//     } 
//     else if (!($(this).find('.section-text').is('.active-s')))  {
//           $(this).find('.section-text').toggleClass('active-s');
//           $(this).closest('.inner-container').toggleClass('active-s'); 
//     } 
// })

  $('.about-me-heading').click(function (event) {
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

  $('.work').click(function (event) {
    if ($('.welcome').is('.on')) {
    $('.welcome').toggleClass('hide on');
    $('.work-text').toggleClass('hide on');
    $('.work').toggleClass('hide');
    $('.intro').toggleClass('hide');
    } else if ($('.personal-text').is('.on')) {
      $('.personal-text').toggleClass('hide on');
      $('.personal').toggleClass('hide');
      $('.work-text').toggleClass('hide on');
      $('.work').toggleClass('hide');
    }
  })

  $('.personal').click(function (event) {
    if ($('.welcome').is('.on')) {
    $('.welcome').toggleClass('hide on');
    $('.intro').toggleClass('hide');
    $('.personal-text').toggleClass('hide on');
    $('.personal').toggleClass('hide');
    } else if ($('.work-text').is('.on')) {
      $('.work-text').toggleClass('hide on');
      $('.work').toggleClass('hide');
      $('.personal-text').toggleClass('hide on');
      $('.personal').toggleClass('hide');
    }
  })

  $('.intro').click(function (event) {
    if ($('.work-text').is('.on')) {
    $('.work-text').toggleClass('hide on');
    $('.work').toggleClass('hide');
    $('.welcome').toggleClass('hide on');
    $('.intro').toggleClass('hide');
    } else if ($('.personal-text').is('.on')) {
      $('.personal-text').toggleClass('hide on');
      $('.personal').toggleClass('hide');
      $('.welcome').toggleClass('hide on');
      $('.intro').toggleClass('hide');

    }
  })



  // $('.about-me-heading').click(function (event) {
  //   event.stopPropagation();
  //   if (!($(this).is('.wide')) && ($('.headings').is('.wide')) )  {
  //     $('div.headings.wide').toggleClass('wide');   
  //     $(this).toggleClass('wide');
  //   }

  //   else if ($(this).is('.wide'))  {
  //     $(this).toggleClass('wide');
  //   }

  //   else if ($('.headings').is('.wide')) {
  //     $('div.headings.wide').toggleClass('wide');
  //     $(this).toggleClass('wide');
  //   } 

  //   else if (!($(this).is('.wide')))  {
  //     $(this).toggleClass('wide');
  //   } 
  // });

  // show details or video when clicking button in carousel
  $('.show').click(function (event) {
    event.stopPropagation();
    $('.you-t').toggle('hide')
    $('.project-text').toggle('hide')
    $('.show').toggleClass('hide')
  })


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
  })
 
})

  

