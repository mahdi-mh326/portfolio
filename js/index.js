// ===== CERTIFICATIONS SLIDER (HOMEPAGE) =====
const certSlides = document.querySelectorAll('.cert-slide');
const prevBtn = document.getElementById('prevCertBtn');
const nextBtn = document.getElementById('nextCertBtn');
const sliderDotsContainer = document.getElementById('sliderDots');

if (certSlides.length > 0) {
    let currentSlide = 0;
    let autoPlayInterval = null;

    // Create dot indicators if container exists
    if (sliderDotsContainer) {
        sliderDotsContainer.innerHTML = '';
        certSlides.forEach((_, idx) => {
            const dot = document.createElement('div');
            dot.className = `slider-dot ${idx === 0 ? 'active' : ''}`;
            dot.addEventListener('click', () => {
                goToSlide(idx);
                resetAutoPlay();
            });
            sliderDotsContainer.appendChild(dot);
        });
    }

    function updateDots() {
        if (sliderDotsContainer) {
            const dots = sliderDotsContainer.querySelectorAll('.slider-dot');
            dots.forEach((dot, idx) => {
                dot.classList.toggle('active', idx === currentSlide);
            });
        }
    }

    function showSlide(index) {
        certSlides.forEach(slide => slide.classList.remove('active'));
        certSlides[index].classList.add('active');
        updateDots();
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % certSlides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + certSlides.length) % certSlides.length;
        showSlide(currentSlide);
    }

    function goToSlide(index) {
        currentSlide = index;
        showSlide(currentSlide);
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            nextSlide();
            resetAutoPlay();
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            prevSlide();
            resetAutoPlay();
        });
    }

    function startAutoPlay() {
        if (!autoPlayInterval) {
            autoPlayInterval = setInterval(nextSlide, 4500);
        }
    }

    function stopAutoPlay() {
        if (autoPlayInterval) {
            clearInterval(autoPlayInterval);
            autoPlayInterval = null;
        }
    }

    function resetAutoPlay() {
        stopAutoPlay();
        startAutoPlay();
    }

    const showcase = document.querySelector('.cert-showcase');
    if (showcase) {
        showcase.addEventListener('mouseenter', stopAutoPlay);
        showcase.addEventListener('mouseleave', startAutoPlay);
    }

    startAutoPlay();
}
