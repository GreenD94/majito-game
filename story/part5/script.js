// Diálogos de la Parte 5 - El Juego de las Copas
const dialogues = [
    {
        type: "title",
        text: "Parte 5: El Juego de las Copas"
    },
    {
        character: "Caballero",
        text: "Vamos a elegir una cita como personas adultas.",
        video: "../shared/him-knight-talking.mp4"
    },
    {
        character: "Maga",
        text: "¿Personas adultas? Lo decidimos en el siguiente duelo.",
        video: "../shared/her-wizard-talking.mp4"
    }
];

const chapterConfig = {
    background: "../shared/flower_background.png",
};

// Setup images sequence
const setupImages = [
    {
        image: "../shared/mage-summoning-table.png",
        text: "Maga: ¡Sí! *Conjura una mesa con magia*"
    },
    {
        image: "../shared/knight-marvel-reaction.png",
        text: "Caballero: ¿Qué es eso????"
    },
    {
        image: "../shared/mage-summoning-table.png",
        text: "Maga: Una mesa, obviamente. ¡Sí!"
    },
    {
        image: "../shared/knight-marvel-reaction.png",
        text: "Caballero: ¡Wow! ¡Increíble!"
    },
    {
        image: "../shared/mage-summoning-cups.png",
        text: "Maga: ¡Sí! *Conjura las copas*"
    },
    {
        image: "../shared/knight-marvel-reaction.png",
        text: "Caballero: ¡Asombroso!"
    },
    {
        image: "../shared/mage-summoning-ball.png",
        text: "Maga: ¡Perfecto! *Conjura la pelota*"
    },
    {
        image: "../shared/knight-marvel-reaction.png",
        text: "Caballero: ¡Increíble! ¡Eres increíble!"
    },
    {
        image: "../shared/both-at-table.png",
        text: "Maga: El caballero debe esconder la pelota dentro de una copa y reorganizar las copas. Yo debo adivinar dónde está. Debo adivinar correctamente 3 veces."
    }
];

// Game state
const gameState = {
    round: 1,
    mageScore: 0,
    knightScore: 0,
    cups: 2, // Start with 2 cups, increase by 2 each round
    ballPosition: 0,
    isCheating: false,
    gamePhase: "waiting", // waiting, rearranging, choosing, result
    round1Scripted: true
};

// DOM elements
let currentDialogue = 0;
const titleScreen = document.getElementById('title-screen');
const dialoguePhase = document.getElementById('dialogue-phase');
const setupPhase = document.getElementById('setup-phase');
const gamePhase = document.getElementById('game-phase');
const gameStateImage = document.getElementById('game-state-image');
const finalSequence = document.getElementById('final-sequence');
const finalAnimation = document.getElementById('final-animation');

const dialogueElement = document.getElementById('dialogue-text');
const characterVideo = document.getElementById('character-video');
const instructions = document.getElementById('instructions');

const setupImage = document.getElementById('setup-image');
const setupText = document.getElementById('setup-text');

const mageScoreEl = document.getElementById('mage-score');
const knightScoreEl = document.getElementById('knight-score');
const roundInfoEl = document.getElementById('round-info');
const cupsContainer = document.getElementById('cups-container');
const ballDisplay = document.getElementById('ball-display');
const empezarBtn = document.getElementById('empezar-btn');
const cheatBtn = document.getElementById('cheat-btn');

const stateImage = document.getElementById('state-image');
const stateText = document.getElementById('state-text');

const finalImage = document.getElementById('final-image');
const finalText = document.getElementById('final-text');
const finalContinueBtn = document.getElementById('final-continue-btn');
const animationContinueBtn = document.getElementById('animation-continue-btn');
const finalVideo = document.getElementById('final-video');

// Initialize
function init() {
    if (chapterConfig.background) {
        document.body.style.backgroundImage = `url('${chapterConfig.background}')`;
    }
    
    setTimeout(() => {
        titleScreen.style.display = 'none';
        showNextDialogue();
    }, 2000);
}

function showNextDialogue() {
    if (currentDialogue < dialogues.length) {
        const dialogue = dialogues[currentDialogue];
        
        if (dialogue.type === "title") {
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
                showSetupSequence();
            }, 2000);
        }
    }
}

