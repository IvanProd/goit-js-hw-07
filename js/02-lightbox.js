import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const divGallery = document.querySelector('.gallery');



const createGalleryItem = (element) => {
    return element.map(item => {
        return `<a class="gallery__item" href="${item.original}">
        <img class="gallery__image" src="${item.preview}" alt="${item.description}" title="${item.description}"/>
      </a>`
    });
};

function makeGallery(massive){
    return divGallery.insertAdjacentHTML('afterbegin', createGalleryItem(massive).join('')
    );
};

makeGallery(galleryItems);

divGallery.addEventListener('click', clickingOnTheImage);

function clickingOnTheImage(event){

  if(event.target.nodeName !== "IMG"){
    return;
  };
    event.preventDefault();
};
let lightbox = new SimpleLightbox('.gallery__item', { captionDelay: 250, showCounter: true});