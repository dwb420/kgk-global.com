// Accordion for faq section

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