const canvas = document.getElementById('particleCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];

class Particle {
    constructor() {
        // ... (the rest of the particle animation code remains the same) ...
    }
}

function createParticles() {
    // ... (the rest of the particle animation code remains the same) ...
}

function animateParticles() {
    // ... (the rest of the particle animation code remains the same) ...
}

createParticles();
animateParticles();

window.addEventListener('resize', () => {
    // ... (the rest of the resize event code remains the same) ...
});

const audio = document.getElementById('backgroundMusic');
const playPauseBtn = document.getElementById('playPauseBtn');
const volumeSlider = document.getElementById('volumeSlider');

// ... (the rest of the audio player code remains the same) ...

function checkScroll() {
    // ... (the rest of the scroll animation code remains the same) ...
}

window.addEventListener('scroll', checkScroll);
checkScroll(); // Initial check on page load