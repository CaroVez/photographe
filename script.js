// ########### TAB WITH PHOTOS ########### //
const photos = ['wedding001.jpg', 'wedding002.jpg', 'pregnancy001.jpg', 'baby001.jpg', 'family001.jpg', 'baptism001.jpg', 'couple001.jpg', 'portrait001.jpg'];

// ########### DISPLAY ALL THE PHOTOS ########### //
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


// ########### FUNCTIONS ON CLICK ########### //
// ########### ALL ########### //
all.addEventListener('click', () => {
  // clear existing photos
  const existingPhotos = document.getElementById('photo-gallery');
  existingPhotos.innerHTML = "";

  photos.forEach(name => {
    const photoGallery = document.getElementById('photo-gallery');
    const img = document.createElement("img");
    img.className = `thumbnail`;
    img.src = `photos/${name}`;
    photoGallery.appendChild(img)
 });
});


// ########### WEDDING ########### //
wedding.addEventListener('click', () => {
  // clear existing photos
  const existingPhotos = document.getElementById('photo-gallery');
  existingPhotos.innerHTML = "";

  const sortingPhotos = (arr, requete) => {
    return arr.filter(el =>  el.toLowerCase().indexOf(requete.toLowerCase()) !== -1);
  }

  sortingPhotos(photos, 'wedding').forEach(name => {
    const photoGallery = document.getElementById('photo-gallery');
    const img = document.createElement("img");
    img.className = `thumbnail`;
    img.src = `photos/${name}`;
    photoGallery.appendChild(img);
  });
});


// ########### PREGNANCY ########### //
pregnancy.addEventListener('click', () => {
  // clear existing photos
  const existingPhotos = document.getElementById('photo-gallery');
  existingPhotos.innerHTML = "";

  const sortingPhotos = (arr, requete) => {
    return arr.filter(el =>  el.toLowerCase().indexOf(requete.toLowerCase()) !== -1);
  }

  sortingPhotos(photos, 'pregnancy').forEach(name => {
    const photoGallery = document.getElementById('photo-gallery');
    const img = document.createElement("img");
    img.className = `thumbnail`;
    img.src = `photos/${name}`;
    photoGallery.appendChild(img);
  });
});


// ########### BABY ########### //
baby.addEventListener('click', () => {
  // clear existing photos
  const existingPhotos = document.getElementById('photo-gallery');
  existingPhotos.innerHTML = "";

  const sortingPhotos = (arr, requete) => {
    return arr.filter(el =>  el.toLowerCase().indexOf(requete.toLowerCase()) !== -1);
  }

  sortingPhotos(photos, 'baby').forEach(name => {
    const photoGallery = document.getElementById('photo-gallery');
    const img = document.createElement("img");
    img.className = `thumbnail`;
    img.src = `photos/${name}`;
    photoGallery.appendChild(img);
  });
});


// ########### FAMILY ########### //
family.addEventListener('click', () => {
  // clear existing photos
  const existingPhotos = document.getElementById('photo-gallery');
  existingPhotos.innerHTML = "";

  const sortingPhotos = (arr, requete) => {
    return arr.filter(el =>  el.toLowerCase().indexOf(requete.toLowerCase()) !== -1);
  }

  sortingPhotos(photos, 'family').forEach(name => {
    const photoGallery = document.getElementById('photo-gallery');
    const img = document.createElement("img");
    img.className = `thumbnail`;
    img.src = `photos/${name}`;
    photoGallery.appendChild(img);
  });
});


// ########### BAPTISM ########### //
baptism.addEventListener('click', () => {
  // clear existing photos
  const existingPhotos = document.getElementById('photo-gallery');
  existingPhotos.innerHTML = "";

  const sortingPhotos = (arr, requete) => {
    return arr.filter(el =>  el.toLowerCase().indexOf(requete.toLowerCase()) !== -1);
  }

  sortingPhotos(photos, 'baptism').forEach(name => {
    const photoGallery = document.getElementById('photo-gallery');
    const img = document.createElement("img");
    img.className = `thumbnail`;
    img.src = `photos/${name}`;
    photoGallery.appendChild(img);
  });
});


// ########### COUPLE ########### //
couple.addEventListener('click', () => {
  // clear existing photos
  const existingPhotos = document.getElementById('photo-gallery');
  existingPhotos.innerHTML = "";

  const sortingPhotos = (arr, requete) => {
    return arr.filter(el =>  el.toLowerCase().indexOf(requete.toLowerCase()) !== -1);
  }

  sortingPhotos(photos, 'couple').forEach(name => {
    const photoGallery = document.getElementById('photo-gallery');
    const img = document.createElement("img");
    img.className = `thumbnail`;
    img.src = `photos/${name}`;
    photoGallery.appendChild(img);
  });
});


// ########### PORTRAIT ########### //
portrait.addEventListener('click', () => {
  // clear existing photos
  const existingPhotos = document.getElementById('photo-gallery');
  existingPhotos.innerHTML = "";

  const sortingPhotos = (arr, requete) => {
    return arr.filter(el =>  el.toLowerCase().indexOf(requete.toLowerCase()) !== -1);
  }

  sortingPhotos(photos, 'portrait').forEach(name => {
    const photoGallery = document.getElementById('photo-gallery');
    const img = document.createElement("img");
    img.className = `thumbnail`;
    img.src = `photos/${name}`;
    photoGallery.appendChild(img);
  });
});
