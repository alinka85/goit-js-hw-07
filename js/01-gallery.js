import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector('.gallery');

function createImgCard(galleryItems) {
    
    return galleryItems.map(({preview, original, description}) => {
    return `<div class="gallery__item">
   <a class="gallery__link" href="${original}">
   <img class = "gallery__image" 
   src="${preview}" 
   data-source="${original}"
   alt="${description}" width ="" heigth =""></a>
 </div>`;
   })
   .join('')
}

galleryRef.insertAdjacentHTML('beforeend', createImgCard(galleryItems));


function clickOnImg (evt) {
   evt.preventDefault();
   if (evt.target.nodeName !== "IMG") {
     return
   }

   const instance = basicLightbox.create(`
   <img src="${evt.target.dataset.source}"
   alt="${evt.target.alt}" width ="" heigth ="">
`)
instance.show();
galleryRef.addEventListener('keydown', (evt) => {
    if (evt.code === "Escape") {
         instance.close()
     }
  });
}

galleryRef.addEventListener('click',clickOnImg);

  
 console.log(galleryItems);
