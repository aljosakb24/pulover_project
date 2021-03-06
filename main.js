$('.reservation').on('click', function(event) {
	event.preventDefault();
	/* Act on the event */
	$('.modal').addClass('open');
});
$('.modal .close').on('click', function(event) {
	event.preventDefault();
	/* Act on the event */
	$('.modal').removeClass('open');
});
var safari   = navigator.userAgent.indexOf("Safari") > -1;
var chrome   = navigator.userAgent.indexOf('Chrome') > -1;
if ((chrome) && (safari)) {
safari = false;
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
}

  // store the slider in a local variable
  var $window = $(window),
      flexslider = { vars:{} };

  // tiny helper function to add breakpoints
  function getGridSize() {
    return (window.innerWidth < 480) ? 1 :
    (window.innerWidth < 768) ? 2 :
    (window.innerWidth < 992) ? 3 :
    (window.innerWidth < 1024) ? 3 :
    (window.innerWidth > 1366) ? 3 : 4;
  }

  $(function() {
    // SyntaxHighlighter.all();
  });

  $window.load(function() {
    $('.flexslider').flexslider({
      animation: "slide",
      animationLoop: false,
      itemWidth: 210,
      itemMargin: 4,
      minItems: getGridSize(), // use function to pull in initial value
      maxItems: getGridSize() // use function to pull in initial value
    });
  });

  // check grid size on resize event
  $window.resize(function() {
    var gridSize = getGridSize();

    flexslider.vars.minItems = gridSize;
    flexslider.vars.maxItems = gridSize;
  });

/* HAMBURGER MENU */
$('.menu-toggle').on("click", function() {
  $(this).toggleClass('open');
  $('nav ul').toggleClass('opening');
  $('.nav').toggleClass('navigation-menu');
  if ($("nav").hasClass("navigation-menu")) {
    $('body').addClass('disable-scroll')
  } else {
    $('body').removeClass('disable-scroll')
  }
});

$('ul li a').on("click", function() {
  $('.nav').removeClass('navigation-menu')
  $('.menu-toggle').removeClass('open');
  $('nav ul').removeClass('opening');
  $('body').removeClass('disable-scroll')
});