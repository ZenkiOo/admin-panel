'use strict';

const headerDropdown = document.querySelector('.dropdown');

function toggleHeaderDropdown() {
  headerDropdown.classList.toggle('active');
}

function closeHeaderDropdown() {
  headerDropdown.classList.remove('active');
}

document.addEventListener('click', (e) => {
  e.preventDefault();
  const target = e.target;

  if (
    target.classList.contains('header__select') ||
    target.closest('.header__select')
  ) {
    toggleHeaderDropdown();
  } else if (
    headerDropdown.classList.contains('active') &&
    !target.closest('.dropdown')
  ) {
    closeHeaderDropdown();
  }
});
