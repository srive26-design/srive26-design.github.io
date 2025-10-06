
// Add an event listener to execute parallax_height function on document ready
$(document).ready(function() {
  parallax_height();
});

// Function to handle parallax effect and section height adjustments
function parallax_height() {
  var scroll_top = $(window).scrollTop();
  var sample_section_top = $(".sample-section").offset().top;
  var header_height = $(".sample-header-section").outerHeight();

  // Set margin-top of sample-section based on header height
  $(".sample-section").css({ "margin-top": header_height });

  // Adjust header height based on scroll position
  $(".sample-header").css({ height: header_height - scroll_top });
}

// Event listener for scroll events to trigger parallax_height function
$(window).scroll(function() {
  parallax_height();
});

// Event listener for resize events to trigger parallax_height function
$(window).resize(function() {
  parallax_height();
});


// Simple random fact generator
document.addEventListener('DOMContentLoaded', function() {
  var factList = [
    "I'm insanely good at Mario Kart",
    "I can solve a Rubik's Cube in a minute",
    "I used to play soccer",
    "I enjoy photography",
    "I love to ride my bike; I even have a name for it",
    "I'm an only child",
    "I have an all black cat",
    "I like to try and catch the Aurora up by school",
    "I like break-dancing",
    "I like to juggle, working on juggling up to 4 balls",
    "My favorite food is Lasagna",
    "My cat's name is Buddy",
    "Sometimes I write poetry",
    "I'm learning the drums",
    "I love going on runs or to the gym",
    "I've been to a silent disco",
    "I can skateboard",
    "I know ASL",
    "I play Ultimate Frisbee"
      ];

  var fact = document.getElementById("fact");
  var myButton = document.getElementById("myButton");

  if (myButton && fact) {
    myButton.addEventListener("click", function() {
      var randomIndex = Math.floor(Math.random() * factList.length);
      fact.innerHTML = factList[randomIndex];
    });
  }
});
