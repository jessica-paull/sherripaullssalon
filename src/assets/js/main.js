
function restrictQuantity(elem) {
  var pattern = new RegExp(/^([1-9]|[1-9][0-9])?$/);
  var valid = pattern.test(elem.value);
  if (!valid) {
    elem.value = elem.value > 99 ? elem.value.substring(0, 2) : 1;
  }
}

function collapseNav() {
  if ($(".navbar-collapse.show").length) {
    $('.navbar-toggler').click();
  }
}

$(function() {
  $('.cost-input').regexConstrain({ regex: /^([1-9]|[1-9][0-9]|[1-9][0-9][0-9])?$/, length: 3 });
});

(function ($) {
  $.fn.regexConstrain = function (opt) {
      opt = $.extend(true, {}, {
          length: null,
          regex: ""
      }, opt);


      //has prohibit or regex been configured by user?
      function isConfigured(item) {
          return (item.regex && item.regex.length > 0) || (item.length);
      };

      //does the prohibit or allow collection find a match given the key?
      function match(item, input, e) {
          if (item.regex) {
              var re = new RegExp(item.regex);
              var jInput = $(input);
              if (re.test(jInput.val())) {
                  return false;
              } else {
              }
          }

          return true;
      };

      function isLength(item, input, e) {
          if (item.length) {
              var jInput = $(input);
              var jVal = jInput.val();
              if (jVal.length <= item.length) {
                  return false;
              }
          }

          return true;
      };

      function isProhibited(input, e) {
          if (e.which == 8 || e.which == 27) {//always permit space,tab, or escape
            return false;
          }
          var length = isLength(opt, input, e);
          var prohibit = true;
          if (length === false) {
              prohibit = isConfigured(opt) ? match(opt, input, e) : false;
          }
          return prohibit || length;
      };

      return this.each(function () {
          var jThis = $(this);
          jThis.attr("jqConstPrevVal", jThis.val());
          $(this).bind("input", function (e) {
              if (isProhibited(this, e)) {
                  jThis.val(jThis.attr("jqConstPrevVal"));
                  jThis.trigger("change");
              } else {
                  jThis.attr("jqConstPrevVal", jThis.val());
              }
          });

      });
  };
})(jQuery);

(function($) {
  'use strict'; // Start of use strict

    // Smooth scrolling using jQuery easing
    // $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    //   if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    //     var target = $(this.hash);
    //     target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    //     if (target.length) {
    //       $('html, body').animate({
    //         scrollTop: (target.offset().top - 56)
    //       }, 1000, "easeInOutExpo");
    //       return false;
    //     }
    //   }
    // });
  
    // // Closes responsive menu when a scroll trigger link is clicked
    // $('.js-scroll-trigger').click(function() {
    //   $('.navbar-collapse').collapse('hide');
    // });
  
    // // Activate scrollspy to add active class to navbar items on scroll
    // $('body').scrollspy({
    //   target: '#mainNav',
    //   offset: 57
    // });
  
    // // Collapse Navbar
    // var navbarCollapse = function() {
    //   if ($("#mainNav").offset().top > 100) {
    //     $("#mainNav").addClass("navbar-shrink");
    //   } else {
    //     $("#mainNav").removeClass("navbar-shrink");
    //   }
    // };
    // // Collapse now if page is not at top
    // navbarCollapse();
    // // Collapse the navbar when page is scrolled
    // $(window).scroll(navbarCollapse);
  
    // // Scroll reveal calls
    // window.sr = ScrollReveal();
  
    // sr.reveal('.sr-icon-1', {
    //   delay: 200,
    //   scale: 0
    // });
    // sr.reveal('.sr-icon-2', {
    //   delay: 400,
    //   scale: 0
    // });
    // sr.reveal('.sr-icon-3', {
    //   delay: 600,
    //   scale: 0
    // });
    // sr.reveal('.sr-icon-4', {
    //   delay: 800,
    //   scale: 0
    // });
    // sr.reveal('.sr-button', {
    //   delay: 200,
    //   distance: '15px',
    //   origin: 'bottom',
    //   scale: 0.8
    // });
    // sr.reveal('.sr-contact-1', {
    //   delay: 200,
    //   scale: 0
    // });
    // sr.reveal('.sr-contact-2', {
    //   delay: 400,
    //   scale: 0
    // });
  
    // // Magnific popup calls
    // $('.popup-gallery').magnificPopup({
    //   delegate: 'a',
    //   type: 'image',
    //   tLoading: 'Loading image #%curr%...',
    //   mainClass: 'mfp-img-mobile',
    //   gallery: {
    //     enabled: true,
    //     navigateByImgClick: true,
    //     preload: [0, 1]
    //   },
    //   image: {
    //     tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
    //   }
    // });
  
  })(jQuery); // End of use strict