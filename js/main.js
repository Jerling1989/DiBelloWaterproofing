/***************************************************
==================== JS INDEX ======================
****************************************************
  // PreLoader Js
  // Mobile Menu Js
  // Sidebar Js
  // Sticky Header Js
  // Data Background Js
  // Nice Select Js
  // Side Info Js
  // service hover Js
  // Mouse Custom Cursor
  // Active Odometer Counter 
  // magnificPopup js 

****************************************************/

(function ($) {
  ("use strict");

  var windowOn = $(window);

  // PreLoader Js
  windowOn.on("load", function () {
    $("#loading").fadeOut(1000);
  });

  // Mobile Menu Js
  $("#mobile-menu").meanmenu({
    meanMenuContainer: ".mobile-menu",
    meanScreenWidth: "1199",
    meanExpand: ['<i class="fal fa-plus"></i>'],
    meanContract: ['<i class="fal fa-minus"></i>'],
  });
  $("#mobile-menu-media-all").meanmenu({
    meanMenuContainer: ".mobile-menu-media-all",
    meanScreenWidth: "8000",
    meanExpand: ['<i class="fal fa-plus"></i>'],
    meanContract: ['<i class="fal fa-minus"></i>'],
  });

  // Sidebar Js
  $(".sidebar-toggle-btn").on("click", function () {
    $(".sidebar__area").addClass("sidebar-opened");
    $(".body-overlay").addClass("opened");
  });
  $(".sidebar__close-btn").on("click", function () {
    $(".sidebar__area").removeClass("sidebar-opened");
    $(".body-overlay").removeClass("opened");
  });

  // Sticky Header Js
  windowOn.on("scroll", function () {
    var scroll = $(window).scrollTop();
    if (scroll < 100) {
      $("#header-sticky").removeClass("sticky");
    } else {
      $("#header-sticky").addClass("sticky");
    }
  });

  // Data Background Js
  $("[data-background]").each(function () {
    $(this).css(
      "background-image",
      "url( " + $(this).attr("data-background") + "  )"
    );
  });

  // Nice Select Js
  $("select").niceSelect();

  // Side Info Js
  $(".side-info-close,.offcanvas-overlay").on("click", function () {
    $(".side-info").removeClass("info-open");
    $(".offcanvas-overlay").removeClass("overlay-open");
  });
  $(".side-toggle").on("click", function () {
    $(".side-info").addClass("info-open");
    $(".offcanvas-overlay").addClass("overlay-open");
  });

  $(".offset__btn").on("click", function () {
    $(".offset-content-wrapper").addClass("offset-show");
  });
  $(".offset-content-close").on("click", function () {
    $(".offset-content-wrapper").removeClass("offset-show");
  });

  // service hover Js
  $(".single-service").on("mouseenter", function () {
    $(this).addClass("active").siblings().removeClass("active");
  });

  // Mouse Custom Cursor
  // function itCursor() {
  //   var myCursor = jQuery(".mouseCursor");
  //   if (myCursor.length) {
  //     if ($("body")) {
  //       const e = document.querySelector(".cursor-inner"),
  //         t = document.querySelector(".cursor-outer");
  //       let n,
  //         i = 0,
  //         o = !1;
  //       (window.onmousemove = function (s) {
  //         o ||
  //           (t.style.transform =
  //             "translate(" + s.clientX + "px, " + s.clientY + "px)"),
  //           (e.style.transform =
  //             "translate(" + s.clientX + "px, " + s.clientY + "px)"),
  //           (n = s.clientY),
  //           (i = s.clientX);
  //       }),
  //         $("body").on("mouseenter", "button, a, .cursor-pointer", function () {
  //           e.classList.add("cursor-hover"), t.classList.add("cursor-hover");
  //         }),
  //         $("body").on("mouseleave", "button, a, .cursor-pointer", function () {
  //           ($(this).is("a", "button") &&
  //             $(this).closest(".cursor-pointer").length) ||
  //             (e.classList.remove("cursor-hover"),
  //             t.classList.remove("cursor-hover"));
  //         }),
  //         (e.style.visibility = "visible"),
  //         (t.style.visibility = "visible");
  //     }
  //   }
  // }
  // itCursor();

  // $(".slider-drag").on("mouseenter", function () {
  //   $(".mouseCursor").addClass("cursor-big");
  // });
  // $(".slider-drag").on("mouseleave", function () {
  //   $(".mouseCursor").removeClass("cursor-big");
  // });

  // Active Odometer Counter
  jQuery(".odometer").appear(function (e) {
    var odo = jQuery(".odometer");
    odo.each(function () {
      var countNumber = jQuery(this).attr("data-count");
      jQuery(this).html(countNumber);
    });
  });

  // magnificPopup js
  /* magnificPopup img view */
  $(".popup-image").magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
    },
  });

  /* magnificPopup video view */
  $(".popup-video").magnificPopup({
    type: "iframe",
  });

  // Date Picker
  $(document).ready(function () {
    $(function () {
      $(".bd-date-picker").datepicker();
    });
  });

  // Masonry Js
  $(".grid").imagesLoaded(function () {
    // init Isotope
    var $grid = $(".grid").isotope({
      itemSelector: ".grid-item",
      percentPosition: true,
      masonry: {
        // use outer width of grid-sizer for columnWidth
        columnWidth: ".grid-item",
      },
    });

    // filter items on button click
    $(".bf-filter-btn").on("click", "button", function () {
      var filterValue = $(this).attr("data-filter");
      $grid.isotope({ filter: filterValue });
    });

    //for menu active class
    $(".bf-filter-btn button").on("click", function (event) {
      $(this).siblings(".active").removeClass("active");
      $(this).addClass("active");
      event.preventDefault();
    });
  });
  // wow js
  new WOW().init();

  // Hero-3 Animation
  const radio_buttons = document.querySelector("#video_check");
  const video_start = document.querySelector(".hero__area");

  if (radio_buttons) {
    radio_buttons.addEventListener("click", function () {
      let video = document.querySelector(".video-title");
      let videoClose = document.querySelector(".video-title.close-video-title");
      if (radio_buttons.checked) {
        document.querySelector(".hero__video-wrapper").style.zIndex = "1";
        video.style.display = "none";
        videoClose.style.display = "block";
        video_start.classList.add("start-video");
        document.querySelector(".header__main").classList.add("bg-white");
      } else {
        document.querySelector(".hero__video-wrapper").style.zIndex = "999";
        video.style.display = "block";
        videoClose.style.display = "none";
        video_start.classList.remove("start-video");
        document.querySelector(".header__main").classList.remove("bg-white");
      }
    });
  }

  $(".add_class").on("click", function () {
    $(this).toggleClass("add_remove_class");
  });

  // hero__slider
  let hero__slider = new Swiper(".hero__slider", {
    loop: true,
    freemode: true,
    slidesPerView: 1,
    spaceBetween: 40,
    centeredSlides: false,
    autoplay: true,
    speed: 1500,
    navigation: {
      prevEl: ".hero__slider-button-prev",
      nextEl: ".hero__slider-button-next",
    },
    pagination: {
      el: ".hero-slider-pagination",
      clickable: true,
    },
  });

  // services slider
  let servicesSlider = new Swiper(".services__slider", {
    loop: false,
    freemode: true,
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: false,
    speed: 1000,
    navigation: {
      nextEl: ".services__slider-button-next",
      prevEl: ".services__slider-button-prev",
    },
    pagination: {
      el: ".services__slider-pagination",
      clickable: true,
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
      },
      540: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      },
      1400: {
        slidesPerView: 3,
      },
    },
  });

  // services slider
  let servicesSlider3 = new Swiper(".services__slider3", {
    loop: false,
    freemode: true,
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: false,
    speed: 1000,
    navigation: {
      nextEl: ".portfolio__slider-button-next",
      prevEl: ".portfolio__slider-button-prev",
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
      },
      540: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      },
      1400: {
        slidesPerView: 3,
      },
    },
  });

  // portfolio slider
  let portfolioSlider = new Swiper(".portfolio__slider", {
    loop: false,
    freemode: true,
    slidesPerView: 1,
    spaceBetween: 20,
    centeredSlides: false,
    speed: 1000,
    navigation: {
      prevEl: ".portfolio__slider-button-prev",
      nextEl: ".portfolio__slider-button-next",
    },
    pagination: {
      el: ".portfolio__pagination",
      clickable: true,
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
      },
      540: {
        slidesPerView: 1,
      },
      600: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 3,
      },
      1400: {
        slidesPerView: 4,
      },
    },
  });

  let portfolio2Slider = new Swiper(".portfolio2__slider", {
    loop: false,
    freemode: true,
    slidesPerView: 1,
    spaceBetween: 20,
    centeredSlides: false,
    speed: 1000,
    navigation: {
      prevEl: ".portfolio2__slider-button-prev",
      nextEl: ".portfolio2__slider-button-next",
    },
    pagination: {
      el: ".portfolio2__slider-pagination",
      clickable: true,
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
      },
      540: {
        slidesPerView: 1,
      },
      600: {
        slidesPerView: 1,
      },
      992: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 2,
      },
      1400: {
        slidesPerView: 2,
      },
    },
  });

  // testimonial slider
  let testimonialSlider = new Swiper(".testimonial__slider", {
    loop: false,
    freemode: true,
    slidesPerView: 1,
    spaceBetween: 20,
    centeredSlides: false,
    speed: 1000,
    navigation: {
      prevEl: ".testimonial__slider-button-prev",
      nextEl: ".testimonial__slider-button-next",
    },
    pagination: {
      el: ".testimonial__slider-pagination",
      clickable: true,
    },
  });

  let testimonial2Slider = new Swiper(".testimonial2__slider", {
    loop: false,
    freemode: true,
    slidesPerView: 1,
    spaceBetween: 20,
    centeredSlides: false,
    speed: 1000,
    navigation: {
      prevEl: ".testimonial2__slider-button-prev",
      nextEl: ".testimonial2__slider-button-next",
    },
  });

  let testimonial3Slider = new Swiper(".testimonial3__slider", {
    loop: false,
    freemode: true,
    slidesPerView: 1,
    spaceBetween: 60,
    centeredSlides: false,
    speed: 1000,
    navigation: {
      prevEl: ".testimonial3__slider-button-prev",
      nextEl: ".testimonial3__slider-button-next",
    },
    pagination: {
      el: ".testimonial3__slider-pagination",
      clickable: true,
    },
  });

  // team slider
  let teamSlider = new Swiper(".team__slider", {
    loop: false,
    freemode: true,
    slidesPerView: 1,
    spaceBetween: 40,
    centeredSlides: false,
    speed: 1000,
    navigation: {
      prevEl: ".member__slider-button-prev",
      nextEl: ".member__slider-button-next",
    },
    pagination: {
      el: ".team__slider-pagination",
      clickable: true,
    },

    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
      },
      540: {
        slidesPerView: 1,
      },
      600: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 3,
      },
      1400: {
        slidesPerView: 3,
      },
    },
  });

  // blog slider
  let blogSlider = new Swiper(".blog__slider", {
    loop: false,
    freemode: true,
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: false,
    speed: 1000,
    navigation: {
      prevEl: ".blog__slider-button-prev",
      nextEl: ".blog__slider-button-next",
    },
    pagination: {
      el: ".blog__slider-pagination",
      clickable: true,
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
      },
      540: {
        slidesPerView: 1,
      },
      600: {
        slidesPerView: 1,
      },
      992: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 2,
        spaceBetween: 60,
      },
      1400: {
        slidesPerView: 2,
        spaceBetween: 90,
      },
    },
  });

  let blogSlider__2 = new Swiper(".blog3__slider", {
    loop: false,
    freemode: true,
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: false,
    speed: 1000,
    navigation: {
      nextEl: ".blog3__slider-button-next",
      prevEl: ".blog3__slider-button-prev",
    },
    pagination: {
      el: ".services__slider-pagination",
      clickable: true,
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
      },
      540: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      },
      1400: {
        slidesPerView: 3,
      },
    },
  });

  // brand slider
  let brandSlider = new Swiper(".brand__slider", {
    loop: false,
    freemode: true,
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: false,
    speed: 1000,
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
      },
      540: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 4,
      },
      1200: {
        slidesPerView: 5,
      },
      1400: {
        slidesPerView: 5,
      },
    },
  });

  // timeline js
  $(".loading-bar").slick({
    centerMode: true,
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    focusOnSelect: true,
    asNavFor: ".labels",
    centerPadding: "50px",
  });

  $(".labels").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    draggable: true,
    asNavFor: ".loading-bar",
    prevArrow: '<button><i class="icon-022-left"></i></button>',
    nextArrow: '<button><i class="icon-021-next"></i></button>',
    appendArrows: $(".timeline-slider-arrow"),
  });

  // category slider
  let categorySlider = new Swiper(".category__slider", {
    loop: false,
    freemode: true,
    slidesPerView: 4,
    slidesPerGroup: 2,
    spaceBetween: 30,
    centeredSlides: false,
    speed: 1000,
    navigation: {
      prevEl: ".member__slider-button-prev",
      nextEl: ".member__slider-button-next",
    },
    pagination: {
      el: ".team__slider-pagination",
      clickable: true,
    },

    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 30,
        slidesPerGroup: 1,
      },
      450: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
      451: {
        slidesPerView: 2,
      },
      600: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
        slidesPerGroup: 3,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
      1400: {
        slidesPerView: 4,
      },
    },
  });

  // Product Slider Js
  var swiper = new Swiper(".system__slider", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 5,
    freeMode: true,
    watchSlidesProgress: true,
    allowTouchMove: true,
    allowSlideNext: true,
    allowSlidePrev: true,
    observer: true,
    observeParents: true,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
  });
  var swiper2 = new Swiper(".system__slider2", {
    loop: true,
    spaceBetween: 10,
    allowTouchMove: true,
    allowSlideNext: true,
    allowSlidePrev: true,
    observer: true,
    observeParents: true,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    navigation: {
      nextEl: ".product-details__button-next",
      prevEl: ".product-details__button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
  });

  // Masonry Js
  $(".grid").imagesLoaded(function () {
    // init Isotope
    var $grid = $(".grid").isotope({
      itemSelector: ".grid-item",
      percentPosition: true,
      masonry: {
        // use outer width of grid-sizer for columnWidth
        columnWidth: ".grid-item",
      },
    });

    // filter items on button click
    $(".bf-filter-btn").on("click", "button", function () {
      var filterValue = $(this).attr("data-filter");
      $grid.isotope({ filter: filterValue });
    });

    //for menu active class
    $(".bf-filter-btn button").on("click", function (event) {
      $(this).siblings(".active").removeClass("active");
      $(this).addClass("active");
      event.preventDefault();
    });
  });

  //circle-progress
  $("#percentage").waypoint(
    function () {
      // circle-1
      $(".circle_counter").map(function (i, elem) {
        let count = Number($(this).data("count"))
          ? Number($(this).data("count"))
          : 0;

        $(elem)
          .circleProgress({
            value: count / 100,
            size: 131,
            thickness: 10,
            lineCap: "round",
            emptyFill: "#DFDFDF",
            fill: "#55AEFB",
          })
          .on("circle-animation-progress", function (event, progress) {
            $(this)
              .find(".counter_percentage")
              .html(Math.round(count * progress) + "<i>%</i>");
          });
      });
    },
    {
      offset: "bottom-in-view",
    }
  );

  // Product Slider Js
  var produc = new Swiper(".df-related-product-active", {
    slidesPerView: 4,
    spaceBetween: 30,
    slideToClickedSlide: true,
    loop: true,
    autoplay: true,
    autoplay: {
      delay: 3000,
    },
    pagination: {
      el: ".product-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return (
          '<span class="' +
          className +
          '">' +
          "<button>" +
          (index + 1) +
          "</button>" +
          "</span>"
        );
      },
    },
    navigation: {
      nextEl: ".product-button-next",
      prevEl: ".product-button-prev",
    },
    speed: 1000,
    breakpoints: {
      1400: {
        slidesPerView: 4,
      },
      1200: {
        slidesPerView: 4,
      },
      992: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 2,
      },
      480: {
        slidesPerView: 1,
      },
      0: {
        slidesPerView: 1,
      },
    },
  });

  //circle-progress
  $("#percentage").waypoint(
    function () {
      // circle-1
      $(".circle_counter").map(function (i, elem) {
        let count = Number($(this).data("count"))
          ? Number($(this).data("count"))
          : 0;

        $(elem)
          .circleProgress({
            value: count / 100,
            size: 131,
            thickness: 10,
            lineCap: "round",
            emptyFill: "#DFDFDF",
            fill: "#1765E5",
          })
          .on("circle-animation-progress", function (event, progress) {
            $(this)
              .find(".counter_percentage")
              .html(Math.round(count * progress) + "<i>%</i>");
          });
      });
    },
    {
      offset: "bottom-in-view",
    }
  );

  // Price Ragne js
  const rangeInput = document.querySelectorAll(".range-input input"),
    priceInput = document.querySelectorAll(".price-input input"),
    range = document.querySelector(".slider .progress");
  let priceGap = 1000;

  priceInput.forEach((input) => {
    input.addEventListener("input", (e) => {
      let minPrice = parseInt(priceInput[0].value),
        maxPrice = parseInt(priceInput[1].value);

      if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInput[1].max) {
        if (e.target.className === "input-min") {
          rangeInput[0].value = minPrice;
          range.style.left = (minPrice / rangeInput[0].max) * 100 + "%";
        } else {
          rangeInput[1].value = maxPrice;
          range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
        }
      }
    });
  });

  rangeInput.forEach((input) => {
    input.addEventListener("input", (e) => {
      let minVal = parseInt(rangeInput[0].value),
        maxVal = parseInt(rangeInput[1].value);

      if (maxVal - minVal < priceGap) {
        if (e.target.className === "range-min") {
          rangeInput[0].value = maxVal - priceGap;
        } else {
          rangeInput[1].value = minVal + priceGap;
        }
      } else {
        priceInput[0].value = minVal;
        priceInput[1].value = maxVal;
        range.style.left = (minVal / rangeInput[0].max) * 100 + "%";
        range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
      }
    });
  });

  // Cart Quantity Js
  $(".cart-minus").click(function () {
    var $input = $(this).parent().find("input");
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
  });

  $(".cart-plus").click(function () {
    var $input = $(this).parent().find("input");
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
  });

  //  Show Login Toggle Js
  $("#showlogin").on("click", function () {
    $("#checkout-login").slideToggle(900);
  });

  //  Show Coupon Toggle Js
  $("#showcoupon").on("click", function () {
    $("#checkout_coupon").slideToggle(900);
  });

  //  Create An Account Toggle Js
  $("#cbox").on("click", function () {
    $("#cbox_info").slideToggle(900);
  });

  //  Shipping Box Toggle Js
  $("#ship-box").on("click", function () {
    $("#ship-box-info").slideToggle(1000);
  });
})(jQuery);
