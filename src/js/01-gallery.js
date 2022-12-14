// Add imports above this line
import { galleryItems } from './gallery-items';

// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

console.log(galleryItems);

const gallery = document.querySelector(`.gallery`);
const item = [];

galleryItems.forEach(element => {
    const galleryLink = document.createElement(`a`);
    galleryLink.className = `gallert__link`;
    galleryLink.href = element.original;
    const galleryImage = document.createElement(`img`);
    galleryImage.className = 'gallery__image';
    galleryImage.src = element.preview;
    galleryImage.setAttribute('title', element.description);
    galleryImage.alt = element.description;

    galleryLink.append(galleryImage);
    item.push(galleryLink);
});
gallery.append(...item);

new SimpleLightbox('.gallery a', {
  captionDelay: 250,
});
