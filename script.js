
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


/* Fact generator*/

var factList = [
  "I'm insanely good at Mario Kart",/*0*/
  "I can solve a Rubik's cube in an okay amount of time",/*1*/
  "I used to play soccer",/*2*/
  "I'm a member of the LGBTQ+ community",/*3*/
  "I enjoy photography",/*4*/
  "I love to ride my bike; I even have a name for it",/*5*/
  "I'm an only child"]; /*6*/

var count = 0;

document.addEventListener('DOMContentLoaded', function() {
  var fact = document.getElementById("fact");
  var myButton = document.getElementById("myButton");
  
  console.log("Fact generator loaded - Button:", myButton, "Fact element:", fact);
  
  if (myButton && fact) {
    myButton.addEventListener("click", displayFact);
    console.log("Event listener added successfully");
  } else {
    console.error("Could not find button or fact element");
  }
});

function displayFact(){
  console.log("displayFact called, count:", count);
  var fact = document.getElementById("fact");
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length){
    count = 0;
  }
}