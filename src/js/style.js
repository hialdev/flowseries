
//---------------------------- Carousel
//Community Brand
$('.box-community').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:false,
    autoplay:true,
    autoplayTimeout:1500,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:3
        },
        600:{
            items:4
        },
        1000:{
            items:5
        }
    }
})


//---------------------------- Component
//Nav Menu
var btnToggle = $('.btn-mobile');
var menu = $('ul.menu');
var menuClose = $('.btn-close');

btnToggle.click(function(){
    menu.addClass('slide-menu');
});
menuClose.click(function(){
    menu.removeClass('slide-menu');
});

//When scrolling add active class
$(function () {
    var header = $(".navbar");
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if (scroll >= 155) {
            header.addClass("active");
        } else {
            header.removeClass("active");
        }
    });
});