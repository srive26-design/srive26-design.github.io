
document.addEventListener("DOMContentLoaded", () => {
  // Footer year
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

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

  const fact = document.getElementById("fact");
  const myButton = document.getElementById("myButton");

  if (myButton && fact) {
    myButton.addEventListener("click", () => {
      const randomIndex = Math.floor(Math.random() * factList.length);
      fact.textContent = factList[randomIndex];
    });
  }

  // Subtle parallax for hero background (optional, safe)
  const heroBg = document.querySelector(".hero__bg");
  if (heroBg) {
    window.addEventListener("scroll", () => {
      const y = window.scrollY;
      heroBg.style.transform = `translateY(${y * 0.12}px) scale(1.05)`;
    }, { passive: true });
  }
});
