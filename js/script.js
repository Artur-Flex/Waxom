$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger, header__menu').toggleClass('active');
        $('.body').toggleClass('lock');
    });
});

$(document).ready(function() {
    $('.slider').slick({
        arrows:true,            //стрелки вкл/выкл
        dots: true,             //точки
        adaptiveHeight: true,   // адаптив слайдера
        slidesToShow:1,         // количество слайдов на эк.
        slidesToScroll:1,       // количество пролистывемых слайдов
        speed: 500,             // скорость пролистывания слайдов
        easing:'linear',        // рисунок анимации
        infinite:true,          // будет ли слайдер бесконечным
        initialSlide:0,         // с какова слада начать отображение первым
        autoplay:false,         // автопролистывание слайдов
        autoplaySpeed:1500,     // скорость автопролистывания сладов
        pauseOnFocus:true,      // остановка слайда при фокусе на него
        pauseOnHover:true,      // остановка слайда при наведении мыши
        pauseOnDotsFocus:true,  // остановка слайда при наведении на точки 
        draggable:true,         // отключение перелистывания мошью
        swipe:true,             // отключение пепелистывания на смартфоне
        touchTreshold:5,        // не понятно что это но по умолчании значение 5))
        touchMove:true,         // удержание слайда (например на смартфоне)
        waitForAnimate:false,   // при нажании на стрелу следующий слайд не появится пока предыдущий не закончит анимацию
        centerMode:false,       // ставит средний слад по центру
        variableWidth:false,    // автоопределение ширишы слайда
        rows:1,                 // этажи содержимого слайдов
        slidesPerRow:1,         // количество колонн в этажах слайда
        vertical:false,         // делает вертикальным слады (не забудь переключиться [.slider .slick-track{display: block}])
        verticalSwiping:false  // скролл для вертикального слайда
    });
});

let card = document.querySelectorAll('.intro__card') [0],
    card_head = document.querySelectorAll('.intro__c-head') [0],
    card_line = document.querySelectorAll('.intro__c-line') [0],
    card_2 = document.querySelectorAll('.intro__card') [1],
    card_head_2 = document.querySelectorAll('.intro__c-head') [1],
    card_line_2 = document.querySelectorAll('.intro__c-line') [1],
    card_3 = document.querySelectorAll('.intro__card') [2],
    card_head_3 = document.querySelectorAll('.intro__c-head') [2],
    card_line_3 = document.querySelectorAll('.intro__c-line') [2],
    card_4 = document.querySelectorAll('.intro__card') [2],
    card_head_4 = document.querySelectorAll('.intro__c-head') [2],
    card_line_4 = document.querySelectorAll('.intro__c-line') [2];

    card.addEventListener('mouseover', function() {
        card_head.style.color = '#c7b299';
        card_line.style.background = '#c7b299';
    });

    card.addEventListener('mouseout', function() {
        card_head.style.color = '#555555';
        card_line.style.background = '#f1eee9';
    });

    card_2.addEventListener('mouseover', function() {
        card_head_2.style.color = '#c7b299';
        card_line_2.style.background = '#c7b299';
    });

    card.addEventListener('mouseout', function() {
        card_head_2.style.color = '#555555';
        card_line_2.style.background = '#f1eee9';
    });
    card_3.addEventListener('mouseover', function() {
        card_head_3.style.color = '#c7b299';
        card_line_3.style.background = '#c7b299';
    });

    card.addEventListener('mouseout', function() {
        card_head_3.style.color = '#555555';
        card_line_3.style.background = '#f1eee9';
    });

    card_4.addEventListener('mouseover', function() {
        card_head_4.style.color = '#c7b299';
        card_line_4.style.background = '#c7b299';
    });

    card.addEventListener('mouseout', function() {
        card_head_4.style.color = '#555555';
        card_line_4.style.background = '#f1eee9';
    });

    $(document).ready(function() {
        $('.second__slider').slick({
            arrows:true,            //стрелки вкл/выкл
            dots: true,             //точки
            adaptiveHeight: true,   // адаптив слайдера
            slidesToShow:3,         // количество слайдов на эк.
            slidesToScroll:1,       // количество пролистывемых слайдов
            speed: 500,             // скорость пролистывания слайдов
            easing:'linear',        // рисунок анимации
            infinite:true,          // будет ли слайдер бесконечным
            initialSlide:0,         // с какова слада начать отображение первым
            autoplay:false,         // автопролистывание слайдов
            autoplaySpeed:1500,     // скорость автопролистывания сладов
            pauseOnFocus:true,      // остановка слайда при фокусе на него
            pauseOnHover:true,      // остановка слайда при наведении мыши
            pauseOnDotsFocus:true,  // остановка слайда при наведении на точки 
            draggable:true,         // отключение перелистывания мошью
            swipe:true,             // отключение пепелистывания на смартфоне
            touchTreshold:5,        // не понятно что это но по умолчании значение 5))
            touchMove:true,         // удержание слайда (например на смартфоне)
            waitForAnimate:false,   // при нажании на стрелу следующий слайд не появится пока предыдущий не закончит анимацию
            centerMode:true,       // ставит средний слад по центру
            variableWidth:false,    // автоопределение ширишы слайда
            rows:1,                 // этажи содержимого слайдов
            slidesPerRow:1,         // количество колонн в этажах слайда
            vertical:false,         // делает вертикальным слады (не забудь переключиться [.slider .slick-track{display: block}])
            verticalSwiping:false,  // скролл для вертикального слайда
            responsive:[
                {
                    breakpoint: 1235,
                    settings: {
                        slidesToShow:2,
                    }
                },
                {
                    breakpoint: 878,
                    settings: {
                        slidesToShow:1,
                        centerMode:false
                    }
                },
                {
                    breakpoint: 375,
                    settings: {
                        slidesToShow:1,
                        centerMode:false
                    }
                }
            ]
            });
    });