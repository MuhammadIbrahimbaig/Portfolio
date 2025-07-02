(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#sideNav'
  });

})(jQuery); // End of use strict


//my js
// var splide = new Splide('.splide-set', {
//   type: 'loop',
//   padding: '5rem',
//   autoplay: true,
//   interval: 3000,
//   pagination:false,
//   breakpoints: {
//     1024: {
//       padding: '3rem',
//       perPage: 5,
//     },
//     768: {
//       padding: '2rem',
//       perPage: 2,
//     },
//     480: {
//       padding: '1rem',
//       perPage: 3,
//     },
//   },
// });

// splide.mount();
