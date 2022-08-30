// ########### CATEGORIES BUTTONS ########### //
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

// ########### CHANGING STYLE ON CATEGORIES NAMES ########### //
function changingStyle(category) {
  const buttons = document.querySelectorAll("button");
  for (let i = 0; i < buttons.length; i++) {    
    buttons[i].style.fontSize = "1rem";
  }  
  category.style.fontSize = "1.5rem"; 
}

// ########### EVENT ON CLICK ########### //
// ########### ALL ########### //
all.addEventListener('click', () => {
  changingStyle(all);
  const photos = document.querySelectorAll("img");
  for (let i = 1; i < photos.length; i++) {    
    photos[i].hidden = false;
  }  
});

// ########### WEDDING ########### //
wedding.addEventListener('click', () => {
  changingStyle(wedding);
  sortingPhotos('wedding');
});

// ########### PREGNANCY ########### //
pregnancy.addEventListener('click', () => {
  changingStyle(pregnancy);
  sortingPhotos('pregnancy');
});

// ########### BABY ########### //
baby.addEventListener('click', () => {
  changingStyle(baby);
  sortingPhotos('baby');
});

// ########### FAMILY ########### //
family.addEventListener('click', () => {
  changingStyle(family);
  sortingPhotos('family');
});

// ########### BAPTISM ########### //
baptism.addEventListener('click', () => {
  changingStyle(baptism);
  sortingPhotos('baptism');
});

// ########### COUPLE ########### //
couple.addEventListener('click', () => {
  changingStyle(couple);
  sortingPhotos('couple');
});

// ########### PORTRAIT ########### //
portrait.addEventListener('click', () => {
  changingStyle(portrait);
  sortingPhotos('portrait');
});

