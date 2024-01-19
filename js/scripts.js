
var swiperBannerMain = new Swiper(".slider-bannerMain", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

jQuery(document).ready(function () {
// табы
$('._js-tabs-title').on('click', function () {
    var tabAttr = $(this).attr('data-tab'),
      tabInfo = $('._js-tabs-info[data-tab= \'' + tabAttr + '\']');
    $(this).addClass('active').siblings().removeClass('active');
    tabInfo.addClass('active').siblings().removeClass('active');
  });
// мобильное меню
$('.menu-humb').on('click', function () {
  $(this).toggleClass('active');
  $('.menu-mob').toggleClass('active');
  $('.header__wrap').toggleClass('menu_active');
  $('.header-icons__wrap').toggleClass('icons-hidden')
});
 // второе мобильное меню (правое)
$('.profile-info__more').on('click', function () {
 /*  $(this).toggleClass('active'); */
  $('.evens-menu-mob').addClass('active');
  /* $('.header__wrap').toggleClass('menu_active');
  $('.header-icons__wrap').toggleClass('icons-hidden') */
});
$('.right-menu__close').on('click', function () {
  $('.evens-menu-mob').removeClass('active');
});
$(document).on('click', function (e) {
if (!$(e.target).closest(".right-menu__close, .evens-menu-mob, .profile-info__more").length) {
  $('.evens-menu-mob').removeClass('active');
}
e.stopPropagation();
});
});



