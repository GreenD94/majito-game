// Diálogos de la Parte 4 - Resolución a los Golpes
const dialogues = [
    {
        type: "title",
        text: "Parte 4: Resolución a los Golpes"
    },
    {
        character: "Tú",
        text: "Oye, siento que hemos estado peleando y no me gusta. Eso, lo siento.",
        video: "../shared/him-knight-talking.mp4"
    },
    {
        character: "Ella",
        text: "Es difícil, tú me haces enojar a propósito.",
        video: "../shared/her-wizard-talking.mp4"
    },
    {
        character: "Tú",
        text: "Mira que tal si antes de terminar la misión vamos a un lugar especial y así arreglamos las cosas.",
        video: "../shared/him-knight-talking.mp4"
    },
    {
        character: "Ella",
        text: "Yo tengo un lugar donde quiero ir.",
        video: "../shared/her-wizard-talking.mp4"
    },
    {
        character: "Tú",
        text: "Yo también.",
        video: "../shared/him-knight-talking.mp4"
    },
    {
        character: "Ella",
        text: "Ah no, vamos para donde yo dije primero.",
        video: "../shared/her-wizard-talking.mp4"
    },
    {
        character: "Tú",
        text: "Mira yo ya tengo todo planeado es mejor ir a donde yo quiero primero.",
        video: "../shared/him-knight-talking.mp4"
    },
    {
        character: "Ella",
        text: "Sabes que mejor resolvemos esto a los golpes.",
        video: "../shared/her-wizard-talking.mp4"
    }
];

const chapterConfig = {
    background: "../shared/main_background.jpg",
    endAnimation: "../shared/her_attacking_him.png",
    endAnimationType: "image",
    nextChapter: "../part5/index.html"
};

// Game state
const gameState = {
    playerScore: 0,
    knightScore: 0,
    round: 1,
    playerRealWins: 0, // Track actual wins (before cheating)
    currentPlayerChoice: null,
    currentKnightChoice: null,
    originalKnightChoice: null,
    gamePhase: "waiting", // waiting, showing, result, dialogue
    dialogueQueue: [],
    gameComplete: false
};

// Choice mappings
const choices = {
    rock: { emoji: "✊", name: "Piedra", beats: "scissors" },
    paper: { emoji: "✋", name: "Papel", beats: "rock" },
    scissors: { emoji: "✌️", name: "Tijera", beats: "paper" }
};

// Dialogue for winners
const winnerDialogues = {
    player: [
        "¡Gané!",
        "¡Punto para mí!",
        "¡Eso es mío!",
        "¡Perfecto!"
    ],
    knight: [
        "¡Jajaja, gané yo!",
        "¡Punto para el Caballero!",
        "¡Eso es mío!",
        "¡Perfecto!"
    ]
};

// DOM elements
let currentDialogue = 0;
const titleScreen = document.getElementById('title-screen');
const dialoguePhase = document.getElementById('dialogue-phase');
const gamePhase = document.getElementById('game-phase');
const dialogueElement = document.getElementById('dialogue-text');
const characterVideo = document.getElementById('character-video');
const instructions = document.getElementById('instructions');
const chapterAnimation = document.getElementById('chapter-animation');

// Game elements
const playerScoreEl = document.getElementById('player-score');
const knightScoreEl = document.getElementById('knight-score');
const roundInfoEl = document.getElementById('round-info');
const playerChoiceIcon = document.getElementById('player-choice-icon');
const knightChoiceIcon = document.getElementById('knight-choice-icon');
const gameResult = document.getElementById('game-result');
const gameChoices = document.getElementById('game-choices');
const rockBtn = document.getElementById('rock-btn');
const paperBtn = document.getElementById('paper-btn');
const scissorsBtn = document.getElementById('scissors-btn');

