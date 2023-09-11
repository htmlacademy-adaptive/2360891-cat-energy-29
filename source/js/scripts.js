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

window.addEventListener('resize', () => {
  const width = window.innerWidth;
  if (width >= 768) {
    navMain.classList.remove('main-nav--closed');
    navToggle.classList.add ('main-header__toggle--close');
    navMain.classList.remove('main-nav--opened');
  }

  if (width < 768) {
    navMain.classList.add('main-nav--closed');
    if (navToggle.classList.contains('main-header__toggle--open')){
      navToggle.classList.remove ('main-header__toggle--open');
      navToggle.classList.add ('main-header__toggle--close');
    }

  }
})
