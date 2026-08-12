document.addEventListener('DOMContentLoaded', function() {
  console.log('Blog loaded');
  const menuToggle = document.getElementById('menu-toggle');
  const siteNav = document.getElementById('site-nav') || document.querySelector('.site-nav');
  if (menuToggle && siteNav) {
    menuToggle.addEventListener('click', () => {
      siteNav.classList.toggle('open');
    });
  }
});