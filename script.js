// Initialize Lucide Icons
lucide.createIcons();

// Scroll Reveal Logic
const reveal = () => {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        const elementVisible = 100;
        if (elementTop < windowHeight - elementVisible) {
            el.classList.add('active');
        }
    });
};

window.addEventListener('scroll', reveal);
window.addEventListener('DOMContentLoaded', reveal);

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 50) {
        nav.classList.add('bg-[#05070a]/80', 'backdrop-blur-xl', 'py-4', 'border-b', 'border-white/10');
        nav.classList.remove('py-6');
    } else {
        nav.classList.remove('bg-[#05070a]/80', 'backdrop-blur-xl', 'py-4', 'border-b', 'border-white/10');
        nav.classList.add('py-6');
    }
});

// Subtle Parallax for background blobs
document.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    const blobs = document.querySelectorAll('.blob');
    blobs.forEach((blob, i) => {
        const speed = (i + 1) * 20;
        blob.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
    });
});

// Mobile Menu Placeholder (Optional)
const mobileToggle = document.getElementById('mobile-toggle');
if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
        // Here you could implement a mobile menu overlay
        console.log('Mobile menu clicked');
    });
}
