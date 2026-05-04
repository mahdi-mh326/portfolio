const certImages = [
    'images/certifications/1.png',
    'images/certifications/2.png',
    'images/certifications/3.png',
    'images/certifications/4.png',
    'images/certifications/5.jpg',
    'images/certifications/6.jpg'
];

function openCertModal(index) {
    const modal = document.getElementById('certModal');
    document.getElementById('modalCertImage').src = certImages[index];
    modal.classList.add('active');
}

function closeCertModal() {
    document.getElementById('certModal').classList.remove('active');
}

document.getElementById('certModal').addEventListener('click', function (e) {
    if (e.target === this) closeCertModal();
});
