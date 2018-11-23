document.addEventListener("DOMContentLoaded", function() {

    const header = document.getElementsByTagName("header")[0];
    // const hero = document.getElementsByClassName("hero")[0];
    // const heroHeader = hero.children[0];
    // console.log(hero);
    // console.log(heroHeader);
    
    function pageScroll() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            header.classList.add("header__scroll");
        } else {
            header.className = "header";
        }
    }

    window.onscroll = function() {pageScroll()};
});


