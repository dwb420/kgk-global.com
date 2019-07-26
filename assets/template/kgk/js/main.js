// Accordion for 'faq' section

$("#section-faq__accordion").click(function() {
    $('input:checkbox').not(this).prop('checked', this.checked);
});


// Accordion for 'guide' section

$("#section-guide__accordion").click(function() {
    $('input:checkbox').not(this).prop('checked', this.checked);
});


// Lazy-loading timeline block

var instance = $('.lazy-timeline');

$(function() {
    $('.lazy-timeline').lazy({
        delay: 1000
    });
});

// Lazy-loading recommendations block

var instance = $('.lazy-recs');

$(function() {
    $('button.lazy-start-recs').click(function() {
        $('img.lazy-recs').lazy({
            bind: "event"
        });
    });
});


// Lazy-loading sertificates block

var instance = $('.lazy-serts');

$(function() {
    $('button.lazy-start-serts').click(function() {
        $('img.lazy-serts').lazy({
            bind: "event"
        });
    });
});


// Slick slider for 'clients' section
$(document).ready(function() {
    $('.section-clients__items').slick({
        dots: false,
        autoplay: true,
        autoplaySpeed: 4500,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});


// Slick slider for 'guide' section
$(document).ready(function() {
    $('.section-guide__slider-items').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 6000,
        infinite: true,
        speed: 250,
    });
});


// Slick slider for 'functions' section
$(document).ready(function() {
    $('.section-functions__items').slick({
        dots: false,
        autoplay: true,
        autoplaySpeed: 9000,
        infinite: true,
        speed: 300,
        fade: true,
        cssEase: 'linear'
    });
});


// Slick slider for 'reviews' section
$(document).ready(function() {
    $('.section-reviews__items').slick({
        dots: false,
        autoplay: true,
        autoplaySpeed: 4500,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });
});


// Slick slider for 'timeline' section
$(document).ready(function() {
    $('.section-timeline__items').slick({
        dots: true,
        autoplay: false,
        autoplaySpeed: 4500,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});


// Tabs for section applications block
$(document).on("click", ".section-applications__items .section-applications__item-menu div", function() {
    var numberIndex = $(this).index();

    if (!$(this).is("active")) {
        $(".section-applications__items .section-applications__item-menu div").removeClass("active");
        $(".section-applications__items ul li").removeClass("active");

        $(this).addClass("active");
        $(".section-applications__items ul").find("li:eq(" + numberIndex + ")").addClass("active");

        var listItemHeight = $(".section-applications__items ul")
            .find("li:eq(" + numberIndex + ")")
            .innerHeight();
        $(".section-applications__items ul").height(listItemHeight + "px");
    }
});


// Tabs for section device characteristics block
$(document).on("click", ".section-devicechars__items .section-devicechars__item-menu div", function() {
    var numberIndex = $(this).index();

    if (!$(this).is("active")) {
        $(".section-devicechars__items .section-devicechars__item-menu div").removeClass("active");
        $(".section-devicechars__items ul li").removeClass("active");

        $(this).addClass("active");
        $(".section-devicechars__items ul").find("li:eq(" + numberIndex + ")").addClass("active");

        var listItemHeight = $(".section-devicechars__items ul")
            .find("li:eq(" + numberIndex + ")")
            .innerHeight();
        $(".section-devicechars__items ul").height(listItemHeight + "px");
    }
});



// Tabs for section survey block
$(document).on("click", ".section-survey__items .section-survey__item-menu div", function() {
    var numberIndex = $(this).index();

    if (!$(this).is("active")) {
        $(".section-survey__items .section-survey__item-menu div").removeClass("active");
        $(".section-survey__items ul li").removeClass("active");

        $(this).addClass("active");
        $(".section-survey__items ul").find("li:eq(" + numberIndex + ")").addClass("active");

        var listItemHeight = $(".section-survey__items ul")
            .find("li:eq(" + numberIndex + ")")
            .innerHeight();
        $(".section-survey__items ul").height(listItemHeight + "px");
    }
});

// Yandex-map with new API-key
ymaps.ready(function () {
var myMap = new ymaps.Map('map', {
            center: [55.642339,37.472409],
            zoom: 15
        }, {
            searchControlProvider: 'yandex#search'
        }),
        
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'КГК Глобал',
            balloonContent: ''
        }, {
            iconLayout: 'default#image',
            iconImageHref: '.assets/templates/kgk/img/ymaps-image.png',
            iconImageSize: [30, 32],
            iconImageOffset: [-18, -32],
            iconShadow: true
        });
        
    myMap.geoObjects
        .add(myPlacemark)
});