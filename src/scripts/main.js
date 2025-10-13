'use strict';

const toggle = document.querySelector('.toggle-action');
const body = document.body;

function headerToggle() {
  if (body.classList.contains('_menu-open')) {
    body.classList.remove('_menu-open');
  } else {
    body.classList.add('_menu-open');
  }
}

toggle.addEventListener('click', headerToggle());
