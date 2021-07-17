const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const listEl = document.querySelector('#ingredients')
ingredients.forEach(element => {
    const item = document.createElement('li')
    item.textContent = element;
    return listEl.appendChild(item);
  });


