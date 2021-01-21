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

  // Выбор пользователя
  if (target.closest('.header__select')) {
    toggleHeaderDropdown();
  } else if (
    headerDropdown.classList.contains('active') &&
    !target.closest('.dropdown')
  ) {
    closeHeaderDropdown();
  }

  // Открытие боковой колонки
  if (target.closest('.header__burger')) {
    document.querySelector('.sidebar').classList.toggle('hide');
    document.querySelector('.main').classList.toggle('sidebar-hidden');
  }

  // Подменю боковой колонки
  if (target.closest('.sidebar__item')) {
    if (
      document.querySelector('.expanded') &&
      !target.closest('.sidebar__item').classList.contains('expanded')
    ) {
      document.querySelector('.expanded').classList.remove('expanded');
    }
    if (target.closest('.sidebar__link-hidden')) return;
    target.closest('.sidebar__item').classList.toggle('expanded');
  }

  // Фильтры (мобильная версия)
  if (target.closest('.filters__link')) {
    document.querySelector('.filters').classList.toggle('opened')
  }
});
