const button = document.querySelector('.main-nav__toggle');
button.onclick = function () {
  document.querySelector('.main-nav__list').classList.toggle('main_nav-close');
  button.classList.toggle('checked');
};
