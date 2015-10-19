jQuery(() => {
  "use strict";
  const $ = jQuery;

  // Do DOM manipulations here before it is being shown
  $('.nav-labels').hide();

  $(".fixed-navigation-wrapper").mouseenter(() => {
    $('.nav-labels').animate({width:'toggle'},350);
  });

  $(".fixed-navigation-wrapper").mouseleave(() => {
    $('.nav-labels').animate({width:'toggle'},350);
  });

  // Show DOM
  $('body').fadeIn('fast');

  if($('#at-index-page').length>0) {
    // Hide fixed-navigation on load
    $('.fixed-navigation-wrapper').hide();

    $(document).scroll(() => {
      const top = $(document).scrollTop();
      const viewportHeight = $(window).height();
      const offsetMargin = 240;
      if(top>(viewportHeight-offsetMargin)) {
        $('.fixed-navigation-wrapper').fadeIn('fast');
      } else {
        $('.fixed-navigation-wrapper').fadeOut('fast');
      }
    });
  }

})
