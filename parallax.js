$(document).ready(function () {
  // $(window).scroll(function () {
  //   if ($(window).scrollTop == 910) {
  //     $("#bg1-3").addClass("animGo2");
  //   }
  // });

  redrawDotNav();

  $(window).bind("scroll", function (e) {
    parallaxScroll();
    redrawDotNav();
  });

  $("a.up").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      1000,
      function () {
        parallaxScroll();
      }
    );
    return false;
  });
  $("a.kakadu").click(function () {
    $("html, body").animate(
      {
        scrollTop: $("#kakadu").offset().top,
      },
      1000,
      function () {
        parallaxScroll(); 
      }
    );
    return false;
  });
  $("a.amazon").click(function () {
    $("html, body").animate(
      {
        scrollTop: $("#amazon").offset().top,
      },
      1000,
      function () {
        parallaxScroll(); 
      }
    );
    return false;
  });
  $("a.ara").click(function () {
    $("html, body").animate(
      {
        scrollTop: $("#ara").offset().top,
      },
      1000,
      function () {
        parallaxScroll();
      }
    );
    return false;
  });
  $("a.volnistie").click(function () {
    $("html, body").animate(
      {
        scrollTop: $("#volnistie").offset().top,
      },
      1000,
      function () {
        parallaxScroll();
      }
    );
    return false;
  });

  $("nav#primary a").hover(
    function () {
      $(this).prev("h1").show();
    },
    function () {
      $(this).prev("h1").hide();
    }
  );
});

function parallaxScroll() {
  var scrolled = $(window).scrollTop();
  $("#parallax-bg1").css("top", 0 - scrolled * 0.35 + "px");
  $("#parallax-bg2").css("top", 0 - scrolled * 0.9 + "px");
  $("#parallax-bg3").css("top", 0 - scrolled * 0.25 + "px");
  $("#parallax-bg4").css("top", 0 - scrolled * 0.8 + "px");
}

function redrawDotNav() {
  var section1Top = 0;
  var section2Top =
    $("#kakadu").offset().top -
    ($("#amazon").offset().top - $("#kakadu").offset().top) / 2;
  var section3Top =
    $("#amazon").offset().top -
    ($("#ara").offset().top - $("#amazon").offset().top) / 2;
  var section3Top =
    $("#ara").offset().top -
    ($("#volnistie").offset().top - $("#ara").offset().top) / 2;
  var section4Top =
    $("#volnistie").offset().top -
    ($(document).height() - $("#volnistie").offset().top) / 2;
  $("a").removeClass("active");
  if (
    $(document).scrollTop() >= section1Top &&
    $(document).scrollTop() < section2Top
  ) {
    $("a.up").addClass("active");
  } else if (
    $(document).scrollTop() >= section2Top &&
    $(document).scrollTop() < section3Top
  ) {
    $("a.kakadu").addClass("active");
  } else if (
    $(document).scrollTop() >= section3Top &&
    $(document).scrollTop() < section4Top
  ) {
    $("a.amazon").addClass("active");
  } else if ($(document).scrollTop() >= section4Top) {
    $("a.ara").addClass("active");
  } else if ($(document).scrollTop() >= section4Top) {
    $("a.volnistie").addClass("active");
  }
}
