document.addEventListener("DOMContentLoaded", function() {
    const header = document.getElementById("header");
    window.addEventListener("scroll", function() {
        if (window.scrollY > window.innerHeight) {
            header.classList.add("show");
        } else {
            header.classList.remove("show");
        }
    });
});
