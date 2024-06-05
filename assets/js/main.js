document.addEventListener("DOMContentLoaded", function() {
    AOS.init();

    const header = document.getElementById("header");
    if (document.body.classList.contains('home')) {
        header.setAttribute("data-aos", "slide-down");
        window.addEventListener("scroll", function() {
            if (window.scrollY > 0) {
                header.classList.add("show");
            } else {
                header.classList.remove("show");
            }
        });
    } else {
        header.classList.add("show");
    }
});
