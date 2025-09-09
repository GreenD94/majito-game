// Diálogos del juego con información del personaje
const dialogues = [
    {
        character: "Majito",
        text: "¿Tú sabías que las palomas son drones del gobierno? 🤨",
        video: "she-talk.mp4"
    },
    {
        character: "Hernando",
        text: "Jajajaja cállate, marica. Si fueran drones ya me hubieran hackeado la vida entera.",
        video: "he-talks.mp4"
    },
    {
        character: "Majito",
        text: "Capaz ya lo hicieron… por eso siempre te enfermas, te controlan desde la CIA.",
        video: "she-talk.mp4"
    },
    {
        character: "Hernando",
        text: "🙄🙄🙄 No, eso es tu culpa, tú me pegaste la gripe con tu envidia.",
        video: "he-talks.mp4"
    },
    {
        character: "Majito",
        text: "JAJAJA cállate, nadie te envidia nada.",
        video: "she-talk.mp4"
    },
    {
        character: "Hernando",
        text: "Cómo que no, si hasta tu tos quiere imitar la mía.",
        video: "he-talks.mp4"
    },
    {
        character: "Majito",
        text: "Te odio.",
        video: "she-talk.mp4"
    },
    {
        character: "Hernando",
        text: "Ya empezamos con eso otra vez. Mira que yo sobrevivo con tu odio, pero igual me duele.",
        video: "he-talks.mp4"
    },
    {
        character: "Majito",
        text: "Bueno, qué quieres que te diga pues.",
        video: "she-talk.mp4"
    },
    {
        character: "Hernando",
        text: "Bueno… en verdad sí quiero que me digas algo. O sea… yo sé que siempre estamos con el chalequeo, los \"te odio\", el sarcasmo y todo eso… pero… (pausa) la verdad es que contigo me siento diferente.",
        video: "he-talks.mp4"
    },
    {
        character: "Majito",
        text: "😏 Mmmm, diferente cómo?",
        video: "she-talk.mp4"
    },
    {
        character: "Hernando",
        text: "Como que… no sé… eres la persona con la que más disfruto pelear y al mismo tiempo la única con la que me provoca estar tranquilo.\nY… verga, ya lo voy a soltar porque si no me va a dar un infarto:",
        video: "he-talks.mp4"
    },
    {
        character: "Hernando",
        text: "¿Quieres ser mi novia? ❤️",
        video: "he-talks.mp4"
    }
];

let currentDialogue = 0;
const dialogueElement = document.getElementById('dialogue-text');
const characterNameElement = document.getElementById('character-name');
const characterVideo = document.getElementById('character-video');
const finalButtons = document.getElementById('final-buttons');
const yesButton = document.getElementById('yes-btn');
const noButton = document.getElementById('no-btn');
const heartsContainer = document.getElementById('hearts');
const instructions = document.getElementById('instructions');

// Función para mostrar el siguiente diálogo
function showNextDialogue() {
    if (currentDialogue < dialogues.length) {
        const dialogue = dialogues[currentDialogue];
        
        // Actualizar video
        characterVideo.src = dialogue.video;
        characterVideo.classList.add('video-transition');
        
        // Actualizar texto del diálogo
        dialogueElement.textContent = dialogue.text;
        
        // Efecto de transición
        dialogueElement.style.opacity = '0';
        setTimeout(() => {
            dialogueElement.style.opacity = '1';
        }, 200);
        
        currentDialogue++;
        
        // Si es el último diálogo, mostrar botones finales
        if (currentDialogue === dialogues.length) {
            instructions.style.display = 'none';
            setTimeout(() => {
                finalButtons.style.display = 'flex';
                createHearts();
            }, 2000);
        }
    }
}

