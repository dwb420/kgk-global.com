// Accordion for 'faq' section

var acc = document.getElementsByClassName("section-faq__accordion");
var itm = document.getElementsByClassName("section-faq__item");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    }
    itm[i].onclick = function() {
        this.classList.toggle("chosen");
    }
}


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
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
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