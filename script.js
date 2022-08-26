// ########### TAB WITH PHOTOS ########### //
const photos = ['wedding001.jpg', 'wedding002.jpg', 'wedding003.jpg', 'wedding004.jpg', 'wedding005.jpg', 'pregnancy001.jpg', 'baby001.jpg',  'family001.jpg', 'baptism001.jpg', 'couple001.jpg', 'portrait001.jpg'];

// ########### DISPLAY ALL THE PHOTOS IN HTML ########### //
photos.forEach(name => {
   const photoGallery = document.getElementById('photo-gallery');
   const img = document.createElement("img");
   img.className = `thumbnail`;
   img.src = `photos/${name}`;
   photoGallery.appendChild(img)
});

// ########### BUTTONS ########### //
const all = document.querySelector('.all');
const wedding = document.querySelector('.wedding');
const pregnancy = document.querySelector('.pregnancy');
const baby = document.querySelector('.baby');
const family = document.querySelector('.family');
const baptism = document.querySelector('.baptism');
const couple = document.querySelector('.couple');
const portrait = document.querySelector('.portrait');

// ########### clear existing photos ########### //
function clearExistingPhotos() {
  const existingPhotos = document.getElementById('photo-gallery');
  existingPhotos.innerHTML = "";
}

// ########### sort the photos with a category ########### //
function sortingPhotos(category) {
  const filterPhotos = (arr, requete) => {
    return arr.filter(el =>  el.toLowerCase().indexOf(requete.toLowerCase()) !== -1);
  }
  filterPhotos(photos, category).forEach(name => {
    const photoGallery = document.getElementById('photo-gallery');
    const img = document.createElement("img");
    img.className = `thumbnail`;
    img.src = `photos/${name}`;
    photoGallery.appendChild(img);
  });
}

// ########### EVENT ON CLICK ########### //
// ########### ALL ########### //
all.addEventListener('click', () => {
  clearExistingPhotos();
  sortingPhotos('');
});

// ########### WEDDING ########### //
wedding.addEventListener('click', () => {
  clearExistingPhotos();
  sortingPhotos('wedding');
});

// ########### PREGNANCY ########### //
pregnancy.addEventListener('click', () => {
  clearExistingPhotos();
  sortingPhotos('pregnancy');
});

// ########### BABY ########### //
baby.addEventListener('click', () => {
  clearExistingPhotos();
  sortingPhotos('baby');
});

// ########### FAMILY ########### //
family.addEventListener('click', () => {
  clearExistingPhotos();
  sortingPhotos('family');
});

// ########### BAPTISM ########### //
baptism.addEventListener('click', () => {
  clearExistingPhotos();
  sortingPhotos('baptism');
});

// ########### COUPLE ########### //
couple.addEventListener('click', () => {
  clearExistingPhotos();
  sortingPhotos('couple');
});

// ########### PORTRAIT ########### //
portrait.addEventListener('click', () => {
  clearExistingPhotos();
  sortingPhotos('portrait');
});
