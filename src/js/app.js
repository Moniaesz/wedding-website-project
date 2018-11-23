document.addEventListener("DOMContentLoaded", function() {

    const header = document.getElementsByTagName("header")[0];
    const hero = document.getElementsByClassName("hero")[0];

    function pageScroll() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            header.classList.add("header__scroll");
        } else {
            header.classList.add("header")
            header.classList.remove("header__scroll");
        }
    }
    window.onscroll = function() {pageScroll()};
});


