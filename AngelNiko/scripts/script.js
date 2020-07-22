
const burgerBtn = document.querySelector('.header__icon');
const burgerMenu = document.querySelector('.header__down');



burgerBtn.addEventListener('click', (event) => {
    event.preventDefault();
    burgerBtn.classList.toggle('active');
    burgerMenu.classList.toggle('active');
    
});


(function() {
    'use strict';
  
    function trackScroll() {
      var scrolled = window.pageYOffset;
      var coords = document.documentElement.clientHeight;
  
      if (scrolled > coords) {
        goTopBtn.classList.add('active');
      }
      if (scrolled < coords) {
        goTopBtn.classList.remove('active');
      }
    }
  
    function backToTop() {
      if (window.pageYOffset > 0) {
        window.scrollBy(0, -80);
        setTimeout(backToTop, 0);
      }
    }
  
    var goTopBtn = document.querySelector('.goUp');
  
    window.addEventListener('scroll', trackScroll);
    goTopBtn.addEventListener('click', backToTop);
  })();





    