// New game elements
const choosingAnimation = document.getElementById('choosing-animation');
const resultImageContainer = document.getElementById('result-image-container');
const resultImage = document.getElementById('result-image');
const dialogBubble = document.getElementById('dialog-bubble');
const dialogText = document.getElementById('dialog-text');
const gameEndScreen = document.getElementById('game-end-screen');
const gameEndText = document.getElementById('game-end-text');
const knightWinningImg = document.getElementById('knight-winning-img');
const mageLosingImg = document.getElementById('mage-losing-img');
const titanicScene = document.getElementById('titanic-scene');
const titanicVideo = document.getElementById('titanic-video');
const titanicDialogContainer = document.getElementById('titanic-dialog-container');
const titanicDialogBox = document.getElementById('titanic-dialog-box');
const titanicDialogText = document.getElementById('titanic-dialog-text');
const frenchgirlScene = document.getElementById('frenchgirl-scene');
const frenchgirlVideo = document.getElementById('frenchgirl-video');
const frenchgirlDialogContainer = document.getElementById('frenchgirl-dialog-container');
const frenchgirlDialogBox = document.getElementById('frenchgirl-dialog-box');
const frenchgirlDialogText = document.getElementById('frenchgirl-dialog-text');
const kissingScene = document.getElementById('kissing-scene');
const kissingVideo = document.getElementById('kissing-video');

// Initialize
function init() {
    if (chapterConfig.background) {
        document.body.style.backgroundImage = `url('${chapterConfig.background}')`;
    }
    
    // Hide title screen after 2 seconds
    setTimeout(() => {
        titleScreen.style.display = 'none';
        showNextDialogue();
    }, 2000);
}

function showNextDialogue() {
    if (currentDialogue < dialogues.length) {
        const dialogue = dialogues[currentDialogue];
        
        if (dialogue.type === "title") {
            // Title already shown, skip
            currentDialogue++;
            showNextDialogue();
            return;
        }
        
        characterVideo.src = dialogue.video;
        characterVideo.classList.add('video-transition');
        dialogueElement.textContent = dialogue.text;
        dialogueElement.className = "";
        
        dialogueElement.style.opacity = '0';
        setTimeout(() => {
            dialogueElement.style.opacity = '1';
        }, 200);
        
        currentDialogue++;
        
        if (currentDialogue === dialogues.length) {
            instructions.style.display = 'none';
            setTimeout(() => {
                startGame();
            }, 2000);
        }
    }
}

function startGame() {
    dialoguePhase.style.display = 'none';
    gamePhase.style.display = 'flex';
    updateGameUI();
    enableChoices();
}

function updateGameUI() {
    playerScoreEl.textContent = gameState.playerScore;
    knightScoreEl.textContent = gameState.knightScore;
    roundInfoEl.textContent = `Ronda ${gameState.round}`;
    playerChoiceIcon.textContent = "?";
    knightChoiceIcon.textContent = "?";
    gameResult.textContent = "";
    // Make sure result image container is hidden
    hideResultImage();
    // Make sure choosing animation is hidden
    choosingAnimation.style.display = 'none';
}

function enableChoices() {
    gameState.gamePhase = "waiting";
    rockBtn.classList.remove('disabled');
    paperBtn.classList.remove('disabled');
    scissorsBtn.classList.remove('disabled');
    // Ensure buttons are clickable
    rockBtn.style.pointerEvents = 'auto';
    paperBtn.style.pointerEvents = 'auto';
    scissorsBtn.style.pointerEvents = 'auto';
}

function disableChoices() {
    rockBtn.classList.add('disabled');
    paperBtn.classList.add('disabled');
    scissorsBtn.classList.add('disabled');
    // Prevent clicks
    rockBtn.style.pointerEvents = 'none';
    paperBtn.style.pointerEvents = 'none';
    scissorsBtn.style.pointerEvents = 'none';
}

function getKnightChoice() {
    // Knight randomly chooses
    const options = ['rock', 'paper', 'scissors'];
    return options[Math.floor(Math.random() * options.length)];
}

function determineWinner(playerChoice, knightChoice) {
    if (playerChoice === knightChoice) {
        return 'tie';
    }
    if (choices[playerChoice].beats === knightChoice) {
        return 'player';
    }
    return 'knight';
}

function getLosingOption(winnerChoice) {
    // Get what the losing option was
    const options = ['rock', 'paper', 'scissors'];
    for (let option of options) {
        if (choices[option].beats === winnerChoice) {
            return option;
        }
    }
    return null;
}

