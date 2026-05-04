const logoBtn = document.getElementById('logoBtn');
const photoOverlay = document.getElementById('photoOverlay');
const closeBtn = document.getElementById('closeBtn');
const themeToggle = document.getElementById('themeToggle');

const currentTheme = localStorage.getItem('theme') || 'dark';
if (currentTheme === 'light') {
    document.body.classList.add('light-mode');
    themeToggle.checked = true;
}

themeToggle.addEventListener('change', function () {
    document.body.classList.toggle('light-mode');
    localStorage.setItem('theme', document.body.classList.contains('light-mode') ? 'light' : 'dark');
});

logoBtn.addEventListener('click', () => photoOverlay.classList.add('active'));
closeBtn.addEventListener('click', (e) => { e.stopPropagation(); photoOverlay.classList.remove('active'); });
photoOverlay.addEventListener('click', (e) => { if (e.target === photoOverlay) photoOverlay.classList.remove('active'); });
