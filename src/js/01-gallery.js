import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const imagesList = document.querySelector('.gallery');

const imagesMarkup = createImagesMarkup(galleryItems);

imagesList.innerHTML = imagesMarkup;

function createImagesMarkup(images) {
  return images
    .map(
      image => `
<li class="gallery__item">
   <a class="gallery__link" href="${image.original}">
      <img class="gallery__image" src="${image.preview}" alt="${image.description}" />
   </a>
</li>`
    )
    .join('');
}

new SimpleLightbox('.gallery__link', {
  captionsData: 'alt',
  captionDelay: '250',
});
