'use strict';

const toggle = document.querySelectorAll('.toggle-action');
const body = document.body;

function headerToggle() {
  console.log('click');
  
  if (body.classList.contains('_menu-open')) {
    body.classList.remove('_menu-open');
  } else {
    body.classList.add('_menu-open');
  }
}

toggle.forEach((item) => {
  item.addEventListener('click', headerToggle);
});
