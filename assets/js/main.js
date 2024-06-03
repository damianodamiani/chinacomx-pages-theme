document.addEventListener("DOMContentLoaded", function() {
    const header = document.getElementById("header");
    window.addEventListener("scroll", function() {
        if (window.scrollY > window.innerHeight) {
            header.style.display = "block";
        } else {
            header.style.display = "none";
        }
    });
});
