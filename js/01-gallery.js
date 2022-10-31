import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(createGalleryItemsMarkUp (galleryItems));

function createGalleryItemsMarkUp (galleryItems) {
 const markUp = galleryItems.map(({preview, original, description}) => {
 return `
 <div class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img 
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"/>
      </a>
    </div>
 `;

 });
 return markUp.join('');
}





console.log(galleryItems);