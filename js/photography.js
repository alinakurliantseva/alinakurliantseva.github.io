$(document).on('click', '.navbar-toggler', function () {
  $toggle = $(this);
  if (navigationMenu.misc.navbar_menu_visible == 1) {
    $('html').removeClass('nav-open');
    navigationMenu.misc.navbar_menu_visible = 0;
    $('#bodyClick').remove();
    setTimeout(function () {
      $toggle.removeClass('toggled');
    }, 550);
    $('html').removeClass('nav-open-absolute');
  } else {
    setTimeout(function () {
      $toggle.addClass('toggled');
    }, 580);
    div = '<div id="bodyClick"></div>';
    $(div).appendTo("body").click(function () {
      $('html').removeClass('nav-open');
      if ($('nav').hasClass('navbar-absolute')) {
        $('html').removeClass('nav-open-absolute');
      }
      navigationMenu.misc.navbar_menu_visible = 0;
      $('#bodyClick').remove();
      setTimeout(function () {
        $toggle.removeClass('toggled');
      }, 550);
    });
    if ($('nav').hasClass('navbar-absolute')) {
      $('html').addClass('nav-open-absolute');
    }
    $('html').addClass('nav-open');
    navigationMenu.misc.navbar_menu_visible = 1;
  }
});
$("#navbar-toggler-demo a").on('click', function (event) {
  if (this.hash !== "") {
    event.preventDefault();
    var hash = this.hash;
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 1000, function () {
      window.location.hash = hash;
    });
  }
});
navigationMenu = {
  misc: {
    navbar_menu_visible: 0,
    window_width: 0,
    transparent: true,
    colored_shadows: true,
    fixedTop: false,
    navbar_initialized: false
  },
};
$(".swipebox").swipebox();
$("#viewAll").click(function (e) {
  e.preventDefault();
  $.swipebox([{
      href: 'img/web-design-development/photography/wedding-and-engagement/wedding-photography-1-sm.jpg',
      title: 'Wedding Photography, Ottawa'
    },
    {
      href: 'img/web-design-development/photography/wedding-and-engagement/wedding-photography-2-sm.jpg',
      title: 'Wedding Photography, Ottawa'
    },
    {
      href: 'img/web-design-development/photography/wedding-and-engagement/wedding-photography-3-sm.jpg',
      title: 'Wedding Photography, Ottawa'
    },
    {
      href: 'img/web-design-development/photography/wedding-and-engagement/wedding-photography-4-sm.jpg',
      title: 'Wedding Photography, Ottawa'
    },
    {
      href: 'img/web-design-development/photography/wedding-and-engagement/wedding-photography-5-sm.jpg',
      title: 'Wedding Photography, Ottawa'
    },
    {
      href: 'img/web-design-development/photography/wedding-and-engagement/wedding-photography-6-sm.jpg',
      title: 'Wedding Photography, Ottawa'
    },
    {
      href: 'img/web-design-development/photography/wedding-and-engagement/wedding-photography-7-sm.jpg',
      title: 'Wedding Photography, Ottawa'
    },

    {
      href: 'img/web-design-development/photography/wedding-and-engagement/engagement-photography-1-sm.jpg',
      title: 'Engagement Photography, Ottawa'
    },
    {
      href: 'img/web-design-development/photography/wedding-and-engagement/engagement-photography-2-sm.jpg',
      title: 'Engagement Photography, Ottawa'
    },
    {
      href: 'img/web-design-development/photography/wedding-and-engagement/engagement-photography-3-sm.jpg',
      title: 'Engagement Photography, Ottawa'
    },
    {
      href: 'img/web-design-development/photography/wedding-and-engagement/engagement-photography-4-sm.jpg',
      title: 'Engagement Photography, Ottawa'
    },
    {
      href: 'img/web-design-development/photography/wedding-and-engagement/engagement-photography-5-sm.jpg',
      title: 'Engagement Photography, Ottawa'
    },

    {
      href: 'img/web-design-development/photography/lifestyle/lifestyle-photography-1-sm.jpg',
      title: 'Lifestyle Photography, Ottawa'
    },
    {
      href: 'img/web-design-development/photography/lifestyle/lifestyle-photography-2-sm.jpg',
      title: 'Lifestyle Photography, Ottawa'
    },
    {
      href: 'img/web-design-development/photography/lifestyle/lifestyle-photography-3-sm.jpg',
      title: 'Lifestyle Photography, Ottawa'
    },
    {
      href: 'img/web-design-development/photography/lifestyle/lifestyle-photography-4-sm.jpg',
      title: 'Lifestyle Photography, Ottawa'
    },
    {
      href: 'img/web-design-development/photography/lifestyle/lifestyle-photography-5-sm.jpg',
      title: 'Lifestyle Photography, Ottawa'
    },
    {
      href: 'img/web-design-development/photography/lifestyle/lifestyle-photography-6-sm.jpg',
      title: 'Lifestyle Photography, Ottawa'
    },
    {
      href: 'img/web-design-development/photography/lifestyle/lifestyle-photography-7-sm.jpg',
      title: 'Lifestyle Photography, Ottawa'
    },
    {
      href: 'img/web-design-development/photography/lifestyle/lifestyle-photography-8-sm.jpg',
      title: 'Lifestyle Photography, Ottawa'
    },
    {
      href: 'img/web-design-development/photography/lifestyle/lifestyle-photography-9-sm.jpg',
      title: 'Lifestyle Photography, Ottawa'
    },
    {
      href: 'img/web-design-development/photography/lifestyle/lifestyle-photography-10-sm.jpg',
      title: 'Lifestyle Photography, Ottawa'
    },
    {
      href: 'img/web-design-development/photography/lifestyle/lifestyle-photography-11-sm.jpg',
      title: 'Lifestyle Photography, Ottawa'
    },
    {
      href: 'img/web-design-development/photography/lifestyle/lifestyle-photography-12-sm.jpg',
      title: 'Lifestyle Photography, Ottawa'
    },

    {
      href: 'img/web-design-development/photography/event-and-commercial/event-and-commercial-photography-1-sm.jpg',
      title: 'Event and Commercial Photography, Ottawa'
    },
    {
      href: 'img/web-design-development/photography/event-and-commercial/event-and-commercial-photography-2-sm.jpg',
      title: 'Event and Commercial Photography, Ottawa'
    },
    {
      href: 'img/web-design-development/photography/event-and-commercial/event-and-commercial-photography-3-sm.jpg',
      title: 'Event and Commercial Photography, Ottawa'
    },
    {
      href: 'img/web-design-development/photography/event-and-commercial/event-and-commercial-photography-4-sm.jpg',
      title: 'Event and Commercial Photography, Ottawa'
    },
    {
      href: 'img/web-design-development/photography/event-and-commercial/event-and-commercial-photography-5-sm.jpg',
      title: 'Event and Commercial Photography, Ottawa'
    },
    {
      href: 'img/web-design-development/photography/event-and-commercial/event-and-commercial-photography-6-sm.jpg',
      title: 'Event and Commercial Photography, Ottawa'
    },
    {
      href: 'img/web-design-development/photography/event-and-commercial/event-and-commercial-photography-7-sm.jpg',
      title: 'Event and Commercial Photography, Ottawa'
    },
    {
      href: 'img/web-design-development/photography/event-and-commercial/event-and-commercial-photography-8-sm.jpg',
      title: 'Event and Commercial Photography, Ottawa'
    },
    {
      href: 'img/web-design-development/photography/event-and-commercial/event-and-commercial-photography-9-sm.jpg',
      title: 'Event and Commercial Photography, Ottawa'
    },
    {
      href: 'img/web-design-development/photography/event-and-commercial/event-and-commercial-photography-10-sm.jpg',
      title: 'Event and Commercial Photography, Ottawa'
    },
    {
      href: 'img/web-design-development/photography/event-and-commercial/event-and-commercial-photography-11-sm.jpg',
      title: 'Event and Commercial Photography, Ottawa'
    },
    {
      href: 'img/web-design-development/photography/event-and-commercial/event-and-commercial-photography-12-sm.jpg',
      title: 'Event and Commercial Photography, Ottawa'
    }
  ]);
});

function removeViewAll(widthScreen) {
  if (widthScreen.matches) {
    $("#viewAllButton").addClass("hideViewAll");
  } else {
    $("#viewAllButton").removeClass("hideViewAll");
  }
}
var widthScreen = window.matchMedia("(max-width: 991px)")
removeViewAll(widthScreen)
widthScreen.addListener(removeViewAll)
jQuery(document).ready(function ($) {
  $('.js-scroll-trigger').click(function () {
    $('.navbar-collapse').collapse('hide');
  });
  $('body').scrollspy({
    target: '#mainNav',
    offset: 57
  });
  $("#photography-ottawa").on('click', function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1000, function () {
        window.location.hash = hash;
      });
    }
  });
  $("#navbarResponsive a").on('click', function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1000, function () {
        window.location.hash = hash;
      });
    }
  });
});