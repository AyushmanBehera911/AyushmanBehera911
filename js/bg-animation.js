

const canvas = document.getElementById('neural-bg');
const ctx = canvas.getContext('2d');

let particles = [];
let connectionDistance = 150;
let particleCount = 60;


function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    

    if (window.innerWidth < 768) {
        particleCount = 30;
        connectionDistance = 100;
    } else {
        particleCount = 60;
        connectionDistance = 150;
    }
    
    initParticles();
}

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 1.5;
        this.vy = (Math.random() - 0.5) * 1.5;
        this.size = Math.random() * 2 + 1;
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;


        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
        


    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--text-secondary').trim();
        ctx.fill();
    }
}

function initParticles() {
    particles = [];
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }
}

function animate() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    const lineColor = getComputedStyle(document.documentElement).getPropertyValue('--text-secondary').trim();
    

    for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
        

        for (let j = i; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < connectionDistance) {
                ctx.beginPath();
                ctx.strokeStyle = lineColor;
                ctx.globalAlpha = 1 - (dist / connectionDistance);
                ctx.lineWidth = 1;
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(particles[j].x, particles[j].y);
                ctx.stroke();
                ctx.globalAlpha = 1;
            }
        }
    }
    
    requestAnimationFrame(animate);
}


const mouse = { x: undefined, y: undefined };
window.addEventListener('mousemove', (e) => {
    mouse.x = e.x;
    mouse.y = e.y;
});


window.addEventListener('resize', resize);
resize();
animate();