// Función para crear corazones flotantes
function createHearts() {
    const heartSymbols = ['💕', '💖', '💗', '💘', '💝', '💞', '💟', '💓', '💔', '💋'];
    
    setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.textContent = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDelay = Math.random() * 2 + 's';
        heartsContainer.appendChild(heart);
        
        // Remover el corazón después de la animación
        setTimeout(() => {
            heart.remove();
        }, 4000);
    }, 600);
}

// Función para cuando dice SÍ
function handleYes() {
    // Ocultar todo el contenido del juego
    document.querySelector('.game-container').style.display = 'none';
    
    // Crear la pantalla de final feliz
    createHappyEnding();
}

// Función para crear la pantalla de final feliz
function createHappyEnding() {
    // Crear el contenedor principal
    const happyEndingDiv = document.createElement('div');
    happyEndingDiv.className = 'happy-ending';
    
    // Crear el contenedor de felicitaciones
    const congratulationsContainer = document.createElement('div');
    congratulationsContainer.className = 'congratulations-container';
    
    // Crear el título principal
    const title = document.createElement('div');
    title.className = 'congratulations-title';
    title.textContent = '¡FELICIDADES!';
    
    // Crear el subtítulo
    const subtitle = document.createElement('div');
    subtitle.className = 'congratulations-subtitle';
    subtitle.textContent = '¡Ahora son novios! 💕';
    
    // Crear contenedor de corazones
    const heartsContainer = document.createElement('div');
    heartsContainer.className = 'happy-hearts';
    
    // Agregar elementos al contenedor
    congratulationsContainer.appendChild(title);
    congratulationsContainer.appendChild(subtitle);
    happyEndingDiv.appendChild(congratulationsContainer);
    happyEndingDiv.appendChild(heartsContainer);
    
    // Agregar al body
    document.body.appendChild(happyEndingDiv);
    
    // Crear corazones animados
    createHappyHearts(heartsContainer);
}

// Función para crear corazones de celebración
function createHappyHearts(container) {
    const heartSymbols = ['💕', '💖', '💗', '💘', '💝', '💞', '💟', '💓', '💔', '💋', '❤️', '💙', '💚', '💛', '🧡', '💜'];
    
    // Crear muchos corazones iniciales
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.className = 'happy-heart';
            heart.textContent = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
            heart.style.left = Math.random() * 100 + '%';
            heart.style.animationDelay = Math.random() * 2 + 's';
            heart.style.animationDuration = (3 + Math.random() * 2) + 's';
            container.appendChild(heart);
            
            // Remover el corazón después de la animación
            setTimeout(() => {
                if (heart.parentNode) {
                    heart.remove();
                }
            }, 5000);
        }, i * 100);
    }
    
    // Continuar creando corazones periódicamente
    setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'happy-heart';
        heart.textContent = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDelay = '0s';
        heart.style.animationDuration = (3 + Math.random() * 2) + 's';
        container.appendChild(heart);
        
        setTimeout(() => {
            if (heart.parentNode) {
                heart.remove();
            }
        }, 5000);
    }, 800);
}

// Función para cuando dice NO
function handleNo() {
    // Ocultar todo el contenido del juego
    document.querySelector('.game-container').style.display = 'none';
    
    // Crear la pantalla de mini-juego difícil
    createDifficultMiniGame();
}

// Función para crear el mini-juego difícil
function createDifficultMiniGame() {
    // Crear el contenedor principal con fondo triste
    const sadEndingDiv = document.createElement('div');
    sadEndingDiv.className = 'sad-ending';
    
    // Crear botón SÍ centrado
    const centeredYesBtn = document.createElement('button');
    centeredYesBtn.className = 'centered-yes-button';
    centeredYesBtn.textContent = '¡SÍ! 💕';
    centeredYesBtn.onclick = () => {
        // Limpiar pantalla triste
        document.body.removeChild(sadEndingDiv);
        // Proceder con el final feliz
        createHappyEnding();
    };
    
    // Crear botón NO que se mueve
    const movingNoBtn = document.createElement('button');
    movingNoBtn.className = 'moving-no-button';
    movingNoBtn.textContent = 'No 😢';
    movingNoBtn.onclick = () => {
        showBetterLuckMessage();
    };
    
    // Agregar botones al contenedor
    sadEndingDiv.appendChild(centeredYesBtn);
    sadEndingDiv.appendChild(movingNoBtn);
    
    // Agregar al body
    document.body.appendChild(sadEndingDiv);
    
    // Hacer que el botón NO se mueva de forma más agresiva
    makeNoButtonReallyHard(movingNoBtn);
}

