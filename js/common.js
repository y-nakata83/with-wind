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