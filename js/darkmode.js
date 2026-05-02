// Dark Mode Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
    const darkmodeToggle = document.getElementById('darkmode-toggle');
    const htmlElement = document.documentElement;
    
    // Check for saved theme preference or use system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
        enableDarkMode();
    }
    
    darkmodeToggle.addEventListener('click', function() {
        if (htmlElement.getAttribute('data-theme') === 'dark') {
            disableDarkMode();
        } else {
            enableDarkMode();
        }
    });
    
    function enableDarkMode() {
        htmlElement.setAttribute('data-theme', 'dark');
        darkmodeToggle.innerHTML = '<span class="darkmode-icon">☀️</span>';
        localStorage.setItem('theme', 'dark');
    }
    
    function disableDarkMode() {
        htmlElement.removeAttribute('data-theme');
        darkmodeToggle.innerHTML = '<span class="darkmode-icon">🌙</span>';
        localStorage.setItem('theme', 'light');
    }
    
    // Add hover effect to dark mode button
    darkmodeToggle.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.2)';
    });
    
    darkmodeToggle.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});