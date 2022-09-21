$('.gallery__list--desk > .gallery__item--desk:gt(0)').hide();
setInterval(function () {
  $('.gallery__list--desk > .gallery__item--desk:first')
    .fadeOut(1900) // скорость исчезания блока
    .next()
    .fadeIn(1200) // скорость появления блока
    .end()
    .appendTo('.gallery__list--desk');
}, 3000); // скорость смены блоков

$('.gallery__list--tab > .gallery__item--tab:gt(0)').hide();
setInterval(function () {
  $('.gallery__list--tab > .gallery__item--tab:first')
    .fadeOut(1900) // скорость исчезания блока
    .next()
    .fadeIn(1200) // скорость появления блока
    .end()
    .appendTo('.gallery__list--tab');
}, 3000); // скорость смены блоков

$('.gallery__list--mob > .gallery__item--mob:gt(0)').hide();
setInterval(function () {
  $('.gallery__list--mob > .gallery__item--mob:first')
    .fadeOut(1900) // скорость исчезания блока
    .next()
    .fadeIn(1200) // скорость появления блока
    .end()
    .appendTo('.gallery__list--mob');
}, 3000); // скорость смены блоков
