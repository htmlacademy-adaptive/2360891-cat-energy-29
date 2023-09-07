let navMain = document.querySelector('.main-nav');
let navToggle = document.querySelector('.main-header__toggle');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
    navToggle.classList.remove ('main-header__toggle--close');
    navToggle.classList.add ('main-header__toggle--open');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
    navToggle.classList.add ('main-header__toggle--close');
    navToggle.classList.remove ('main-header__toggle--open');
  }
});

console.log('ghbdtn')

window.addEventListener('resize', () => {
  const width = window.innerWidth;
  if (width >= 768) {
    navMain.classList.remove('main-nav--closed');
  }
})