let currentSetupImage = 0;
function showSetupSequence() {
    dialoguePhase.style.display = 'none';
    setupPhase.style.display = 'flex';
    
    if (currentSetupImage < setupImages.length) {
        const setup = setupImages[currentSetupImage];
        setupImage.src = setup.image;
        setupText.textContent = setup.text;
        currentSetupImage++;
    } else {
        // Setup complete, start game
        setTimeout(() => {
            setupPhase.style.display = 'none';
            startGame();
        }, 2000);
    }
}

function startGame() {
    gamePhase.style.display = 'flex';
    updateGameUI();
    createCups();
}

function updateGameUI() {
    mageScoreEl.textContent = gameState.mageScore;
    knightScoreEl.textContent = gameState.knightScore;
    roundInfoEl.textContent = `Ronda ${gameState.round}`;
    
    // Show cheat button from round 2 onwards
    if (gameState.round >= 2) {
        cheatBtn.style.display = 'block';
    } else {
        cheatBtn.style.display = 'none';
    }
}

function createCups() {
    cupsContainer.innerHTML = '';
    gameState.ballPosition = Math.floor(Math.random() * gameState.cups);
    
    for (let i = 0; i < gameState.cups; i++) {
        const cup = document.createElement('div');
        cup.className = 'cup';
        cup.dataset.index = i;
        
        const ballIndicator = document.createElement('div');
        ballIndicator.className = 'ball-indicator';
        cup.appendChild(ballIndicator);
        
        if (gameState.isCheating && i === gameState.ballPosition) {
            cup.classList.add('show-ball');
        }
        
        if (gameState.isCheating) {
            cup.classList.add('transparent');
        }
        
        cup.addEventListener('click', () => {
            const cupIndex = parseInt(cup.dataset.index);
            selectCup(cupIndex);
        });
        cupsContainer.appendChild(cup);
    }
    
    gameState.gamePhase = "waiting";
    empezarBtn.style.display = 'block';
}

function startRound() {
    empezarBtn.style.display = 'none';
    gameState.gamePhase = "rearranging";
    
    // Show knight rearranging image
    showGameStateImage('knight-rearranging-cups.png', 'Caballero: *Reorganizando las copas*');
    
    setTimeout(() => {
        hideGameStateImage();
        rearrangeCups();
    }, 2000);
}

function rearrangeCups() {
    // Move ball to random position
    gameState.ballPosition = Math.floor(Math.random() * gameState.cups);
    
    // Show ball going to cup
    const cups = cupsContainer.querySelectorAll('.cup');
    if (cups.length > 0) {
        const targetCup = cups[gameState.ballPosition];
        const cupRect = targetCup.getBoundingClientRect();
        const containerRect = cupsContainer.getBoundingClientRect();
        
        ballDisplay.style.left = `${cupRect.left - containerRect.left + cupRect.width / 2 - 30}px`;
        ballDisplay.style.top = `${cupRect.top - containerRect.top - 30}px`;
        ballDisplay.style.display = 'block';
        
        setTimeout(() => {
            ballDisplay.style.display = 'none';
            
            // Fast shuffle animation
            shuffleCups();
        }, 1000);
    }
}

function shuffleCups() {
    const cups = cupsContainer.querySelectorAll('.cup');
    
    // Track which cup (by current dataset.index) has the ball
    const ballCurrentIndex = gameState.ballPosition;
    
    // Create permutation: maps old position -> new position
    const permutation = Array.from({ length: gameState.cups }, (_, i) => i);
    
    // Shuffle the permutation multiple times
    for (let shuffle = 0; shuffle < 3; shuffle++) {
        for (let i = permutation.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [permutation[i], permutation[j]] = [permutation[j], permutation[i]];
        }
    }
    
    // Find where the ball cup will be after shuffle
    // permutation[oldIndex] = newIndex, so the cup at old position ballCurrentIndex
    // will be at new position permutation[ballCurrentIndex]
    const ballNewPosition = permutation[ballCurrentIndex];
    
    // Animate shuffle with multiple moves
    let moveCount = 0;
    const totalMoves = 5;
    
    function animateMove() {
        if (moveCount < totalMoves) {
            cups.forEach((cup, index) => {
                const randomOffset = (Math.random() - 0.5) * 200;
                cup.style.transition = 'transform 0.2s ease';
                cup.style.transform = `translateX(${randomOffset}px)`;
            });
            
            moveCount++;
            setTimeout(animateMove, 200);
        } else {
            // Reorder cups in DOM
            const cupsArray = Array.from(cups);
            cupsContainer.innerHTML = '';
            
            // permutation[i] tells us where cup at old position i should go
            // So we need to build an array that maps new position -> old cup
            const reorderedCups = [];
            for (let newPos = 0; newPos < gameState.cups; newPos++) {
                const oldPos = permutation.indexOf(newPos);
                reorderedCups[newPos] = cupsArray[oldPos];
            }
            
            // Add cups in new order
            reorderedCups.forEach((cup, newDomIndex) => {
                cup.dataset.index = newDomIndex;
                cup.style.transition = 'transform 0.3s ease';
                cup.style.transform = '';
                cupsContainer.appendChild(cup);
            });
            
            // Update ball position to new DOM index
            gameState.ballPosition = ballNewPosition;
            
            // Update cheat display if active
            if (gameState.isCheating) {
                updateCupsForCheat();
            }
            
            setTimeout(() => {
                cupsContainer.querySelectorAll('.cup').forEach(cup => {
                    cup.style.transition = '';
                });
                gameState.gamePhase = "choosing";
            }, 300);
        }
    }
    
    animateMove();
}

