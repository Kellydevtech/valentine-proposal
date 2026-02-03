
/*const noButton = document.getElementById('no');

document.addEventListener('mousemove', function(e) {
    const rect = noButton.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distX = e.clientX - centerX;
    const distY = e.clientY - centerY;

    const distance = Math.sqrt(distX * distX + distY * distY);

    if (distance < 100) {
        const moveX = distX * -1;
        const moveY = distY * -1;
        const scale = Math.max(0.2, 1 - distance / 150);
        noButton.style.transform = `translate(${moveX}px, ${moveY}px) scale(${scale})`;
    } else {
        noButton.style.transform = 'translate(0, 0) scale(1)';
    }
});*/

const noButton = document.getElementById('no');

function isMobile() {
    return window.innerWidth <= 600;
}

if (!isMobile()) {
    document.addEventListener('mousemove', function(e) {
        const rect = noButton.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const distX = e.clientX - centerX;
        const distY = e.clientY - centerY;

        const distance = Math.sqrt(distX * distX + distY * distY);

        if (distance < 100) {
            const moveX = distX * -1;
            const moveY = distY * -1;
            const scale = Math.max(0.2, 1 - distance / 150);
            noButton.style.transform = `translate(${moveX}px, ${moveY}px) scale(${scale})`;
        } else {
            noButton.style.transform = 'translate(0, 0) scale(1)';
        }
    });
}

if (isMobile()) {
    let clickCount = 0;
    noButton.addEventListener('click', function() {
        clickCount++;
        if (clickCount === 2) {
            noButton.style.display = 'none';
        }
    });
}

const yesButton = document.getElementById('yes');

yesButton.addEventListener('click', function() {
    yesButton.style.transition = 'transform 0.3s ease';
    yesButton.style.transform = 'scale(1.5)';

    for (let i = 0; i < 20; i++) {
        setTimeout(function() {
            createHeart();
        }, i * 150);
    }

    setTimeout(function() {
        window.location.href = 'love.html';
    }, 900);
});

yesButton.addEventListener('click', function() {
    yesButton.style.transition = 'transform 0.3s ease';
    yesButton.style.transform = 'scale(1.5)';

    for (let i = 0; i < 15; i++) {
        setTimeout(function() {
            createFirework();
        }, i * 200);
    }


    for (let i = 0; i < 20; i++) {
        setTimeout(function() {
            createHeart();
        }, i * 150);
    }

    
    createConfetti();

    setTimeout(function() {
        window.location.href = 'love.html';
    }, 3000);  
});


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
    for (let i = 0; i < 100; i++) {
        setTimeout(function() {
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
        }, i * 30);
    }
}

function createHeart() {
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
