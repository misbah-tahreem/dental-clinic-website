// script.js - SmileCare Dental Clinic
document.addEventListener('DOMContentLoaded', function () {
    // === MOBILE NAVIGATION ===
    const hamburger = document.getElementById('hamburgerBtn');
    const navMenu = document.getElementById('navMenu');

    if (hamburger && navMenu) {
        // Toggle menu on hamburger click
        hamburger.addEventListener('click', function (e) {
            e.stopPropagation();
            navMenu.classList.toggle('open');
            const icon = hamburger.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-bars');
                icon.classList.toggle('fa-times');
            }
        });

        // Close menu when a nav link is clicked
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(function (link) {
            link.addEventListener('click', function () {
                navMenu.classList.remove('open');
                const icon = hamburger.querySelector('i');
                if (icon) {
                    icon.classList.add('fa-bars');
                    icon.classList.remove('fa-times');
                }
            });
        });

        // Close menu when clicking outside (optional but user-friendly)
        document.addEventListener('click', function (e) {
            if (navMenu.classList.contains('open') &&
                !navMenu.contains(e.target) &&
                e.target !== hamburger &&
                !hamburger.contains(e.target)) {
                navMenu.classList.remove('open');
                const icon = hamburger.querySelector('i');
                if (icon) {
                    icon.classList.add('fa-bars');
                    icon.classList.remove('fa-times');
                }
            }
        });
    }

    // === SMOOTH SCROLL FOR "BOOK AN APPOINTMENT" BUTTON ===
    // Already handled by CSS scroll-behavior, but we keep it robust.
    // All anchor links with href="#..." will scroll smoothly.

    // === CONTACT FORM (demo) ===
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            if (form.checkValidity()) {
                alert('Thank you! Your appointment request has been received. We will contact you shortly.');
                form.reset();
            } else {
                form.reportValidity();
            }
        });
    }
});