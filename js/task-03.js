const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const mainList = document.querySelector('.gallery');



const makeMainItem = (images) => {
    const { url, alt } = images;
   return `<li class="js-gallery">
        <img
          src="${url}",
          alt="${alt}",
          width = 1200,
          heigth = 900,
        />
      </li>`;


};
const markup = images.map(makeMainItem).join("");
mainList.insertAdjacentHTML('beforeend', markup);
    
