import { galleryItems } from './gallery-items.js';
// Change code below this line

//console.log(galleryItems);

const divGallery = document.querySelector('.gallery');//отримали посилання на div галереї
//console.log(divGallery);


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
}

makeGallery(galleryItems);