function playRound(playerChoice) {
    if (gameState.gamePhase !== "waiting") return;
    
    disableChoices();
    gameState.currentPlayerChoice = playerChoice;
    gameState.currentKnightChoice = getKnightChoice();
    gameState.originalKnightChoice = gameState.currentKnightChoice;
    
    gameState.gamePhase = "choosing";
    
    // Show choosing animation
    showChoosingAnimation();
}

function showChoosingAnimation() {
    choosingAnimation.style.display = 'flex';
    
    // Hide after 3 seconds and slide out
    setTimeout(() => {
        const leftImg = document.querySelector('.choosing-left');
        const rightImg = document.querySelector('.choosing-right');
        
        if (leftImg && rightImg) {
            leftImg.style.animation = 'slideOutLeft 0.5s ease-out forwards';
            rightImg.style.animation = 'slideOutRight 0.5s ease-out forwards';
        }
        
        setTimeout(() => {
            choosingAnimation.style.display = 'none';
            // Reset animations
            if (leftImg && rightImg) {
                leftImg.style.animation = '';
                rightImg.style.animation = '';
            }
            
            // Show choices
            playerChoiceIcon.textContent = choices[gameState.currentPlayerChoice].emoji;
            knightChoiceIcon.textContent = choices[gameState.currentKnightChoice].emoji;
            
            gameState.gamePhase = "showing";
            
            setTimeout(() => {
                const winner = determineWinner(gameState.currentPlayerChoice, gameState.currentKnightChoice);
                showResult(winner);
            }, 1000);
        }, 500);
    }, 3000);
}

function showResult(winner) {
    gameState.gamePhase = "result";
    
    if (winner === 'tie') {
        showResultImage('mage-knight-empate.png', 'Empate. Otra vez.');
        setTimeout(() => {
            hideResultImage();
            gameState.round++;
            updateGameUI();
            enableChoices();
        }, 3000);
        return;
    }
    
    if (winner === 'player') {
        // Player wins - but knight will cheat!
        gameState.playerRealWins++;
        showResultImage('mage-winning-round.png', 'Ella: ¡Gané!');
        
        setTimeout(() => {
            hideResultImage();
            handleKnightCheating();
        }, 3000);
    } else {
        // Knight wins
        gameState.knightScore++;
        
        // Check if knight won 3 times
        if (gameState.knightScore >= 3) {
            showResultImage('mage-losing-round.png', 'Ella: No, he perdido esta ronda.');
            setTimeout(() => {
                hideResultImage();
                endGame();
            }, 3000);
        } else {
            showResultImage('mage-losing-round.png', 'Ella: No, he perdido esta ronda.');
            setTimeout(() => {
                hideResultImage();
                gameState.round++;
                updateGameUI();
                enableChoices();
            }, 3000);
        }
    }
}

function showResultImage(imageName, dialog) {
    resultImage.src = `../shared/${imageName}`;
    dialogText.textContent = dialog;
    resultImageContainer.style.display = 'flex';
}

function hideResultImage() {
    resultImageContainer.style.display = 'none';
}

function handleKnightCheating() {
    // Knight cheats by changing his choice
    const winningChoice = getWinningChoiceAgainst(gameState.currentPlayerChoice);
    gameState.currentKnightChoice = winningChoice;
    
    // Update display
    knightChoiceIcon.textContent = choices[gameState.currentKnightChoice].emoji;
    // Mage score stays at 0 (she never wins because knight cheats)
    gameState.playerScore = 0;
    gameState.knightScore++;
    
    // Update scores in UI immediately
    playerScoreEl.textContent = gameState.playerScore;
    knightScoreEl.textContent = gameState.knightScore;
    
    // Show knight cheating image
    showResultImage('knight-cheating.png', 'Caballero: Mira perdiste.');
    
    setTimeout(() => {
        hideResultImage();
        showResultImage('mage-winning-round.png', 'Ella: No, no perdí, yo gané.');
    }, 3000);
    
    setTimeout(() => {
        hideResultImage();
        showResultImage('knight-cheating.png', 'Caballero: No, yo gané, mira.');
    }, 6000);
    
    setTimeout(() => {
        hideResultImage();
        const losingOption = getLosingOption(gameState.currentPlayerChoice);
        const optionName = choices[losingOption].name;
        showResultImage('mage-losing-round.png', `Ella: Eso es trampa, tú habías elegido ${optionName}.`);
    }, 9000);
    
    setTimeout(() => {
        hideResultImage();
        showResultImage('knight-cheating.png', 'Caballero: ¿Dónde? ¿Cuándo? Jajajajaja.');
    }, 12000);
    
    setTimeout(() => {
        hideResultImage();
        
        // Check if knight won 3 times
        if (gameState.knightScore >= 3) {
            endGame();
        } else {
            gameState.round++;
            updateGameUI();
            enableChoices();
        }
    }, 15000);
}