function selectCup(index) {
    if (gameState.gamePhase !== "choosing") return;
    
    // Round 1: Force correct choice
    if (gameState.round === 1 && gameState.round1Scripted) {
        if (index !== gameState.ballPosition) {
            // Wrong choice - show thinking image
            showGameStateImage('mage-thinking-wrong-option.png', 'Maga: Esa no es la opción correcta, no debería elegir eso.');
            setTimeout(() => {
                hideGameStateImage();
            }, 2000);
            return;
        }
    }
    
    // Check if cheating and wrong choice
    if (gameState.isCheating && index !== gameState.ballPosition) {
        showGameStateImage('mage-saying-wrong-cup.png', 'Maga: Esa no es la copa correcta, deberíamos elegir la correcta.');
        setTimeout(() => {
            hideGameStateImage();
        }, 2000);
        return;
    }
    
    // Check if not cheating and wrong choice (round 2+)
    if (!gameState.isCheating && gameState.round >= 2 && index !== gameState.ballPosition) {
        showGameStateImage('mage-saying-should-cheat.png', 'Maga: Deberíamos hacer trampa, no perderé esta ronda.');
        setTimeout(() => {
            hideGameStateImage();
        }, 2000);
        return;
    }
    
    // Correct choice
    if (index === gameState.ballPosition) {
        handleCorrectChoice();
    } else {
        handleWrongChoice();
    }
}

function handleCorrectChoice() {
    gameState.gamePhase = "result";
    
    // Show mage guessing correct
    showGameStateImage('mage-guessing-correct.png', 'Maga: ¡Correcto!');
    
    setTimeout(() => {
        hideGameStateImage();
        
        // Round 1 special handling
        if (gameState.round === 1 && gameState.round1Scripted) {
            handleRound1Cheating();
        } else {
            // Normal win
            gameState.mageScore++;
            updateGameUI();
            
            if (gameState.mageScore >= 3) {
                endGame();
            } else {
                nextRound();
            }
        }
    }, 2000);
}

function handleRound1Cheating() {
    // Show knight cheating
    showGameStateImage('knight-cheating-cups.png', 'Caballero: *Haciendo trampa*');
    
    setTimeout(() => {
        hideGameStateImage();
        gameState.knightScore++;
        updateGameUI();
        
        // Show mage realizing
        showGameStateImage('mage-realizing-cheat.png', 'Maga: ¡Hizo trampa!');
        
        setTimeout(() => {
            hideGameStateImage();
            
            // Show mage thinking about cheating
            showGameStateImage('mage-thinking-can-cheat.png', 'Maga: Oye, yo también puedo hacer trampa.');
            
            setTimeout(() => {
                hideGameStateImage();
                gameState.round1Scripted = false;
                gameState.round = 2;
                gameState.cups = 4;
                gameState.isCheating = false;
                nextRound();
            }, 2000);
        }, 2000);
    }, 2000);
}

function handleWrongChoice() {
    gameState.knightScore++;
    updateGameUI();
    
    // Show knight lamenting (ironic)
    showGameStateImage('knight-lamenting-loss.png', 'Caballero: ¡Gané!');
    
    setTimeout(() => {
        hideGameStateImage();
        nextRound();
    }, 2000);
}

