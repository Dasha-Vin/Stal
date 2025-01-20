document.querySelectorAll('.service__text').forEach(serviceText => {
    serviceText.addEventListener('click', function() {
        const link = this.querySelector('a');
        if (link) {
            window.location.href = link.href; // Перенаправление на URL ссылки
        }
    });
});