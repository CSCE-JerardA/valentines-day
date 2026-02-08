let noCount = 0; // Keeps track of how many times she hovers over "No"

// Function for if she hovers over NO
function moveButton() {
    noCount++;
    const btn = document.getElementById('noBtn');
    const displayGif = document.getElementById('displayGif');

    // If she tries to click no, drop an angry emote
    if (noCount >= 5) {
        displayGif.src = "angry king.jpg";
        document.getElementById('question').innerHTML = "GRRRRRR! 👑";
    }

    const x = Math.random() * (window.innerWidth - btn.offsetWidth);
    const y = Math.random() * (window.innerHeight - btn.offsetHeight);
    
    btn.style.left = x + 'px';
    btn.style.top = y + 'px';
}

// Sets a timer for the Sanji Window (10 seconds)
setTimeout(() => {
    const popup = document.getElementById('clashPopup');
    const noBtn = document.getElementById('noBtn');
    if(noBtn && noBtn.style.display !== 'none') {
        popup.style.display = 'block';
    }
}, 10000);

// Function for when she says yes
function accepted() {
    document.getElementById('question').innerHTML = "You really do love me! I love you ❤️";
    document.getElementById('displayGif').src = "assets/sanji_in_love.gif";
    document.getElementById('displayGif').src = "piggys.gif";
    document.getElementById('displayGif').src = "goblin-giant-clash.gif";
    document.getElementById('noBtn').style.display = 'none';
    document.getElementById('clashPopup').style.display = 'none';
    
    // Heart Confetti
    // Had to look up how to do this
    confetti({ 
        particleCount: 150, 
        spread: 70, 
        origin: { y: 0.6 }, 
        colors: ['#ff4d6d', '#ffffff', '#ff8fa3'] 
    });
}