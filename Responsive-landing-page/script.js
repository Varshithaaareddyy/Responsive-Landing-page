// Scroll ayinappudu navbar color marchadam
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled'); // CSS lo .scrolled class add avuddi
    } else {
        navbar.classList.remove('scrolled'); // Top ki velte remove avuddi
    }
});

// Mobile hamburger menu - Optional
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});