// Función para hacer el botón NO súper difícil de tocar
function makeNoButtonReallyHard(button) {
    let moveInterval;
    let isMoving = false;
    
    const moveButton = () => {
        if (!isMoving) return;
        
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;
        const buttonWidth = 150; // Aproximado
        const buttonHeight = 60; // Aproximado
        
        // Calcular posición aleatoria evitando el centro donde está el botón SÍ
        let x, y;
        do {
            x = Math.random() * (screenWidth - buttonWidth);
            y = Math.random() * (screenHeight - buttonHeight);
        } while (
            // Evitar el área central donde está el botón SÍ
            (x > screenWidth/2 - 100 && x < screenWidth/2 + 100 && 
             y > screenHeight/2 - 50 && y < screenHeight/2 + 50)
        );
        
        button.style.left = x + 'px';
        button.style.top = y + 'px';
        button.style.position = 'fixed';
        button.style.transform = 'none';
    };
    
    // Iniciar movimiento súper rápido
    const startMoving = () => {
        isMoving = true;
        moveInterval = setInterval(moveButton, 100); // Mueve cada 100ms
    };
    
    // Detener movimiento temporalmente cuando se acerca el mouse/touch
    const stopMovingTemporarily = () => {
        isMoving = false;
        clearInterval(moveInterval);
        setTimeout(startMoving, 200); // Reanuda en 200ms
    };
    
    // Event listeners para hacer el botón más difícil
    button.addEventListener('mouseenter', stopMovingTemporarily);
    button.addEventListener('touchstart', stopMovingTemporarily);
    
    // Iniciar el movimiento
    startMoving();
}

// Función para mostrar mensaje de "mejor suerte la próxima vez"
function showBetterLuckMessage() {
    // Crear mensaje
    const messageDiv = document.createElement('div');
    messageDiv.className = 'better-luck-message';
    messageDiv.textContent = 'Lo siento, mejor suerte la próxima vez 😢';
    
    // Agregar al body
    document.body.appendChild(messageDiv);
    
    // Después de 3 segundos, recargar la página
    setTimeout(() => {
        location.reload();
    }, 3000);
}

// Event listeners para tocar la pantalla
document.addEventListener('click', (e) => {
    // No avanzar si se toca un botón
    if (e.target.tagName === 'BUTTON') return;
    
    if (currentDialogue < dialogues.length) {
        showNextDialogue();
    }
});

// Event listeners para los botones finales
yesButton.addEventListener('click', handleYes);
noButton.addEventListener('click', handleNo);

// Efecto de entrada
window.addEventListener('load', () => {
    dialogueElement.style.opacity = '0';
    setTimeout(() => {
        dialogueElement.style.opacity = '1';
    }, 500);
    
    // Reproducir el primer video
    characterVideo.play().catch(e => {
        console.log('Autoplay bloqueado, el usuario debe tocar para reproducir');
    });
});

// Prevenir zoom y otros gestos en móviles
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

// Prevenir menú contextual en móviles
document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
});

// Asegurar que el video se reproduzca cuando sea necesario
characterVideo.addEventListener('loadeddata', () => {
    characterVideo.play().catch(e => {
        console.log('Video listo para reproducir');
    });
});

// Efecto de transición del video
characterVideo.addEventListener('transitionend', () => {
    characterVideo.classList.remove('video-transition');
});