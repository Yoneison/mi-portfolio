// Animations JavaScript - Can be used for more complex animations if needed
// Currently, most animations are handled via CSS, but this file is ready for JS-based animations

document.addEventListener('DOMContentLoaded', function () {
    // Example: Initialize any animation libraries or custom JS animations here
    // For now, we'll just add a class to trigger CSS animations if needed

    // We can also handle intersection observer for fade-in effects on scroll if desired
    // But for the hero section, we are using CSS animations on load

    // If we want to add more complex interactions in the future, we can do so here

    // For example, if we want to animate elements as they come into view:
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                // Optionally, stop observing after animation
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements that should animate on scroll
    const animatedElements = document.querySelectorAll('.sidebar-card, .hero-main-card, .hero-sidebar');
    animatedElements.forEach(el => {
        observer.observe(el);
    });

    // Add the animate-in class to elements that are already in view on load
    // This is handled by our CSS animations on load, so we might not need this for the hero
    // But for other sections, we can use it.
});

document.addEventListener("DOMContentLoaded", () => {
    const glow = document.querySelector(".mouse-glow");

    document.addEventListener("mousemove", (e) => {
        glow.style.left = `${e.clientX}px`;
        glow.style.top = `${e.clientY}px`;
    });
});