AOS.init({
    duration: 1000,
    once: true,
    easing: 'ease-out-quart'
});

// Mobile Menu Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');
const navA = document.querySelectorAll('.nav-links a');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('toggle');
        
        // Hamburger Animation
        const spans = hamburger.querySelectorAll('span');
        if(hamburger.classList.contains('toggle')) {
            spans[0].style.transform = 'rotate(-45deg) translate(-5px, 6px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(45deg) translate(-5px, -6px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
}

// Close menu when clicking a link
navA.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('toggle');
        const spans = hamburger.querySelectorAll('span');
        if (spans.length >= 3) {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
});

// Navbar Scroll Effect
window.onscroll = function() {
    var nav = document.querySelector('nav');
    if (!nav) return;
    
    if (window.pageYOffset > 50) {
        nav.style.padding = "10px 8%";
        nav.style.background = "rgba(8, 33, 51, 0.98)";
    } else {
        nav.style.padding = "20px 8%";
        nav.style.background = "rgba(8, 33, 51, 0.85)";
    }
};
