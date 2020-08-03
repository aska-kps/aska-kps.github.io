
$(document).ready(function () {
    $('.slider_container').slick({
        infinity: true,
        arrows: true,
        prevArrow: $('.arrows__left'),
        nextArrow: $('.arrows__right'),
        autoplay: true,
        
    });
});

const body = document.querySelector('.body');
const menuOpen = document.querySelector('.menu-open');
const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const language = document.querySelector('.language');
const languageList = document.querySelector('.sub-language__list');

menuOpen.addEventListener('click', (event) => {
    event.preventDefault();
    mainMenu.classList.add('active');
    

    body.classList.add('lock');
});



closeMenu.addEventListener('click', (event) => {
    event.preventDefault();
    
    mainMenu.classList.remove('active');
    mainMenu.classList.add('animated');
    body.classList.remove('lock');
});

language.addEventListener('click', (event) => {
    event.preventDefault();

    languageList.classList.toggle('active');
});

function tab(n)
{
    if(n==1)
    {
        document.getElementById('tab1').style.display='block';
        document.getElementById('tab2').style.display='none';
        // document.getElementById('nav0').className='nav_selected';
        // document.getElementById('nav1').className='nav';
    }
    else
    {
        document.getElementById('tab2').style.display='block';
        document.getElementById('tab1').style.display='none';
        // document.getElementById('nav1').className='nav_selected';
        // document.getElementById('nav0').className='nav';
    }
}