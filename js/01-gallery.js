import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const markup = galleryItems.map(({ preview, original, description }) => `<li class="gallery__item">
  <a class="gallery__link" href="${original}" rel="noreferrer noopener">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`).join('');

galleryContainer.insertAdjacentHTML('beforeend', markup)

galleryContainer.addEventListener('click', onClick)

function onClick(evt) {
    evt.preventDefault()
  
    if (evt.target.nodeName !== "IMG") {
        return;
    }
    console.log(evt.target.nodeName)
    const galleryItem = evt.target.dataset.source;
    console.log(galleryItem)

    const instance = basicLightbox.create(`
    <img src="${galleryItem}" width="800" height="600">
`);
    instance.show();
    galleryContainer.addEventListener('keydown', closeEscape);
    function closeEscape(evt) {
        if (evt.code === "Escape") {
            instance.close();
        }
    }
}