// Titanic scene dialogs
const titanicDialogs = [
    {
        character: "Caballero",
        text: "Sujétate, no te sueltes. Con tus ojos cerrados."
    },
    {
        character: "Ella",
        text: "Jajajajaj"
    },
    {
        character: "Caballero",
        text: "Confía en mí."
    },
    {
        character: "Ella",
        text: "No, no confío en ti."
    },
    {
        character: "Caballero",
        text: "Entonces abre los ojos."
    },
    {
        character: "Ella",
        text: "Estoy volando jajajaja."
    },
    {
        character: "Caballero",
        text: "Ves, sabía que te gustaría."
    },
    {
        character: "Ella",
        text: "Me encanta. Aunque es cómico, tú y yo en la vida real le daría miedo esto."
    },
    {
        character: "Caballero",
        text: "Shhh, solo disfruta la vista jajajaj"
    }
];

let currentTitanicDialog = 0;

function showTitanicScene() {
    gameEndScreen.style.display = 'none';
    titanicScene.style.display = 'flex';
    
    // Play video
    titanicVideo.play().catch(e => {
        console.log('Video autoplay bloqueado');
    });
    
    // Reset dialog index
    currentTitanicDialog = 0;
    
    // Show first dialog
    showNextTitanicDialog();
}

function showNextTitanicDialog() {
    if (currentTitanicDialog < titanicDialogs.length) {
        const dialog = titanicDialogs[currentTitanicDialog];
        titanicDialogText.textContent = `${dialog.character}: ${dialog.text}`;
        
        // Fade in animation
        titanicDialogBox.style.opacity = '0';
        setTimeout(() => {
            titanicDialogBox.style.opacity = '1';
        }, 200);
        
        currentTitanicDialog++;
    } else {
        // All dialogs shown, go to french girl scene
        showFrenchGirlScene();
    }
}

// French Girl scene dialogs
const frenchgirlDialogs = [
    {
        character: "Ella",
        text: "No se supone que te debo pintar como una modelo francesa?"
    },
    {
        character: "Caballero",
        text: "Sí"
    },
    {
        character: "Ella",
        text: "Desnúdate pues"
    },
    {
        character: "Caballero",
        text: "Te tocará pintarme durmiendo así. Estoy muy agotado, crear estas escenas con IA no es fácil"
    },
    {
        character: "Ella",
        text: "Jajaja sí lo noté, cada vez nos parecemos menos a nuestros yo reales."
    },
    {
        character: "Caballero",
        text: "La IA apesta, sabes que vamos a la siguiente escena."
    }
];

let currentFrenchGirlDialog = 0;

function showFrenchGirlScene() {
    titanicScene.style.display = 'none';
    frenchgirlScene.style.display = 'flex';
    
    // Play video
    frenchgirlVideo.play().catch(e => {
        console.log('Video autoplay bloqueado');
    });
    
    // Reset dialog index
    currentFrenchGirlDialog = 0;
    
    // Show first dialog
    showNextFrenchGirlDialog();
}

function showNextFrenchGirlDialog() {
    if (currentFrenchGirlDialog < frenchgirlDialogs.length) {
        const dialog = frenchgirlDialogs[currentFrenchGirlDialog];
        frenchgirlDialogText.textContent = `${dialog.character}: ${dialog.text}`;
        
        // Fade in animation
        frenchgirlDialogBox.style.opacity = '0';
        setTimeout(() => {
            frenchgirlDialogBox.style.opacity = '1';
        }, 200);
        
        currentFrenchGirlDialog++;
    } else {
        // All dialogs shown, go to kissing scene
        showKissingScene();
    }
}

