// Responsive Nav
$('#hamburger').on('click', function() {
    $('.nav2 ul').toggle();
    $('.nav2').toggleClass('block');
});

// Nav toggle on scroll
$(window).on('scroll', function () {
	// Step 1: Google $(window).scrollTop();
	// Find out how far they've scrolled
	var distanceScrolled = $(window).scrollTop();

	console.log('The distance scrolled is: ' + distanceScrolled);

  var w = window.innerWidth;

  if (distanceScrolled < 30 && w > 930) {
    $('.main_nav').hide();
  } else if (distanceScrolled > 30 && w > 930) {
    $('.main_nav').fadeIn(350);
  }
});

// Image carousel
var currentImageNumber = 0;
var numberOfImages = $('img').length - 1;
console.log("There are " + numberOfImages + "images");
$('#next').on('click', function () {
   if (currentImageNumber < numberOfImages) {
     currentImageNumber += 1;
   } else {
     currentImageNumber = 0;
   }
   $('img').fadeOut(0);
   $('img').eq(currentImageNumber).fadeIn(0);
});

$('#previous').on('click', function () {
   if (currentImageNumber > 0) {
     currentImageNumber -= 1;
   } else {
     currentImageNumber = numberOfImages;
   }
   $('img').fadeOut(0);
   $('img').eq(currentImageNumber).fadeIn(0);
});
