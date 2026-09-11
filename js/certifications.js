// ===== CERTIFICATE MODAL VIEWER =====
const certImages = [
    'images/certifications/1.png',
    'images/certifications/2.png',
    'images/certifications/3.png',
    'images/certifications/4.png',
    'images/certifications/5.jpg',
    'images/certifications/6.jpg',
    'images/certifications/7.png'
];

function openCertModal(index) {
    const modal = document.getElementById('certModal');
    const modalImg = document.getElementById('modalCertImage');
    if (modal && modalImg && certImages[index]) {
        modalImg.src = certImages[index];
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent background scroll
    }
}

function closeCertModal() {
    const modal = document.getElementById('certModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

const modal = document.getElementById('certModal');
if (modal) {
    modal.addEventListener('click', function (e) {
        if (e.target === this) {
            closeCertModal();
        }
    });
}

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        closeCertModal();
    }
});
