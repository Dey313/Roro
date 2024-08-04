// Interactive question handling
document.getElementById('yes-btn').addEventListener('click', function() {
    let confirmation = confirm("Are you sure?");
    if (confirmation) {
        // Trigger fireworks animation
        document.getElementById('particles-js').classList.remove('hidden');
        particlesJS('particles-js', {
            "particles": {
                "number": {
                    "value": 100,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#ffffff"
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    }
                },
                "opacity": {
                    "value": 0.5,
                    "random": false,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": false
                },
                "move": {
                    "enable": true,
                    "speed": 3,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": false,
                        "mode": "repulse"
                    },
                    "onclick": {
                        "enable": false,
                        "mode": "push"
                    },
                    "resize": true
                }
            },
            "retina_detect": true
        });
    }
});

document.getElementById('no-btn').addEventListener('click', function() {
    // Add bouncing effect
    this.classList.add('bouncing');
    setTimeout(() => this.classList.remove('bouncing'), 3000); // Remove after animation
});

// High-five animation
function highFive() {
    alert("High-Five!");
    // Add animation or effects for high-five here
}

// Friendship Quiz
function submitQuiz() {
    const selectedOption = document.querySelector('input[name="activity"]:checked');
    if (selectedOption) {
        alert("You have won lifetime of free PHUKUPUCHU!!!!");
    } else {
        alert('Please select an option.');
    }
}

// Friendship Fortune Teller
function getFortune() {
    alert("Future Presidential Award Winner");
    document.getElementById('fortune-result').innerText = "";
}

// Memory Game
const cards = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D'];
let gameBoard = document.getElementById('game-board');
let selectedCards = [];
let matchedCards = [];

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function createCard(cardValue) {
    let card = document.createElement('div');
    card.classList.add('card');
    card.setAttribute

