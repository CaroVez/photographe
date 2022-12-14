// ########### HAMBURGER MENU ########### //
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll("menu-link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}));



// ########### DISABLE RIGHT CLICK ########### //
$(document).on('contextmenu', 'img', function() {
	return false;
});