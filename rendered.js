let noCount = 0; // Keeps track of how many times she hovers over "No"

// Function for if she hovers over NO
function moveButton() {
    noCount++;
    const btn = document.getElementById('noButton');
    const displayGif = document.getElementById('displayGif');

    btn.style.position = 'absolute';

    // If she tries to click no, drop an angry emote
    if (noCount >= 5) {
        displayGif.src = "angry king.jpg";
        document.getElementById('question').innerHTML = "GRRRRRR! 👑";
    }

    const padding = 100;
    const x = Math.random() * (window.innerWidth - btn.offsetWidth - padding);
    const y = Math.random() * (window.innerHeight - btn.offsetHeight - padding);
    
    btn.style.left = Math.max(padding, x) + 'px';
    btn.style.top = Math.max(padding, y) + 'px';
}

// Sets a timer for the Sanji Window (10 seconds)
setTimeout(() => {
    const popup = document.getElementById('sanjiPopup');
    const noBtn = document.getElementById('noButton');
    if(noBtn && noBtn.style.display !== 'none') {
        popup.style.display = 'block';
    }
}, 10000);

// Function for when she says yes
function accepted() {
    document.getElementById('question').innerHTML = "You really do love me! I love you ❤️";
    document.getElementById('displayGif').src = "assets/sanji_in_love.gif";
   
    document.getElementById('noButton').style.display = 'none';
    document.getElementById('sanjiPopup').style.display = 'none';
    
    // Heart Confetti
    // Had to look up how to do this
    confetti({ 
        particleCount: 150, 
        spread: 70, 
        origin: { y: 0.6 }, 
        colors: ['#ff4d6d', '#ffffff', '#ff8fa3'] 
    });
}

// Function to trigger the Piggy 
function triggerAngryGoblin() {
    const noBtn = document.getElementById('noButton');
    // Only run if she hasn't clicked "Yes" yet
    if (noBtn && noBtn.style.display !== 'none') {
        const goblin = document.createElement('img');
        goblin.src = 'clash-royale-emote-goblin-emote.gif';
        goblin.style.position = 'fixed';
        goblin.style.bottom = '10%';
        goblin.style.left = '-200px'; // Start off-screen
        goblin.style.width = '150px';
        goblin.style.zIndex = '100';
        goblin.style.transition = 'left 4s linear';
        
        document.body.appendChild(goblin);

        // Animate across the screen
        setTimeout(() => {
            goblin.style.left = '110vw';
        }, 100);

        // Remove the GIF after it finishes
        setTimeout(() => {
            goblin.remove();
        }, 5000);
    }
}

// Triggers the first Goblin at 20 seconds, then every 3 seconds after
setTimeout(() => {
    setInterval(triggerGoblin, 3000);
}, 20000);