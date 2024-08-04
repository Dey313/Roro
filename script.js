document.getElementById('yes-button').addEventListener('click', function() {
    // Show the confirmation popup
    document.getElementById('popup').style.display = 'flex';
});

document.getElementById('popup-yes').addEventListener('click', function() {
    // Hide the popup and trigger fireworks
    document.getElementById('popup').style.display = 'none';
    
    const fireworks = new Fireworks(document.body, {
        opacity: 0.5,
        acceleration: 1.2,
        friction: 0.98
    });
    fireworks.start();
    setTimeout(() => fireworks.stop(), 3000); // Fireworks will stop after 3 seconds
});

document.getElementById('popup-no').addEventListener('click', function() {
    // Hide the popup
    document.getElementById('popup').style.display = 'none';
});

document.getElementById('no-button').addEventListener('click', function() {
    const button = this;
    button.classList.add('bounce');
    
    // Remove bounce class after animation completes to allow re-triggering
    setTimeout(() => button.classList.remove('bounce'), 1000);
});
