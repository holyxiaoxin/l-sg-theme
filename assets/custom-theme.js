jQuery(function() {
  var $ = jQuery;

  // Do DOM manipulations here before it is being shown
  $('.nav-labels').hide();

  $(".fixed-navigation-wrapper").mouseenter(function() {
    $('.nav-labels').animate({width:'toggle'},350);
  });

  $(".fixed-navigation-wrapper").mouseleave(function() {
    $('.nav-labels').animate({width:'toggle'},350);
  });

  // Show DOM
  $('body').fadeIn('fast');

  if($('#at-index-page').length>0) {
    // Hide fixed-navigation on load
    $('.fixed-navigation-wrapper').hide();

    $(document).scroll(function() {
      var top = $(document).scrollTop();
      var viewportHeight = $(window).height();
      var offsetMargin = 240;
      if(top>(viewportHeight-offsetMargin)) {
        $('.fixed-navigation-wrapper').fadeIn('fast');
      } else {
        $('.fixed-navigation-wrapper').fadeOut('fast');
      }
    });
  }

  $(window).resize(function(){
    $('.fixed-navigation-wrapper').css({
        top: ($(window).height() - $('.fixed-navigation-wrapper').outerHeight())/2
    });
  });

  $(document).ready(function() {
    $('.fixed-navigation-wrapper').css({
        top: ($(window).height() - $('.fixed-navigation-wrapper').outerHeight())/2
    });
  });

  $("#center-div-logo").click(function() {
    $('html,body').animate({
        scrollTop: $(".header-bar").offset().top},
        'slow');
  });

  // delegate all clicks on "a" tag (links)
$(document).on("click", "a", function () {

    // get the href attribute
    var newUrl = $(this).attr("href");

    // veryfy if the new url exists or is a hash
    if (!newUrl || newUrl[0] === "#") {
        // set that hash
        location.hash = newUrl;
        return;
    }

    // now, fadeout the html (whole page)
    $("html").fadeOut(function () {
        // when the animation is complete, set the new location
        location = newUrl;
    });

    // prevent the default browser behavior.
    return false;
});
})
