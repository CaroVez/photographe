// ########### BUTTONS ########### //
const all = document.querySelector('.all');
const wedding = document.querySelector('.wedding');
const pregnancy = document.querySelector('.pregnancy');
const baby = document.querySelector('.baby');
const family = document.querySelector('.family');
const baptism = document.querySelector('.baptism');
const couple = document.querySelector('.couple');
const portrait = document.querySelector('.portrait');

// ########### SORTING PHOTOS ########### //
function sortingPhotos(category) {
  const photos = document.querySelectorAll("img");
  for (let i = 1; i < photos.length; i++) {    
    if (photos[i].alt != category) {
      photos[i].hidden = true;
    } else {
      photos[i].hidden = false;
    }  
  }  
};

// ########### EVENT ON CLICK ########### //
// ########### ALL ########### //
all.addEventListener('click', () => {
  const photos = document.querySelectorAll("img");
  for (let i = 1; i < photos.length; i++) {    
    photos[i].hidden = false;
  }  
});

// ########### WEDDING ########### //
wedding.addEventListener('click', () => {
  sortingPhotos('wedding');
});

// ########### PREGNANCY ########### //
pregnancy.addEventListener('click', () => {
  sortingPhotos('pregnancy');
});

// ########### BABY ########### //
baby.addEventListener('click', () => {
  sortingPhotos('baby');
});

// ########### FAMILY ########### //
family.addEventListener('click', () => {
  sortingPhotos('family');
});

// ########### BAPTISM ########### //
baptism.addEventListener('click', () => {
  sortingPhotos('baptism');
});

// ########### COUPLE ########### //
couple.addEventListener('click', () => {
  sortingPhotos('couple');
});

// ########### PORTRAIT ########### //
portrait.addEventListener('click', () => {
  sortingPhotos('portrait');
});
