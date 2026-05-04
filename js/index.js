const certSlides = document.querySelectorAll('.cert-slide');
let currentSlide = 0;

function showNextCert() {
    certSlides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % certSlides.length;
    certSlides[currentSlide].classList.add('active');
}

if (certSlides.length > 0) {
    setInterval(showNextCert, 4000);
}
