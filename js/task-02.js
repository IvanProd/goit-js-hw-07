const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const listEl = document.querySelector('#ingredients')

const createLi = function(array){
  array.forEach(element => {
    const item = document.createElement('li')
    item.textContent = element;
    return listEl.appendChild(item);
  });
}
createLi(ingredients);


