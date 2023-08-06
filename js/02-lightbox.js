import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
const container = document.querySelector(".gallery");
function createMarkup(arr) {
  return arr.map(({ preview, original, description }) => `
      <li class="gallery__item">
  <a class="gallery__link" href="${original}">
     <img class="gallery__image" src="${preview}" 
     alt="${description}" /></a></li>`
    ).join("");
};
container.insertAdjacentHTML("beforeend", createMarkup(galleryItems));

    const instance = new SimpleLightbox(".gallery a", {
        captionsData: "alt",
        captionsDelay: 250,
    }
    );
    