function showKissingScene() {
    frenchgirlScene.style.display = 'none';
    kissingScene.style.display = 'flex';
    
    // Play video
    kissingVideo.play().catch(e => {
        console.log('Video autoplay bloqueado');
    });
    
    // Stay in part 4 - wait for next instruction
}

function endGame() {
    gameState.gamePhase = "ended";
    gamePhase.style.display = 'none';
    gameEndScreen.style.display = 'flex';
    
    // Dialog sequence state
    let dialogIndex = 0;
    
    function showNextDialog() {
        if (dialogIndex === 0) {
            // Knight speaking
            knightWinningImg.style.display = 'block';
            mageLosingImg.style.display = 'none';
            gameEndText.textContent = 'Caballero: He ganado honesta y justamente.';
            dialogIndex++;
        } else if (dialogIndex === 1) {
            // Mage speaking
            knightWinningImg.style.display = 'none';
            mageLosingImg.style.display = 'block';
            gameEndText.textContent = 'Ella: ¡TRAMPOSOOOOO!!';
            dialogIndex++;
        } else if (dialogIndex === 2) {
            // Knight speaking again
            knightWinningImg.style.display = 'block';
            mageLosingImg.style.display = 'none';
            gameEndText.textContent = 'Caballero: Ganar es ganar, no importa si por mucho o por poco. Ahora vamos al viaje que yo elegí.';
            dialogIndex++;
        } else {
            // Show titanic scene
            showTitanicScene();
        }
    }
    
    // Remove any existing click handlers and add new one
    const newHandler = showNextDialog;
    gameEndScreen.removeEventListener('click', newHandler);
    gameEndScreen.addEventListener('click', newHandler);
    
    // Show first dialog
    showNextDialog();
}

function getWinningChoiceAgainst(choice) {
    // Get what beats the given choice
    const options = ['rock', 'paper', 'scissors'];
    for (let option of options) {
        if (choices[option].beats === choice) {
            return option;
        }
    }
    return null;
}

// Event listeners
document.addEventListener('click', (e) => {
    if (dialoguePhase.style.display !== 'none') {
        if (currentDialogue < dialogues.length) {
            showNextDialogue();
        }
    }
});

// Touch events for mobile
rockBtn.addEventListener('touchstart', (e) => {
    e.preventDefault();
    playRound('rock');
});

paperBtn.addEventListener('touchstart', (e) => {
    e.preventDefault();
    playRound('paper');
});

scissorsBtn.addEventListener('touchstart', (e) => {
    e.preventDefault();
    playRound('scissors');
});

// Click events (for desktop)
rockBtn.addEventListener('click', () => playRound('rock'));
paperBtn.addEventListener('click', () => playRound('paper'));
scissorsBtn.addEventListener('click', () => playRound('scissors'));

window.addEventListener('load', () => {
    init();
    
    characterVideo.play().catch(e => {
        console.log('Autoplay bloqueado');
    });
});

characterVideo.addEventListener('loadeddata', () => {
    characterVideo.play().catch(e => {
        console.log('Video listo');
    });
});

characterVideo.addEventListener('transitionend', () => {
    characterVideo.classList.remove('video-transition');
});

// Prevent context menu and zoom
document.addEventListener('touchstart', function(event) {
    if (event.touches.length > 1) {
        event.preventDefault();
    }
}, { passive: false });

let lastTouchEnd = 0;
document.addEventListener('touchend', function(event) {
    const now = (new Date()).getTime();
    if (now - lastTouchEnd <= 300) {
        event.preventDefault();
    }
    lastTouchEnd = now;
}, false);

document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
});

// Click handler for titanic scene
if (titanicScene) {
    titanicScene.addEventListener('click', () => {
        if (currentTitanicDialog < titanicDialogs.length) {
            showNextTitanicDialog();
        }
    });
}

// Click handler for french girl scene
if (frenchgirlScene) {
    frenchgirlScene.addEventListener('click', () => {
        if (currentFrenchGirlDialog < frenchgirlDialogs.length) {
            showNextFrenchGirlDialog();
        }
    });
}
