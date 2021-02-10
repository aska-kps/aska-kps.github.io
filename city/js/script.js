$(document).ready(function(){


    // header links
    $(".header__menu").on("click","a", function (event) {
        event.preventDefault(); 
        // headerIcon.removeClass('active');
        // mobileMenu.removeClass('active');
        var id  = $(this).attr('href'),
        top = $(id).offset().top;
        $('body').removeClass('lock');
        $('.header__menu').removeClass('active');
        $('body,html').animate({scrollTop: top}, 1500);
      });

      $('.header__icon').on('click',function(event){
        event.preventDefault();
        $(this).toggleClass('active');
        $('.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
      });


});
