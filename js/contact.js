// ===== CONTACT FORM & QUICK MESSAGE =====
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('senderName')?.value || '';
        const email = document.getElementById('senderEmail')?.value || '';
        const subject = document.getElementById('msgSubject')?.value || 'Portfolio Contact Inquiry';
        const message = document.getElementById('msgBody')?.value || '';

        const mailtoUrl = `mailto:mahdi.mh326@gmail.com?subject=${encodeURIComponent(subject + ' - from ' + name)}&body=${encodeURIComponent('From: ' + name + ' (' + email + ')\n\n' + message)}`;

        // Open user's default email client
        window.location.href = mailtoUrl;

        // Show feedback notification
        const statusMsg = document.getElementById('formStatus');
        if (statusMsg) {
            statusMsg.style.display = 'block';
            statusMsg.textContent = 'Opening your email client to send message...';
            setTimeout(() => {
                contactForm.reset();
            }, 2000);
        }
    });
}
