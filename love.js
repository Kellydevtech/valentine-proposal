/*
// Play background music starting at a specific time
const music = new Audio('lovesong.mp3');  // replace with your file
music.volume = 0.3;
music.loop = true;
music.currentTime = 70;  // starts at 45 seconds into the song

// Try to autoplay
music.play().catch(function() {
    // If autoplay fails (mobile), play on first user interaction
    document.body.addEventListener('click', function() {
        music.play();
    }, { once: true });
});

function createHeart() {
    const heart = document.createElement('div');
    heart.innerHTML = '❤️';
    heart.style.position = 'fixed';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.top = '100vh';
    heart.style.fontSize = Math.random() * 30 + 20 + 'px';
    heart.style.pointerEvents = 'none';
    heart.style.zIndex = '0';
    heart.style.animation = 'floatUp 3s ease forwards';
    document.body.appendChild(heart);

    setTimeout(function() {
        heart.remove();
    }, 3000);
}

/* continuously spawns hearts 
setInterval(function() {
    createHeart();
}, 300);function createHeart() {
    const heart = document.createElement('div');
    heart.innerHTML = '❤️';
    heart.style.position = 'fixed';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.top = '100vh';
    heart.style.fontSize = Math.random() * 30 + 20 + 'px';
    heart.style.pointerEvents = 'none';
    heart.style.zIndex = '1000';
    heart.style.animation = 'floatUp 3s ease forwards';
    document.body.appendChild(heart);

    setTimeout(function() {
        heart.remove();
    }, 3000);
}

setInterval(function() {
    createHeart();
}, 300);*/

const music = new Audio('https://github.com/Kellydevtech/valentine-proposal/blob/main/lovesong%20(1).mp3')
music.volume = 0.3;
music.loop = true;
music.currentTime = 70;  

music.play().catch(function() {
    document.body.addEventListener('click', function() {
        music.play();
    }, { once: true });
});

function createHeart() {
    const heart = document.createElement('div');
    heart.innerHTML = '❤️';
    heart.style.position = 'fixed';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.top = '100vh';
    heart.style.fontSize = Math.random() * 30 + 20 + 'px';
    heart.style.pointerEvents = 'none';
    heart.style.zIndex = '0';
    heart.style.animation = 'floatUp 3s ease forwards';
    document.body.appendChild(heart);

    setTimeout(function() {
        heart.remove();
    }, 3000);
}

setInterval(function() {
    createHeart();
}, 300);

function createFirework() {
    const firework = document.createElement('div');
    firework.style.position = 'fixed';
    firework.style.left = Math.random() * 100 + 'vw';
    firework.style.top = Math.random() * 50 + 'vh';
    firework.style.width = '10px';
    firework.style.height = '10px';
    firework.style.borderRadius = '50%';
    firework.style.pointerEvents = 'none';
    firework.style.zIndex = '1000';
    
    const colors = ['#ff0080', '#ff69b4', '#ff1493', '#ffd700', '#ff6347'];
    const color = colors[Math.floor(Math.random() * colors.length)];
    
    document.body.appendChild(firework);
    
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = '5px';
        particle.style.height = '5px';
        particle.style.backgroundColor = color;
        particle.style.borderRadius = '50%';
        particle.style.left = '0';
        particle.style.top = '0';
        
        const angle = (Math.PI * 2 * i) / 30;
        const velocity = Math.random() * 100 + 50;
        const tx = Math.cos(angle) * velocity;
        const ty = Math.sin(angle) * velocity;
        
        particle.style.animation = `explode 1s ease-out forwards`;
        particle.style.setProperty('--tx', tx + 'px');
        particle.style.setProperty('--ty', ty + 'px');
        
        firework.appendChild(particle);
    }
    
    setTimeout(function() {
        firework.remove();
    }, 1000);
}

function createConfetti() {
    const confetti = document.createElement('div');
    confetti.innerHTML = ['🎉', '🎊', '✨', '💕', '💖'][Math.floor(Math.random() * 5)];
    confetti.style.position = 'fixed';
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.top = '-50px';
    confetti.style.fontSize = Math.random() * 20 + 15 + 'px';
    confetti.style.pointerEvents = 'none';
    confetti.style.zIndex = '1000';
    confetti.style.animation = 'confettiFall 3s ease-out forwards';
    document.body.appendChild(confetti);
    
    setTimeout(function() {
        confetti.remove();
    }, 3000);
}

setInterval(function() {
    createFirework();
}, 1500);  

setInterval(function() {
    createConfetti();
}, 100); 
