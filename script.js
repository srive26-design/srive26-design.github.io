// script.js (jQuery)

$(function () {
  // Footer year (works on both pages)
  $("#year").text(new Date().getFullYear());

  // Random fact generator
  const factList = [
    "I'm insanely good at Mario Kart",
    "I can solve a Rubik's Cube in a minute",
    "I used to play soccer",
    "I enjoy photography",
    "I love to ride my bike (and I named it)",
    "I'm an only child",
    "I have an all black cat",
    "I like to try to catch the Aurora near school",
    "I like break-dancing",
    "I can juggle (working up to 4 balls)",
    "My favorite food is lasagna",
    "My cat's name is Buddy",
    "Sometimes I write poetry",
    "I'm learning the drums",
    "I love going on runs or to the gym",
    "I've been to a silent disco",
    "I can skateboard",
    "I know ASL",
    "I play Ultimate Frisbee"
  ];

  // This delegated handler still works even if you move the button later
  $(document).on("click", "#myButton", function () {
    const randomIndex = Math.floor(Math.random() * factList.length);
    $("#fact").text(factList[randomIndex]);
  });

  // Optional: subtle parallax for hero background
  const $heroBg = $(".hero__bg");
  if ($heroBg.length) {
    $(window).on("scroll", function () {
      const y = window.scrollY || $(window).scrollTop();
      $heroBg.css("transform", `translateY(${y * 0.12}px) scale(1.05)`);
    });
  }
});
