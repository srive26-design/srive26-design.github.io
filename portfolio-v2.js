const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

const facts = [
  'I play ultimate frisbee.',
  'I can solve a Rubik’s Cube in about a minute.',
  'I enjoy photography.',
  'I can skateboard.',
  'I know ASL.',
  'I’m learning the drums.'
];

const factButton = document.getElementById('myButton');
const factOutput = document.getElementById('fact');
let currentFact = 0;

if (factButton && factOutput) {
  factButton.addEventListener('click', () => {
    let nextFact = currentFact;
    while (nextFact === currentFact && facts.length > 1) {
      nextFact = Math.floor(Math.random() * facts.length);
    }
    currentFact = nextFact;
    factOutput.textContent = facts[currentFact];
  });
}
