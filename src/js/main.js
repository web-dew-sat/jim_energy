$(document).ready(function(){
        $('.btn_modal').on('click', function(){
                $('#modal-wrapper').fadeOut('slow')
        });
        //Header scroll
        var HeaderTop = $('#header').offset().top;

        $(window).scroll(function(){
                if( $(window).scrollTop() > 800 ) {
                        $('#header').css({position: 'fixed', top: '0px'});
                        $('body').css({
                                'paddingTop': 119 +'px' // делаем отступ у body, равный высоте шапки
                        });
                } else {
                        $('#header').css({position: 'static'});
                        $('body').css({
                                'paddingTop': 0 // удаляю отступ у body, равный высоте шапки
                        })
                }
        });

        //Validate
        $('#form').validate({
                rules: {
                        name: "required",
                        tel: {
                                required: true
                        },
                        message: {
                                required: true,
                                minlength: 20
                        }
                },
                messages: {
                        name: "Пожалуйста, введите Ваше имя",
                        tel: {
                                required: "Пожалуйста, введите Ваш номер телефона"
                        },
                        message: {
                                required: "Пожалуйста, введите сообщение с обращением",
                                minlength: jQuery.validator.format("Введите не менее {0} символов")
                        }
                }
        });

        //Masked input
        $('#phone').mask('+7 (000) 000-00-00');


        $('form').submit(function(e) {
                e.preventDefault();
                $.ajax({
                        type: "POST",
                        url: "mailer/smart.php",
                        data: $(this).serialize()
                }).done(function() {
                        $(this).find("input").val("");
                        $('#modal-wrapper').fadeIn('slow');

                        $('form').trigger('reset');
                });
                return false;

        });






});