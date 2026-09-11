// ===== MOBILE HAMBURGER MENU =====
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.getElementById('navLinks');

if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        mobileMenuBtn.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close menu when clicking on any nav link
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuBtn.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navLinks.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
            mobileMenuBtn.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });
}

// ===== PROFILE PHOTO OVERLAY =====
const logoBtn = document.getElementById('logoBtn');
const photoOverlay = document.getElementById('photoOverlay');
const closeBtn = document.getElementById('closeBtn');

if (logoBtn && photoOverlay) {
    logoBtn.addEventListener('click', (e) => {
        e.preventDefault();
        photoOverlay.classList.add('active');
    });

    if (closeBtn) {
        closeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            photoOverlay.classList.remove('active');
        });
    }

    photoOverlay.addEventListener('click', (e) => {
        if (e.target === photoOverlay) {
            photoOverlay.classList.remove('active');
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && photoOverlay.classList.contains('active')) {
            photoOverlay.classList.remove('active');
        }
    });
}
