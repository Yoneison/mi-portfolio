// FAQ Acordeón
document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
        const item = btn.closest('.faq-item');
        const isOpen = item.classList.contains('open');

        // Cierra todos
        document.querySelectorAll('.faq-item.open').forEach(el => el.classList.remove('open'));

        // Abre el clickeado si estaba cerrado
        if (!isOpen) item.classList.add('open');
    });
});

// Hover: mostrar descripción en srv-card con entrada suave
document.querySelectorAll('.srv-card').forEach(card => {
    const desc = card.querySelector('p');
    if (desc) {
        desc.style.maxHeight = '0';
        desc.style.opacity   = '0';
        desc.style.overflow  = 'hidden';
        desc.style.transition = 'max-height 0.35s ease, opacity 0.3s ease, margin 0.3s ease';
        desc.style.margin    = '0';

        card.addEventListener('mouseenter', () => {
            desc.style.maxHeight = '80px';
            desc.style.opacity   = '1';
        });

        card.addEventListener('mouseleave', () => {
            desc.style.maxHeight = '0';
            desc.style.opacity   = '0';
        });
    }
});