function nextRound() {
    gameState.round++;
    gameState.cups += 2;
    gameState.isCheating = false;
    gameState.gamePhase = "waiting";
    
    updateGameUI();
    createCups();
}

function toggleCheat() {
    if (gameState.round < 2) return;
    
    gameState.isCheating = !gameState.isCheating;
    
    if (gameState.isCheating) {
        // Show third eye tattoo
        showGameStateImage('mage-third-eye-tattoo.png', 'Maga: *Activa el tercer ojo mágico*');
        
        setTimeout(() => {
            hideGameStateImage();
            updateCupsForCheat();
        }, 2000);
    } else {
        updateCupsForCheat();
    }
}

function updateCupsForCheat() {
    const cups = cupsContainer.querySelectorAll('.cup');
    cups.forEach((cup) => {
        const cupIndex = parseInt(cup.dataset.index);
        if (gameState.isCheating) {
            cup.classList.add('transparent');
            if (cupIndex === gameState.ballPosition) {
                cup.classList.add('show-ball');
            } else {
                cup.classList.remove('show-ball');
            }
        } else {
            cup.classList.remove('transparent', 'show-ball');
        }
    });
}

function showGameStateImage(imageName, text) {
    stateImage.src = `../shared/${imageName}`;
    stateText.textContent = text;
    gameStateImage.style.display = 'flex';
}

function hideGameStateImage() {
    gameStateImage.style.display = 'none';
}

function endGame() {
    gamePhase.style.display = 'none';
    finalSequence.style.display = 'flex';
    
    // Show mage winning with sarcastic dialogue
    finalImage.src = '../shared/mage-winning-game.png';
    finalText.textContent = 'Maga: ¡Gané! ¡Tres veces seguidas!';
    
    setTimeout(() => {
        finalImage.src = '../shared/knight-losing-game.png';
        finalText.textContent = 'Caballero: Perdí...';
        
        setTimeout(() => {
            finalImage.src = '../shared/mage-winning-game.png';
            finalText.textContent = 'Maga: ¿Y ahora qué? ¿Vas a hacer trampa otra vez?';
            
            setTimeout(() => {
                finalImage.src = '../shared/knight-losing-game.png';
                finalText.textContent = 'Caballero: No... esta vez perdí justamente.';
                
                setTimeout(() => {
                    finalImage.src = '../shared/mage-winning-game.png';
                    finalText.textContent = 'Maga: Jajaja, claro. "Justamente". Como si no hubieras intentado hacer trampa en la primera ronda.';
                    
                    setTimeout(() => {
                        finalImage.src = '../shared/knight-losing-game.png';
                        finalText.textContent = 'Caballero: Bueno... tienes razón.';
                        
                        setTimeout(() => {
                            finalImage.src = '../shared/mage-winning-game.png';
                            finalText.textContent = 'Maga: Por supuesto que tengo razón. Ahora vamos a donde YO quiero.';
                            
                            setTimeout(() => {
                                finalContinueBtn.style.display = 'block';
                            }, 2000);
                        }, 2000);
                    }, 2000);
                }, 2000);
            }, 2000);
        }, 2000);
    }, 2000);
}

let finalSequenceIndex = 0;
const finalSequences = [
    {
        image: '../shared/mage-convincing-dragon.png',
        text: 'Maga: Vamos a volar dragones juntos.'
    },
    {
        image: '../shared/knight-afraid-dragon.png',
        text: 'Caballero: Tengo miedo de las alturas...'
    },
    {
        image: '../shared/mage-convincing-dragon.png',
        text: 'Maga: No seas cobarde. Es divertido.'
    },
    {
        image: '../shared/knight-afraid-dragon.png',
        text: 'Caballero: ¿Divertido? ¡Estamos a mil metros de altura!'
    },
    {
        image: '../shared/mage-convincing-dragon.png',
        text: 'Maga: Exacto. Divertido. Vamos.'
    }
];

