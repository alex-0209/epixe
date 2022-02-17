const nav = document.querySelector('#nav');
const menuBurger = document.querySelector('#nav__bar');
const menuCross = document.querySelector('#nav__cross');

function myNav() {
  if (nav.style.display === "block") {
    nav.style.display = "none";
  } else {
    nav.style.display = "block";
    menuBurger.style.display = 'none'
    menuCross.style.display = 'block'
  }
}

function myNavBack() {
  if(menuCross.style.display === 'block') {
    nav.style.display = 'none'
    menuBurger.style.display = 'block'
    menuCross.style.display = 'none'
  } else {
    nav.style.display = 'block'
    menuBurger.style.display = 'none'
  }
}

menuBurger.addEventListener('click', myNav);
menuCross.addEventListener('click', myNavBack);

