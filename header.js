$(function() {

    // Fixed Header
    let header = $("#header")
    let intro = $("#intro")
    let introH = intro.innerHeight() // Высота блока intro
    let scrollPos = $(window).scrollTop()



    $(window).on("scroll load resize", function() { // Актуальные данные скролла
        scrollPos = $(this).scrollTop()

        if(scrollPos > introH) {
            header.addClass("fixed")
        } else {
            header.removeClass("fixed")
        }
    })


    // Smooth scroll
    $("[data-scroll]").on("click", function(event) { // Выборка по ID
        event.preventDefault() // Для предотвращения ошибок

        let elementId = $(this).data('scroll')
        let elementOffset = $(elementId).offset().top // Отступы блоков

        nav.removeClass('show')

        $("html, body").animate ({ // Скролл
            scrollTop: elementOffset - 58
        }, 700)


    })


    // Nav Toggle 
    let nav = $('#nav')
    let navToggle = $('#navToggle')

    $('#navToggle').on("click", function(event) { //При нажатии на бургер создается доп. класс
        event.preventDefault() 

        nav.toggleClass('show') // Метод для бургера
    })

})