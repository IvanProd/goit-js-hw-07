const quantityCategoriesEl = document.querySelectorAll('.item').length;
console.log( `В списке ${quantityCategoriesEl} категории.`);

const showCategory = function (elements){
    for (const element of elements) {
        console.log(`Категория: ${element.querySelector(`h2`).textContent}.`)
        console.log(`Количество элементов: ${element.querySelectorAll(`li`).length}.`)
    }   
}

showCategory(document.querySelectorAll('.item'))