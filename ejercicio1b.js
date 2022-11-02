'use strict';
console.log('hilos');

const body = document.querySelector('.js_body');
let html = '';
html += `<button class="btn js_btn">1 botón</button>`;
body.innerHTML = html;

const btn = document.querySelector('.js_btn');

function handleMouseOver(event) {
  event.preventDefault();
  btn.innerHTML = '1 botóN';
}
function handleMouseOut(event) {
  event.preventDefault();
  btn.innerHTML = '1 botón';
}

btn.addEventListener('mouseover', handleMouseOver);
btn.addEventListener('mouseout', handleMouseOut);
