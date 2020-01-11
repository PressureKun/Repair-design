$(document).ready(function () {
// переменные
  var modal = $('.modal'),
      modalThx = $('.modal-thanks'),
      modalBtn = $('[data-toggle=modal]'),
      closeBtn = $('.modal__close');
      closeThx = $('.modal-thanks__close');
      btn = $('#button-up');
// функция модального окна
  modalBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });
  closeBtn.on('click', function () {
    modal.toggleClass('modal--visible'); 
  });
    closeThx.on('click', function () {
      modalThx.toggleClass('modal-thanks--visible'); 
  });
  // функция кнопки "вверх"
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
 // функция для якорных ссылок
  $("#nav").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({
      scrollTop: top
    }, 1000);
  });

  $("#nav2").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({
      scrollTop: top
    }, 1000);
  });
  //initialize swiper when document ready
  var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })

  var next = $('.swiper-button-next');
  var prev = $('.swiper-button-prev');
  var bullets = $('.swiper-pagination');

  next.css('left', prev.width() + 10 + bullets.width() + 10);
  bullets.css('left', prev.width() + 10);

  new WOW().init();

  // Валидация форм
  $('.modal__form').validate({
    errorClass: "invalid", 
    rules: {
      // simple rule, converted to {required:true}
      userName: {
        required: true,
        minlength: 2,
      },
      userPhone: "required",
      // compound rule
      userEmail: {
        required: true,
        email: true
      },
      form_check: {
        required: true
      }
    },
    // errorElement: "em",
    // errorClass: "invalid",
    messages: {
      userName: {
        required: "Обязательно для заполнения",
        minlength: "Не короче двух символов",
      }, 
      userPhone: "Обязательно для заполнения",
      userEmail: {
        required: "Обязательно укажите ваш email адрес",
        email: "Введите в формате: name@domain.com"
      },
      form_check: {
        required: "Обязательно для заполнения",
      }
    },
    errorPlacement: function (error, element) {
      if (element.attr("type") == "checkbox") {
        return element.next('label').append(error);
      }

      error.insertAfter($(element));
    },
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          console.log('сработало' + response);
          $(form)[0].reset();
          modal.removeClass('modal--visible');
          modalThx.toggleClass('modal-thanks--visible');
        }
      });
    }
  });
    
  $('.control__form').validate({
    errorClass: "invalid",
    rules: {
      // simple rule, converted to {required:true}
      userName: {
        required: true,
        minlength: 2,
      },
      userPhone: "required",
      // compound rule      
      form_check: {
        required: true,
      }
    },
    messages: {
      userName: {
        required: "Обязательно для заполнения",
        minlength: "Не короче двух символов",
      },
      userPhone: "Обязательно для заполнения",     
      form_check: {
        required: "Обязательно для заполнения",
      }
    },
    errorPlacement: function (error, element) {
      if (element.attr("type") == "checkbox") {
        return element.next('label').append(error);
      }

      error.insertAfter($(element));
    },
    submitHandler: function (form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          console.log('сработало' + response);
          $(form)[0].reset();
          modal.removeClass('modal--visible');
          modalThx.toggleClass('modal-thanks--visible');
        }
      });
    }
  });

  $('.footer__form').validate({
    errorClass: "invalid",
    rules: {
      // simple rule, converted to {required:true}
      userName: {
        required: true,
        minlength: 2,
      },
      userPhone: "required",
      // compound rule
      form_check: {
        required: true,
      }
    },
    messages: {
      userName: {
        required: "Обязательно для заполнения",
        minlength: "Не короче двух символов",
      },
      userPhone: "Обязательно для заполнения",
      form_check: {
        required: "Обязательно для заполнения",
      }
    },
    errorPlacement: function (error, element) {
      if (element.attr("type") == "checkbox") {
        return element.next('label').append(error);
      }
      error.insertAfter($(element));
    },
    submitHandler: function (form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          console.log('сработало' + response);
          $(form)[0].reset();
          modal.removeClass('modal--visible');
          modalThx.toggleClass('modal-thanks--visible');
        }
      }); 
    }
  });

// Ajax отправка формы
  // $('#offer-form').on('submit', function name(event) {
  //   event.preventDefault();
  //   $.ajax({
  //     type: "POST",
  //     url: "send.php",
  //     data: $(this).serialize(),
  //     success: function (response) {
  //       console.log('Прибыли данные: ' + response);
  //       $('#offer-form')[0].reset();
  //       modal.toggleClass('modal--visible');
  //       // функция модального окна
  //       modalThx.toggleClass('modal-thanks--visible');

  //     },
  //     error: function(jqXHR, textStatus, errorThrown) {
  //       console.error(jqXHR + "" + textStatus)
  //     }
  //   });
  // });
  // Маски

  $('[type=tel]').mask('+7(000) 00-00-000', {placeholder: "+7 (___) __-__-___"});
  var player;
  $('.video__play').on('click', function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      height: '460',
      width: '100%',
      videoId: 'cu_l1JNB5ds',
      events: {
        'onReady': videoPlay,

      }
    });
  })

  function videoPlay(event) {
    event.target.playVideo();
    
  }

});