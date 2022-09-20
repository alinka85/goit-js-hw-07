import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryRef = document.querySelector('.gallery');

function createImgCard(galleryItems) {
    return galleryItems.map(({preview, original, description}) => {
    return `<li><a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" 
    alt="${description}" />
     </a></li>`;
   })
   .join('')
}

galleryRef.insertAdjacentHTML('beforeend', createImgCard(galleryItems));

   const lightbox = new SimpleLightbox('.gallery a', { 
    captionsData:'alt',
    captionDelay: 250,
  
    });


console.log(galleryItems);