function showNextFinalSequence() {
    if (finalSequenceIndex < finalSequences.length) {
        const seq = finalSequences[finalSequenceIndex];
        finalImage.src = seq.image;
        finalText.textContent = seq.text;
        finalContinueBtn.style.display = 'none';
        finalSequenceIndex++;
        
        setTimeout(() => {
            finalContinueBtn.style.display = 'block';
        }, 2000);
    } else if (finalSequenceIndex === finalSequences.length) {
        // Show flying dragon animation with dialogue
        finalSequence.style.display = 'none';
        finalAnimation.style.display = 'flex';
        finalVideo.src = '../shared/both-flying-dragon.mp4';
        finalVideo.play();
        
        // Add dialogue overlay for flying scene
        let flyingDialogIndex = 0;
        const flyingDialogs = [
            { text: 'Caballero: ¡AAAAH! ¡Esto es muy alto!', delay: 2000 },
            { text: 'Maga: Relájate, no te vas a caer.', delay: 4000 },
            { text: 'Caballero: ¡Pero miro hacia abajo y veo el vacío!', delay: 6000 },
            { text: 'Maga: Entonces no mires hacia abajo. Mira el paisaje.', delay: 8000 },
            { text: 'Caballero: ...Está bien, es hermoso.', delay: 10000 },
            { text: 'Maga: Te lo dije. Jajaja.', delay: 12000 }
        ];
        
        flyingDialogs.forEach(dialog => {
            setTimeout(() => {
                if (finalSequenceIndex === finalSequences.length) {
                    // Show dialogue overlay
                    const dialogOverlay = document.createElement('div');
                    dialogOverlay.style.cssText = 'position: absolute; bottom: 20%; left: 50%; transform: translateX(-50%); background: rgba(0,0,0,0.85); border: 3px solid #ff69b4; border-radius: 20px; padding: 20px 30px; max-width: 80%; z-index: 100;';
                    dialogOverlay.innerHTML = `<p style="color: white; font-size: 20px; font-weight: bold; text-align: center; margin: 0; text-shadow: 2px 2px 4px rgba(0,0,0,0.9);">${dialog.text}</p>`;
                    finalAnimation.appendChild(dialogOverlay);
                    
                    setTimeout(() => {
                        if (dialogOverlay.parentNode) {
                            dialogOverlay.remove();
                        }
                    }, 2000);
                }
            }, dialog.delay);
        });
        
        setTimeout(() => {
            animationContinueBtn.style.display = 'block';
        }, 14000);
        finalSequenceIndex++;
    } else if (finalSequenceIndex === finalSequences.length + 1) {
        // Show cleaning dragons with dialogue
        finalAnimation.style.display = 'none';
        finalSequence.style.display = 'flex';
        finalImage.src = '../shared/both-cleaning-dragons.png';
        finalText.textContent = 'Maga: Ahora hay que limpiarlos.';
        finalContinueBtn.style.display = 'none';
        
        setTimeout(() => {
            finalText.textContent = 'Caballero: ¿Por qué yo también tengo que limpiar?';
            
            setTimeout(() => {
                finalText.textContent = 'Maga: Porque volaste conmigo. Es parte del trato.';
                
                setTimeout(() => {
                    finalText.textContent = 'Caballero: No recuerdo haber aceptado ese trato...';
                    
                    setTimeout(() => {
                        finalText.textContent = 'Maga: Pues ahora sí. Limpia.';
                        
                        setTimeout(() => {
                            finalContinueBtn.style.display = 'block';
                        }, 2000);
                    }, 2000);
                }, 2000);
            }, 2000);
        }, 2000);
        finalSequenceIndex++;
    } else if (finalSequenceIndex === finalSequences.length + 2) {
        // Show drowning animation with dialogue
        finalSequence.style.display = 'none';
        finalAnimation.style.display = 'flex';
        finalVideo.src = '../shared/mage-drowning-knight.mp4';
        finalVideo.play();
        
        // Add dialogue overlay for drowning scene
        const drowningDialogs = [
            { text: 'Maga: ¡Vamos al agua!', delay: 1000 },
            { text: 'Caballero: ¡Espera! ¡No sé nadar bien!', delay: 3000 },
            { text: 'Maga: ¡Demasiado tarde! Jajaja.', delay: 5000 },
            { text: 'Caballero: ¡GLU GLU GLU!', delay: 7000 },
            { text: 'Maga: Relájate, no te vas a ahogar. Es parte de la diversión.', delay: 9000 }
        ];
        
        drowningDialogs.forEach(dialog => {
            setTimeout(() => {
                if (finalSequenceIndex === finalSequences.length + 2) {
                    const dialogOverlay = document.createElement('div');
                    dialogOverlay.style.cssText = 'position: absolute; bottom: 20%; left: 50%; transform: translateX(-50%); background: rgba(0,0,0,0.85); border: 3px solid #ff69b4; border-radius: 20px; padding: 20px 30px; max-width: 80%; z-index: 100;';
                    dialogOverlay.innerHTML = `<p style="color: white; font-size: 20px; font-weight: bold; text-align: center; margin: 0; text-shadow: 2px 2px 4px rgba(0,0,0,0.9);">${dialog.text}</p>`;
                    finalAnimation.appendChild(dialogOverlay);
                    
                    setTimeout(() => {
                        if (dialogOverlay.parentNode) {
                            dialogOverlay.remove();
                        }
                    }, 2000);
                }
            }, dialog.delay);
        });
        
        setTimeout(() => {
            animationContinueBtn.style.display = 'block';
        }, 11000);
        finalSequenceIndex++;
    } else if (finalSequenceIndex === finalSequences.length + 3) {
        // Show final image with dialogue
        finalAnimation.style.display = 'none';
        finalSequence.style.display = 'flex';
        finalImage.src = '../shared/mage-happy-date.png';
        finalText.textContent = 'Maga: Estoy feliz por nuestra cita.';
        finalContinueBtn.style.display = 'none';
        
        setTimeout(() => {
            finalText.textContent = 'Caballero: Yo también... aunque casi me ahogas.';
            
            setTimeout(() => {
                finalText.textContent = 'Maga: Jajaja, pero sobreviviste. Eso es lo importante.';
                
                setTimeout(() => {
                    finalText.textContent = 'Caballero: Sí... supongo que sí.';
                    
                    setTimeout(() => {
                        finalText.textContent = 'Maga: Y ahora...';
                        
                        setTimeout(() => {
                            finalContinueBtn.style.display = 'block';
                        }, 2000);
                    }, 2000);
                }, 2000);
            }, 2000);
        }, 2000);
        finalSequenceIndex++;
    } else {
        // Show final kissing animation with dialogue
        finalSequence.style.display = 'none';
        finalAnimation.style.display = 'flex';
        finalVideo.src = '../shared/both-kissing-final.mp4';
        finalVideo.play();
        
        // Add dialogue overlay for kissing scene
        const kissingDialogs = [
            { text: 'Maga: Cierra los ojos.', delay: 1000 },
            { text: 'Caballero: ¿Por qué?', delay: 3000 },
            { text: 'Maga: Solo hazlo. Confía en mí.', delay: 5000 },
            { text: 'Caballero: ...Está bien.', delay: 7000 },
            { text: 'Maga: *Lo besa*', delay: 9000 },
            { text: 'Caballero: ...Wow.', delay: 11000 },
            { text: 'Maga: Jajaja, te gustó.', delay: 13000 },
            { text: 'Caballero: ...Sí. Sí me gustó.', delay: 15000 }
        ];
        
        kissingDialogs.forEach(dialog => {
            setTimeout(() => {
                const dialogOverlay = document.createElement('div');
                dialogOverlay.style.cssText = 'position: absolute; bottom: 20%; left: 50%; transform: translateX(-50%); background: rgba(0,0,0,0.85); border: 3px solid #ff69b4; border-radius: 20px; padding: 20px 30px; max-width: 80%; z-index: 100;';
                dialogOverlay.innerHTML = `<p style="color: white; font-size: 20px; font-weight: bold; text-align: center; margin: 0; text-shadow: 2px 2px 4px rgba(0,0,0,0.9);">${dialog.text}</p>`;
                finalAnimation.appendChild(dialogOverlay);
                
                setTimeout(() => {
                    if (dialogOverlay.parentNode) {
                        dialogOverlay.remove();
                    }
                }, 2000);
            }, dialog.delay);
        });
        
        setTimeout(() => {
            animationContinueBtn.style.display = 'block';
        }, 17000);
    }
}

// Event listeners
document.addEventListener('click', (e) => {
    if (dialoguePhase.style.display !== 'none') {
        if (currentDialogue < dialogues.length) {
            showNextDialogue();
        }
    } else if (setupPhase.style.display !== 'none') {
        showSetupSequence();
    }
});

empezarBtn.addEventListener('click', startRound);
cheatBtn.addEventListener('click', toggleCheat);
finalContinueBtn.addEventListener('click', showNextFinalSequence);
animationContinueBtn.addEventListener('click', showNextFinalSequence);

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
