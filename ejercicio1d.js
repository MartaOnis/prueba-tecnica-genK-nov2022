'use strict';

const body = document.querySelector('.js_body');

for (let i = 0; i < 1000; i++) {
  let btns = document.createElement('button');
  btns.innerHTML = `${i + 1} botón`;
  btns.classList.add('js_btn');
  btns.id = `${i + 1}`;
  document.body.appendChild(btns);
}

function handleMouseOver(event) {
  console.log(event.currentTarget);
  event.preventDefault();
  event.currentTarget.innerHTML = `${event.currentTarget.id} botóN`;
}
function handleMouseOut(event) {
  event.preventDefault();
  event.currentTarget.innerHTML = `${event.currentTarget.id} botón`;
}

const buttons = document.querySelectorAll('.js_btn');

for (const eachbtn of buttons) {
  eachbtn.addEventListener('mouseover', handleMouseOver);
  eachbtn.addEventListener('mouseout', handleMouseOut);
}
