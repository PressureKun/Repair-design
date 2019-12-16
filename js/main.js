$(document).ready(function () {
// переменные
  var modal = $('.modal'),
      modalBtn = $('[data-toggle=modal]'),
      closeBtn = $('.modal__close');
      btn = $('#button-up');
// функция модального окна
  modalBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });
  closeBtn.on('click', function () {
    modal.toggleClass('modal--visible'); 
// функция кнопки "вверх"
  });
  $(function () {
    var element = $("#button-up"),
      display;
    $(window).scroll(function () {
      display = $(this).scrollTop() >= 250;
      display != element.css('opacity') && element.stop().animate({
        'opacity': display
      }, 300);
    });
  });

  btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    }, '300');
  });

});