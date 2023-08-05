// скрипт для открытия навигации

let buttonNav = document.querySelector('.main-nav__toggle');
let nav = document.querySelector('.main-nav__list');
let disableJsFlex = document.querySelector('.no-js-flex');
let disableJsNavButton = document.querySelector('.no-js-nav-button');
let disableJsNav = document.querySelector('.no-js-nav');
setTimeout(nav.classList.add('main-nav__list--tablet', 5000));

disableJsFlex.classList.remove('no-js-flex');
disableJsNavButton.classList.remove('no-js-nav-button');
disableJsNav.classList.remove('no-js-nav');

buttonNav.onclick = function () {
  nav.classList.toggle('opened-flex');
  buttonNav.classList.toggle('main-nav__toggle--opened');
};
