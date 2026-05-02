document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    const mobileThemeToggle = document.getElementById("mobile-theme-toggle");
    const html = document.documentElement;

    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
        html.setAttribute('data-theme', 'dark');
        setIcons(true);
    }

    if (themeToggle) {
        themeToggle.addEventListener("click", toggleTheme);
    }

    if (mobileThemeToggle) {
        mobileThemeToggle.addEventListener("click", toggleTheme);
    }

    function toggleTheme() {
        const isDark = html.getAttribute('data-theme') === 'dark';
        if (isDark) {
            html.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
            setIcons(false);
        } else {
            html.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            setIcons(true);
        }
    }

    function setIcons(isDark) {
        const iconName = isDark ? "sun" : "moon";

        [themeToggle, mobileThemeToggle].forEach(btn => {
            if (!btn) return;
            const existing = btn.querySelector("[data-lucide]");
            if (existing) {
                const fresh = document.createElement("i");
                fresh.setAttribute("data-lucide", iconName);
                existing.replaceWith(fresh);
            }
        });

        lucide.createIcons();
    }
});

const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");
const closeMenu = document.getElementById("close-menu");
const menuOverlay = document.getElementById("menu-overlay");

if (menuToggle && mobileMenu && closeMenu && menuOverlay) {
    menuToggle.addEventListener("click", () => {
        mobileMenu.classList.add("active");
        menuOverlay.classList.add("active");
    });

    closeMenu.addEventListener("click", () => {
        mobileMenu.classList.remove("active");
        menuOverlay.classList.remove("active");
    });

    menuOverlay.addEventListener("click", () => {
        mobileMenu.classList.remove("active");
        menuOverlay.classList.remove("active");
    });
}

function copyEmail() {
    navigator.clipboard.writeText("yoneisonbayona@gmail.com")
        .then(() => {
            alert("Correo copiado correctamente");
        })
        .catch(() => {
            alert("No se pudo copiar el correo");
        });
}