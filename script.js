// Small enhancements; all portfolio content is available without JavaScript.
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
const menu = document.querySelector('.menu-toggle');
const navLinks = document.getElementById('nav-links');
if (menu && navLinks) {
  document.documentElement.classList.add('js');
  const closeMenu = () => { menu.setAttribute('aria-expanded', 'false'); navLinks.classList.remove('is-open'); };
  menu.addEventListener('click', () => {
    const open = menu.getAttribute('aria-expanded') !== 'true';
    menu.setAttribute('aria-expanded', String(open));
    navLinks.classList.toggle('is-open', open);
  });
  navLinks.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') { closeMenu(); menu.focus(); } });
}
const filters = document.querySelector('.filters');
if (filters) {
  filters.hidden = false;
  const cards = [...document.querySelectorAll('[data-category]')];
  filters.addEventListener('click', event => {
    const button = event.target.closest('[data-filter]');
    if (!button) return;
    filters.querySelectorAll('button').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    cards.forEach(card => { card.hidden = button.dataset.filter !== 'all' && card.dataset.category !== button.dataset.filter; });
    const count = cards.filter(card => !card.hidden).length;
    document.getElementById('filter-status').textContent = `${count} project${count === 1 ? '' : 's'} shown`;
  });
}
const factButton = document.getElementById('myButton');
const facts = ['I play ultimate frisbee.', 'I can solve a Rubik’s Cube in a minute.', 'I enjoy photography.', 'I can skateboard.', 'I know ASL.', 'I’m learning the drums.'];
let factIndex = 0;
if (factButton) factButton.addEventListener('click', () => {
  factIndex = (factIndex + 1) % facts.length;
  document.getElementById('fact').textContent = facts[factIndex];
});
