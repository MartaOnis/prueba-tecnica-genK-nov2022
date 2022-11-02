'use strict';

const body = document.querySelector('.js_body');

for (let i = 0; i < 1000; i++) {
  let btns = document.createElement('button');
  btns.innerHTML = `${i + 1} botón`;
  document.body.appendChild(btns);
}
