function initCarousel() {

  $('.reviews-carousel').slick({
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-arrow slick-prev"><svg width="14" height="26" viewBox="0 0 14 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.6663 1.66797L1.33301 13.0013L12.6663 24.3346" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
    nextArrow: '<button type="button" class="slick-arrow slick-next"><svg width="14" height="26" viewBox="0 0 14 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.33366 24.332L12.667 12.9987L1.33366 1.66537" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>'

  });


}
function initSubmenu() {
  $('.have-submenu').on('click', function() {
    $(this).toggleClass('active').siblings().removeClass('active');
    $(this).siblings('.submenu').slideToggle().find('.submenu').slideUp();
    return false
  })
}
function mobileMenu() {
  $('.burger').on('click', function() {
    $(this).toggleClass('active');
    $('.header').toggleClass('open');
    $('body').toggleClass('js-noscroll');
  });

}
function phoneMask() {
  $('#phone').mask('+380 (99) 999-99-99');
};
function mobileCarousel() {
  if ($(window).width() >= 769) {
    $('.reasons-list.slick-slider').slick('unslick');
  }
  if ($(window).width() <= 768) {
    $('.reasons-list').not('.slick-slider').slick({
      arrows: true,
      infinite: false,
      slidesToShow: 1,
      dots: true,
      prevArrow: '<button type="button" class="slick-arrow slick-prev"><svg width="14" height="26" viewBox="0 0 14 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.6663 1.66797L1.33301 13.0013L12.6663 24.3346" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
      nextArrow: '<button type="button" class="slick-arrow slick-next"><svg width="14" height="26" viewBox="0 0 14 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.33366 24.332L12.667 12.9987L1.33366 1.66537" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>'

    });

  };
}
function scrollForm() {
   $('.header-right .btn-purple').on('click', function(e) {
     $('html, body').animate({
       scrollTop: $($(this).attr('href')).offset().top - 50
     }, {
       duration: 2000,
    easing: 'swing',
     });
    e.preventDefault()
   })
}

$(document).ready(function () {
  phoneMask();
  mobileMenu();
  initCarousel();
  mobileCarousel();
  initSubmenu();
  scrollForm();
});

$(window).resize(function() {
  initCarousel();
  mobileCarousel();
})




