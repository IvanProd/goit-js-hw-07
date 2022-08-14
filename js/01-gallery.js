import { galleryItems } from './gallery-items.js';
// Change code below this line


const divGallery = document.querySelector('.gallery');



const createGalleryItem = (element) => {
    return element.map(item => {
        return `<div class="gallery__item">
        <a class="gallery__link" href="${item.original}">
          <img
            class="gallery__image"
            src="${item.preview}"
            data-source="${item.original}"
            alt="${item.description}"
          />
        </a>
      </div>`
    });
};

function makeGallery(massive){
    const imageEl = createGalleryItem(massive);
    return divGallery.insertAdjacentHTML('afterbegin', imageEl.join('')
    );
};

makeGallery(galleryItems);

divGallery.addEventListener('click', clickingOnTheImage);

function clickingOnTheImage(event){

  if(event.target.nodeName !== "IMG"){
    return;
  };
    event.preventDefault();
   // console.log(event.target);
    //const originalImage = document.querySelector('img');
    //console.log(event.target.dataset.source);
    

const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`)

instance.show()
};

//зробити реагуваня на кнопку якщо встигну

