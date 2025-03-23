
let slideIndex = 0;
const slides = document.querySelectorAll(".islides");

function showSlides() {
    slides.forEach(slide => slide.style.display = "none");
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 2; }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 5000); // Change image every 3 seconds
}
function changeSlide(n) {
    slideIndex += n - 1;
    showSlides();
}
showSlides();

