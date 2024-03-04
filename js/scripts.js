


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
  //show popup join
  $(document).ready(function () {
    $(".header-icons__link").click(function () {
      $("body").addClass('active');
      $(".popup").addClass('active');
      $(".popup-authorization").show();
    });

    //close popup join
    $(".popup-authorization__close-form").click(function () {
      $("body").removeClass('active');
      $(".popup").removeClass('active');
      $(".popup-authorization").hide();
    });
  });

  //show popup reg
  $(document).ready(function () {
    $(".cards-inner__buttonSecond").click(function () {
      $("body").addClass('active');
      $(".popup").addClass('active');
      $(".popup-registration").show();
    });

    //close popup reg
    $(".popup-registration__close-form").click(function () {
      $("body").removeClass('active');
      $(".popup").removeClass('active');
      $(".popup-registration").hide();
    });
  });
  //show popup forgot-password
  $(document).ready(function () {
    $(".popup-forgot-password__btn").click(function () {
      $("body").addClass('active');
      $(".popup").addClass('active');
      $(".popup-authorization").hide();
      $(".popup-forgot-password").show();
    });
  });
  //close popup frgtpass and show popup auth
  $(document).ready(function () {
    $(".popup-forgot-password__back-form").click(function () {
      $("body").addClass('active');
      $(".popup").addClass('active');
      $(".popup-forgot-password").hide();
      $(".popup-authorization").show();
    });
  });

  //закрытие попапа забыл пароль и открытие попапа вход
  $(document).ready(function () {
    $(".popup-forgot-password__close-form").click(function () {
      $("body").addClass('active');
      $(".popup").addClass('active');
      $(".popup-forgot-password").hide();
      $(".popup-authorization").show();
    });
  });
  //show popup new-password
  $(document).ready(function () {
    $(".popup-reg-new-password__btn").click(function () {
      $("body").addClass('active');
      $(".popup").addClass('active');
      $(".popup-reg-new-password").show();
    });
  });
  //закрытие попапа новый пароль, открытие попапа восстановить пароль
  $(document).ready(function () {
    $(".popup-reg-new-password__close-form").click(function () {
      $("body").addClass('active');
      $(".popup").addClass('active');
      $(".popup-reg-new-password").hide();
      $(".popup-forgot-password").hide();
    });
  });
   //открытие попапа регистрация при нажатии на кнопку зарегистрироваться в попапе вход
   $(document).ready(function () {
    $(".popup-authorization__registration").click(function () {
      $(".popup-authorization").hide();
      $(".popup-registration").show();
    });
  });


});



