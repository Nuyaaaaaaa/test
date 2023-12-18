
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
});


