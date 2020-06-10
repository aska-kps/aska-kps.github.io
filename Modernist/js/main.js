const menuBtn = document.querySelector('.m-menu');
const menu = document.querySelector(".header__nav");

menuBtn.addEventListener('click', (e) => {
	menu.classList.toggle("active");
});