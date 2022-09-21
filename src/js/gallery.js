$('.gallery__list > .gallery__item:gt(0)').hide();
setInterval(function () {
  $('.gallery__list > .gallery__item:first')
    .fadeOut(1900) // скорость исчезания блока
    .next()
    .fadeIn(1200) // скорость появления блока
    .end()
    .appendTo('.gallery__list');
}, 4000); // скорость смены блоков
