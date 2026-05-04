document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const form = this;
    fetch(form.action, { method: 'POST', body: new FormData(form), headers: { 'Accept': 'application/json' } })
        .then(r => {
            if (r.ok) { form.reset(); document.getElementById('successMsg').style.display = 'block'; }
        })
        .catch(() => { window.location.href = 'mailto:mahdi.mh326@gmail.com'; });
});
