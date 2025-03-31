// Hamburger menu functionality
document.querySelector('.hamburger').addEventListener('click', function() {
    this.classList.toggle('open');
    document.querySelector('.nav-links').classList.toggle('active');
});

// Close menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function() {
        document.querySelector('.hamburger').classList.remove('open');
        document.querySelector('.nav-links').classList.remove('active');
    });
});