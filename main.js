AOS.init();
window.onscroll = function() {
    scrollFunction()
};
function scrollFunction() {
    var hei = $('.parameter').height() + 129;
    var nav = $('.navbar').height() + 9;
    if(hei>=130) {
        if (document.body.scrollTop > hei || document.documentElement.scrollTop > hei) {
            $('.navbar').addClass('sticky');
        }
        else {
            $('.navbar').removeClass('sticky');
            $('.parameter-s').css('height',0+'px');
        }
    }
    else {
        $('.parameter-s').css('height',nav+'px');
    }
}
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 1200,
        autoplayHoverPause: true,
    });
  });