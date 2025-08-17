document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger-menu');
    const navLinks = document.querySelector('.nav-links');
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('open');
            navLinks.classList.toggle('open');
        });
        // Close menu when a nav link is clicked (on mobile)
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function() {
                if (window.innerWidth <= 768) {
                    hamburger.classList.remove('open');
                    navLinks.classList.remove('open');
                }
            });
        });
    }

    // --- Awards dropdown functionality ---
    document.querySelectorAll('.awards-toggle').forEach(button => {
        button.addEventListener('click', () => {
            const content = button.nextElementSibling;
            const isOpen = content.classList.contains('open');

            if (isOpen) {
                content.style.maxHeight = content.scrollHeight + "px"; // lock height before collapsing
                requestAnimationFrame(() => {
                    content.style.maxHeight = "0"; // then collapse
                });
                content.classList.remove('open');
                button.textContent = button.textContent.replace("▴", "▾");
            } else {
                content.style.maxHeight = content.scrollHeight + "px"; // expand
                content.classList.add('open');
                button.textContent = button.textContent.replace("▾", "▴");

                // Reset height after transition so resizing works
                content.addEventListener('transitionend', function removeHeight() {
                    if (content.classList.contains('open')) {
                        content.style.maxHeight = "none";
                    }
                    content.removeEventListener('transitionend', removeHeight);
                });
            }
        });
    });
});
