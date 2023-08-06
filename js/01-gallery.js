import { galleryItems } from './gallery-items.js';
// Change code below this line

const container = document.querySelector(".gallery");
function createMarkup(arr) {
      return arr.map(({preview, original, description}) => `
      <li class="gallery-item"><a class="gallery-link" href="${original}">
      <img class="gallery-image" src="${preview}" alt="${description}" 
      data-source="${original}" width = 370 height= 240></a></li>
      `).join('')
};
container.insertAdjacentHTML("beforeend", createMarkup(galleryItems));
container.addEventListener("click", handlerClick);

function handlerClick(evt) {
  evt.preventDefault()
  if(evt.target === evt.currentTarget){
    return
  }

const modalImage = evt.target.dataset.source;

  const instance = basicLightbox.create(`
  <div class=""><img src="${modalImage}" alt=""></div>`);
instance.show();

const modalClose = (eventEsc,) => {
  if(eventEsc.key === "Escape"){
    instance.close();

    document.removeEventListener("keydown", modalClose);
  }
}
document.addEventListener("keydown", modalClose);
};


















   