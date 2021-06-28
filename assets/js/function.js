/* -----------------------------------------------------------------------------

"FundMe - is a Premium HTML Responsive Templeate by HTMLmate Team. You can use this for anykind of Nonprofit website

File:           JS Core
Version:        1.0
Last change:    00/00/00 
Author:         Suelo

-------------------------------------------------------------------------------- */

"use strict";

var Fundme = {
  init: function () {
    this.Basic.init();
  },

  Basic: {
    init: function () {
      this.causeSlide();
      this.counterUp();
      this.videoPopup();
      this.latestSlide();
      this.partnerSlide();
      this.aboutusSlide();
      this.volunteerSlide();
      this.menuTop();
      this.causeImg();
      this.mainSlide();
      this.preloader();
    },

    preloader: function () {
      $(window).load(function () {
        $("#preloader").fadeOut("slow", function () {
          $(this).remove();
        });
      });
    },

    menuTop: function () {
      var menuOffset = $(".menu-bar").offset().top;

      //as the page is scrolling, measure how far we've scrolled
      $(window).scroll(function () {
        var amountScrolled = $(window).scrollTop();

        //if we have scrolled past the menu offset, make it stick
        if ($(this).scrollTop() > 50) {
          $(".menu-bar").removeClass("not-stuck");
          $(".menu-bar").addClass("stuck");
        } else {
          $(".menu-bar").removeClass("stuck");
          $(".menu-bar").addClass("not-stuck");
        }
      });
      jQuery("document").ready(function ($) {
        //mobile menu toggle
        $(".menu-btn").on("click", function () {
          if ($(this).parents(".wrap").is(".opened-menu") !== true) {
            $(".wrap").addClass("opened-menu");
            $("#main-menu").addClass("opened");
          } else if ($(this).parents(".wrap").is(".opened-menu") === true) {
            $(".wrap").removeClass("opened-menu");
            $("#main-menu").removeClass("opened");
          }
        });
        // togle class "active"
        $(".toggle").on("click", function () {
          $(".toggle").toggleClass("active");
        });
      });
    },

    /* - Start Cause Silder
================================================*/
    causeSlide: function () {
      $(".recent-causes-content").owlCarousel({
        margin: 10,
        responsiveClass: true,
        pagination: true,
        autoplay: false,
        responsive: {
          0: {
            items: 1,
            pagination: true,
          },
          400: {
            items: 1,
            pagination: true,
          },
          600: {
            items: 2,
            pagination: true,
          },
          700: {
            items: 2,
            pagination: true,
          },
          1000: {
            items: 3,
            pagination: true,
          },
        },
      });
    },
    /* - End cause Slider
================================================*/

    /* Start Of counter-up
================================================*/
    counterUp: function () {
      $(".count").counterUp({
        delay: 10,
        time: 2000,
      });
    },
    /* - End Of counter-up
================================================*/

    /* Start of Video popup
================================================*/
    videoPopup: function () {
      $(".popup-with-zoom-anim").magnificPopup({
        disableOn: 200,
        type: "iframe",
        mainClass: "mfp-fade",
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false,
      });
    },

    /* - End Of Video popup
================================================*/

    /* - Start latest-news
================================================*/
    latestSlide: function () {
      $(".latest-news-slide-content").owlCarousel({
        margin: 10,
        responsiveClass: true,
        pagination: true,
        autoplay: false,
        responsive: {
          0: {
            items: 1,
            pagination: true,
          },
          1000: {
            items: 1,
            pagination: true,
          },
        },
      });
    },
    /* - End latest-news
================================================*/

    /* - Start Partner Silder
================================================*/
    partnerSlide: function () {
      $(".partner-section-slider").owlCarousel({
        margin: 10,
        responsiveClass: true,
        pagination: false,
        autoplay: false,
        responsive: {
          0: {
            items: 1,
          },
          300: {
            items: 2,
          },
          400: {
            items: 3,
          },
          600: {
            items: 4,
          },
          700: {
            items: 5,
          },
          1000: {
            items: 6,
          },
        },
      });
    },
    /* - End Partner Silder
================================================*/

    /* - Start latest-news
================================================*/
    aboutusSlide: function () {
      $(".about-us-slider").owlCarousel({
        margin: 10,
        responsiveClass: true,
        pagination: true,
        autoplay: false,
        responsive: {
          0: {
            items: 1,
            pagination: true,
          },
          1000: {
            items: 1,
            pagination: true,
          },
        },
      });
    },
    /* - End latest-news
================================================*/

    /* - Start volunteer-slide
================================================*/
    volunteerSlide: function () {
      $(".volunteer-slide").owlCarousel({
        margin: 30,
        responsiveClass: true,
        pagination: true,
        autoplay: false,
        responsive: {
          0: {
            items: 1,
          },
          400: {
            items: 1,
          },
          600: {
            items: 2,
          },
          700: {
            items: 2,
          },
          1000: {
            items: 4,
          },
        },
      });
    },
    /* - End volunteer-slide
================================================*/

    causeImg: function () {
      $(".cause-details-slide").owlCarousel({
        items: 1,
        lazyLoad: !0,
        autoplay: !0,
        animateIn: "zoomIn",
        animateOut: "slideOutDown",
      });
    },

    mainSlide: function () {
      var tpj = jQuery;

      var revapi2;
      tpj(document).ready(function () {
        if (tpj("#rev_slider_2_1").revolution == undefined) {
          revslider_showDoubleJqueryError("#rev_slider_2_1");
        } else {
          revapi2 = tpj("#rev_slider_2_1")
            .show()
            .revolution({
              sliderType: "standard",
              jsFileLocation: "js/",
              sliderLayout: "fullscreen",
              dottedOverlay: "none",
              delay: 9000,
              navigation: {
                keyboardNavigation: "off",
                keyboard_direction: "horizontal",
                mouseScrollNavigation: "off",
                mouseScrollReverse: "default",
                onHoverStop: "off",
                arrows: {
                  style: "hades",
                  enable: true,
                  hide_onmobile: false,
                  hide_onleave: false,
                  tmp:
                    '<div class="tp-arr-allwrapper">	<div class="tp-arr-imgholder"></div></div>',
                  left: {
                    h_align: "left",
                    v_align: "center",
                    h_offset: 20,
                    v_offset: 0,
                  },
                  right: {
                    h_align: "right",
                    v_align: "center",
                    h_offset: 20,
                    v_offset: 0,
                  },
                },
              },
              visibilityLevels: [1240, 1024, 778, 480],
              gridwidth: 1240,
              gridheight: 868,
              lazyType: "none",
              shadow: 0,
              spinner: "spinner0",
              stopLoop: "off",
              stopAfterLoops: -1,
              stopAtSlide: -1,
              shuffle: "off",
              autoHeight: "off",
              fullScreenAutoWidth: "off",
              fullScreenAlignForce: "off",
              fullScreenOffsetContainer: "",
              fullScreenOffset: "",
              disableProgressBar: "on",
              hideThumbsOnMobile: "off",
              hideSliderAtLimit: 0,
              hideCaptionAtLimit: 0,
              hideAllCaptionAtLilmit: 0,
              debugMode: false,
              fallbacks: {
                simplifyAll: "off",
                nextSlideOnWindowFocus: "off",
                disableFocusListener: false,
              },
            });
        }
      }); /*ready*/
    },
  },
};
$(document).ready(function () {
  Fundme.init();
});

function myfun() {
  $(document).ready(function () {
    $("#baba").val("100");
    $("#baba2").val("100");
    $("#baba").prop("disabled", true);
  });
}
function myfun2() {
  $(document).ready(function () {
    $("#baba").val("200");
    $("#baba2").val("200");
    $("#baba").prop("disabled", true);
  });
}
function myfun3() {
  $(document).ready(function () {
    $("#baba").val("300");
    $("#baba2").val("300");
    $("#baba").prop("disabled", true);
  });
}
function myfun4() {
  $(document).ready(function () {
    $("#baba").val("");
    $("#baba2").val("");
    $("#baba").removeAttr("disabled");
  });
}
