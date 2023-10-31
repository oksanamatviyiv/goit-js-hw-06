const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const pickerImages = document.querySelector('.gallery');
pickerImages.classList.add('js-galery');

const GaleryImage = images.map(({ url, alt } ) =>
   `<li class="galery-item">
      <a href="#">
        <img src="${url}" alt="${alt}">
      </a>
    </li>`).join('');
pickerImages.insertAdjacentHTML('beforeend', GaleryImage);  

const imgGalleryStyle = document.querySelector('.js-galery');

imgGalleryStyle.style.cssText = 'background-color: lightblue; display: flex; flex-wrap: wrap; gap: 15px; width: 2600px; list-style: none;';
console.log(imgGalleryStyle.style);


// 2)
// const pickerImages = document.querySelector('.gallery');
// pickerImages.classList.add('js-galery');

// const GaleryImage = (image) => {
//   const { url, alt } = image;
//   return `
//     <li class="galery-item">
//       <a href="#">
//         <img src="${url}" alt="${alt}">
//       </a>
//     </li>
//     `;
// };

// 3)
// const cardImages = images.map(GaleryImage);
// console.log(cardImages);

// pickerImages.insertAdjacentHTML('beforeend', cardImages.join(''));

// const imgGalleryStyle = document.querySelector('.js-galery');

// imgGalleryStyle.style.cssText = 'background-color: lightblue; display: flex; flex-wrap: wrap; gap: 15px; width: 2600px; list-style: none;';
// console.log(imgGalleryStyle.style);

// 4)
// const pickerImages = document.querySelector('.gallery');

// const GaleryImage = (image) => {
//     const GaleryImageEl = document.createElement('li');
    
//     const imgElement = document.createElement('img');
//     imgElement.src = image.url;
//     imgElement.alt = image.alt;
    
//     GaleryImageEl.appendChild(imgElement);
  
//     return GaleryImageEl;
//   };
//   pickerImages.append(...images.map(GaleryImage));

// const imgGalleryStyle = document.querySelector('ul');
// imgGalleryStyle.style.backgroundColor = 'lightblue';
// imgGalleryStyle.style.display = 'flex';
// imgGalleryStyle.style.flexWrap = 'wrap';
// imgGalleryStyle.style.gap = '15px';
// imgGalleryStyle.style.width = '2600px';
// imgGalleryStyle.style.listStyle = 'none';

// console.log(imgGalleryStyle.style);

