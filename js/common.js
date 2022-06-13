//js-slideLeft 左から出てくる

$(function () {
  $(window).scroll(function () {
    $('.js-slideLeft').each(function () {
      let scroll = $(window).scrollTop();
      let triTop = $(this).offset().top + 100;
      let winHeight = $(window).height();
      if (scroll >= triTop - winHeight) {
        $(this).addClass('fadeLeft');
      } else {
        $(this).removeClass('fadeLeft');
      }
    });
  });
});

//js-slideRight 右から出てくる

$(function () {
  $(window).scroll(function () {
    $('.js-slideRight').each(function () {
      let scroll = $(window).scrollTop();
      let triTop = $(this).offset().top + 100;
      let winHeight = $(window).height();
      if (scroll >= triTop - winHeight) {
        $(this).addClass('fadeRight');
      } else {
        $(this).removeClass('fadeRight');
      }
    });
  });
});

//js-slideUp 上に出てくる
$(function () {
  $(window).scroll(function () {
    $('.js-slideUp').each(function () {
      let scroll = $(window).scrollTop();
      let triTop = $(this).offset().top + 100;
      let winHeight = $(window).height();
      if (scroll >= triTop - winHeight) {
        $(this).addClass('scrollin');
      } else {
        $(this).removeClass('scrollin');
      }
    });
  });
});

//js-fadein スッ
$(function () {
  $(window).scroll(function () {
    $('.js-fadein').each(function () {
      let scroll = $(window).scrollTop();
      let triTop = $(this).offset().top + 100;
      let winHeight = $(window).height();
      if (scroll >= triTop - winHeight) {
        $(this).addClass('fadein');
      } else {
        $(this).removeClass('fadein');
      }
    });
  });
});


//ハンバーガーメニュー
$(function () {
  $('.header_hamburger').click(function() {
      $(this).toggleClass('active');
      if ($(this).hasClass('active')) {
          $('.header_navSp,.header_navSpItems').addClass('active');
      } else {
          $('.header_navSp,.header_navSpItems').removeClass('active');
      }
      });
      $('a[href^="#"]').click(function() {
        // スクロールの速度
        let speed = 500; // ミリ秒で記述
          let href= $(this).attr("href");
          let target = $(href == "#" || href == "" ? 'html' : href);
          let position = target.offset().top;
          $('body,html').animate({scrollTop:position}, speed, 'swing');
          });
  $('.header_navSp a').on('click', function () {
      $('.header_hamburger').click();
  });
});


//////テキストボックス////////

$('input').on('focusin', function() {
  $(this).parent().find('label').addClass('active');
});

$('input').on('focusout', function() {
  if (!this.value) {
    $(this).parent().find('label').removeClass('active');
  }
});