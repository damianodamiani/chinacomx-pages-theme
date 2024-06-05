document.addEventListener("DOMContentLoaded", function() {
    AOS.init();

    const header = document.getElementById("header");
    if (document.body.classList.contains('home')) {
        header.classList.add('hide'); // Hide initially
        window.addEventListener("scroll", function() {
            if (window.scrollY > 0) {
                header.classList.add("show");
                header.classList.remove("hide");
            } else {
                header.classList.remove("show");
                header.classList.add("hide");
            }
        });
    } else {
        header.classList.add("show");
    }
});
