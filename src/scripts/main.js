'use strict';

const ul = [...document.querySelectorAll('ul')];

for (const list of ul) {
  let title = list.previousSibling;

  const span = document.createElement('span');
  span.textContent = title.textContent.trim();
  title.replaceWith(span);
}

const headers = [...document.querySelectorAll('span')];

for (const header of headers) {
  let visible = true;

  header.addEventListener('click', () => {
    if (visible) {
      header.nextSibling.style.display = 'none';

      visible = false;
    } else {
      header.nextSibling.style.display = '';
      
      visible = true;
    }
  });
}
