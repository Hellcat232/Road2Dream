(() => {
  const menu = document.querySelector('.header-menu-mob');
  const backdrop = document.querySelector('.backdrop');
  const menuLinks = document.querySelector('.unlock-menu');
  const navLogo = document.querySelector('.menu-close-btn');

  // Display Mobile Menu
  const mobileMenu = () => {
    menu.classList.toggle('is-open');
    backdrop.classList.toggle('is-open');
  };

  menuLinks.addEventListener('click', mobileMenu);
  navLogo.addEventListener('click', mobileMenu);
})();
