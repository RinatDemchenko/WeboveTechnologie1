(function() {
  const menuIcon = document.getElementById('menu-icon');
  const navLinks = document.getElementById('nav-links');
  const logo = document.querySelector('.logo');

menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('open');
  navLinks.classList.toggle('active');
});

logo.addEventListener('click', (e) => {
  e.preventDefault();
  window.location.href = 'index.html';
});})();
