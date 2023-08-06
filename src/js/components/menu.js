const MENU_BURGER_EL_ID = 'menu-burger';
const MENU_EL_ID = 'menu';

export default class Menu {
  constructor (menuBurgerEltId = MENU_BURGER_EL_ID, menuElId = MENU_EL_ID) {
    this.menuBurger = document.getElementById(menuBurgerEltId);
    this.menu = document.getElementById(menuElId);

    this.menuBurger.addEventListener('click', (event) => {
      this.menuBurger.classList.toggle('open');
      this.menu.classList.toggle('open');
    });
  }
};
