document.addEventListener("DOMContentLoaded", function() {
    const header = document.getElementById("header");
    if (document.body.classList.contains('home')) {
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

    const leftBtn = document.querySelector('.left-btn');
    const rightBtn = document.querySelector('.right-btn');
    const postWrapper = document.querySelector('.post-wrapper');
    let currentIndex = 0;

    function updateCarousel() {
        postWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    leftBtn.addEventListener('click', function() {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });

    rightBtn.addEventListener('click', function() {
        if (currentIndex < postWrapper.children.length - 1) {
            currentIndex++;
            updateCarousel();
        }
    });
});
