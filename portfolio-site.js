/* Shared, dependency-free interactions for all new portfolio pages. */
(() => {
  'use strict';

  // Keep the footer up to date automatically.
  document.querySelectorAll('[data-year]').forEach(el => {
    el.textContent = new Date().getFullYear();
  });

  // A collection of real, personal facts. Add or edit these freely.
  const facts = [
    'I play ultimate frisbee.',
    'I built my own PC after saving up and researching every part.',
    'My first guitar is still too big for me. I still have it.',
    'I used to compete in VEX Robotics, and I still love building robots.',
    'I have practiced capoeira — the armada martelo is my favorite kick.',
    'I built a K’nex Ferris wheel long before I started building circuits.',
    'I made a pair of wireless Flower Tokens as a handmade gift.',
    'I like photography, music, and projects that start with “what if…?”'
  ];
  const factButton = document.getElementById('myButton');
  const factText = document.getElementById('fact');
  const factCounter = document.getElementById('fact-counter');
  let lastFact = 0;
  let factNumber = 1;
  if (factButton && factText) {
    factButton.addEventListener('click', () => {
      if (facts.length < 2) return;
      let next;
      do { next = Math.floor(Math.random() * facts.length); }
      while (next === lastFact);
      lastFact = next;
      factNumber++;
      factText.textContent = facts[next];
      if (factCounter) factCounter.textContent = `Fun fact #${factNumber}`;
    });
  }

  // Work-page category filters. Cards remain visible when JS is disabled.
  const filterButtons = [...document.querySelectorAll('[data-filter]')];
  const projectCards = [...document.querySelectorAll('[data-category]')];
  if (filterButtons.length && projectCards.length) {
    const count = document.getElementById('filter-count');
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        const selected = button.dataset.filter;
        filterButtons.forEach(item => item.setAttribute('aria-pressed', String(item === button)));
        let visible = 0;
        projectCards.forEach(card => {
          const categories = (card.dataset.category || '').split(' ');
          const show = selected === 'all' || categories.includes(selected);
          card.hidden = !show;
          if (show) visible++;
        });
        if (count) count.textContent = `${visible} project${visible === 1 ? '' : 's'} shown`;
      });
    });
  }
})();
