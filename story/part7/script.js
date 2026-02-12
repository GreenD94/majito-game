// Capítulo 7 - "6 Meses de Entrenamiento"
// Sin minijuego, solo diálogo e historia

// Todas las escenas y diálogos en orden
const allDialogues = [
    // ESCENA 1 - Decisión de entrenar
    {
        background: "../shared/gym-background.png",
        overlayAnimation: null,
        type: "character",
        image: "../shared/both-determined.png",
        text: "Necesitamos ser más fuertes. El Rey nos traicionó y no podemos permitir que gane."
    },
    {
        background: "../shared/gym-background.png",
        overlayAnimation: null,
        type: "character",
        image: "../shared/mage-intense.png",
        text: "Tienes razón. Necesitamos entrenar. ¿Cuánto tiempo crees que necesitamos?"
    },
    {
        background: "../shared/gym-background.png",
        overlayAnimation: null,
        type: "character",
        image: "../shared/knight-serious.png",
        text: "6 meses. 6 meses de entrenamiento intenso y estaremos listos para enfrentarlo."
    },
    {
        background: "../shared/gym-background.png",
        overlayAnimation: null,
        type: "character",
        image: "../shared/mage-intense.png",
        text: "6 meses... está bien. Pero si me aburro, te echo un hechizo."
    },
    {
        background: "../shared/gym-background.png",
        overlayAnimation: null,
        type: "character",
        image: "../shared/knight-serious.png",
        text: "Justo. Empecemos entonces."
    },
    
    // ESCENA 2 - Entrenamiento en el gimnasio juntos
    {
        background: "../shared/gym-background.png",
        overlayAnimation: null,
        type: "character",
        image: "../shared/boy-girl-training-at-gym.png",
        text: "Día 1. ¿Por qué esto es tan difícil?"
    },
    {
        background: "../shared/gym-background.png",
        overlayAnimation: null,
        type: "character",
        image: "../shared/boy-girl-training-at-gym.png",
        text: "Porque nunca has hecho ejercicio en tu vida, Maga."
    },
    {
        background: "../shared/gym-background.png",
        overlayAnimation: null,
        type: "character",
        image: "../shared/boy-girl-training-at-gym.png",
        text: "¡Yo hago magia! Eso cuenta como ejercicio mental."
    },
    {
        background: "../shared/gym-background.png",
        overlayAnimation: null,
        type: "character",
        image: "../shared/boy-girl-training-at-gym.png",
        text: "No, no cuenta. Ahora levanta esa pesa."
    },
    {
        background: "../shared/gym-background.png",
        overlayAnimation: null,
        type: "character",
        image: "../shared/boy-girl-training-at-gym.png",
        text: "¡Ugh! Esto es peor que luchar contra un dragón."
    },
    
    // ESCENA 3 - Corriendo juntos
    {
        background: "../shared/gym-background.png",
        overlayAnimation: null,
        type: "character",
        image: "../shared/boy-girl-running.png",
        text: "Día 30. ¿Por qué corremos si podemos volar?"
    },
    {
        background: "../shared/gym-background.png",
        overlayAnimation: null,
        type: "character",
        image: "../shared/boy-girl-running.png",
        text: "Porque la resistencia física es diferente a la magia."
    },
    {
        background: "../shared/gym-background.png",
        overlayAnimation: null,
        type: "character",
        image: "../shared/boy-girl-running.png",
        text: "Eso suena como algo que diría un profesor aburrido."
    },
    {
        background: "../shared/gym-background.png",
        overlayAnimation: null,
        type: "character",
        image: "../shared/boy-girl-running.png",
        text: "Sí, pero es verdad. Sigue corriendo."
    },
    {
        background: "../shared/gym-background.png",
        overlayAnimation: null,
        type: "character",
        image: "../shared/boy-girl-running.png",
        text: "¡Estoy muriendo! Pero... creo que me está gustando."
    },
    
    // ESCENA 4 - Maga entrenando boxeo
    {
        background: "../shared/gym-background.png",
        overlayAnimation: null,
        type: "character",
        image: "../shared/girl-training-boxing.png",
        text: "Día 90. He decidido que necesito aprender a pegar puñetazos."
    },
    {
        background: "../shared/gym-background.png",
        overlayAnimation: null,
        type: "character",
        image: "../shared/girl-training-boxing.png",
        text: "¿Y por qué?"
    },
    {
        background: "../shared/gym-background.png",
        overlayAnimation: null,
        type: "character",
        image: "../shared/girl-training-boxing.png",
        text: "Por si algún día me quedo sin magia. Quiero poder darle un puñetazo al Rey en la cara."
    },
    {
        background: "../shared/gym-background.png",
        overlayAnimation: null,
        type: "character",
        image: "../shared/girl-training-boxing.png",
        text: "Eso es... práctico. Te apoyo."
    },
    {
        background: "../shared/gym-background.png",
        overlayAnimation: null,
        type: "character",
        image: "../shared/girl-training-boxing.png",
        text: "¡Jajaja! Mira esto, ¡JAB! ¡CROSS! ¡UPPERCUT!"
    },
    
    // ESCENA 5 - 6 meses pasaron - Caballero fit
    {
        background: "../shared/gym-background.png",
        overlayAnimation: null,
        type: "character",
        image: "../shared/boy-fit.png",
        text: "6 meses después... ¡Lo logramos!"
    },
    {
        background: "../shared/gym-background.png",
        overlayAnimation: null,
        type: "character",
        image: "../shared/boy-fit.png",
        text: "Espera... ¿por qué me veo diferente? ¿Mejor calidad de arte?"
    },
    {
        background: "../shared/gym-background.png",
        overlayAnimation: null,
        type: "character",
        image: "../shared/boy-fit.png",
        text: "Y mi ropa... ¿cuándo compré esto? Se ve mucho mejor que antes."
    },
    
    // ESCENA 6 - Maga fit
    {
        background: "../shared/gym-background.png",
        overlayAnimation: null,
        type: "character",
        image: "../shared/girl-fit.png",
        text: "¡Yo también! Me veo... ¿más detallada? ¿Más profesional?"
    },
    {
        background: "../shared/gym-background.png",
        overlayAnimation: null,
        type: "character",
        image: "../shared/girl-fit.png",
        text: "Es como si alguien hubiera mejorado nuestros gráficos de repente."
    },
    {
        background: "../shared/gym-background.png",
        overlayAnimation: null,
        type: "character",
        image: "../shared/girl-fit.png",
        text: "¿Será que después de 6 meses de entrenamiento, merecemos mejor arte?"
    },
    {
        background: "../shared/gym-background.png",
        overlayAnimation: null,
        type: "character",
        image: "../shared/boy-fit.png",
        text: "Probablemente. Y mejor moda también. Me gusta este nuevo look."
    },
    {
        background: "../shared/gym-background.png",
        overlayAnimation: null,
        type: "character",
        image: "../shared/girl-fit.png",
        text: "A mí también. Aunque es un poco raro darse cuenta de que eres un personaje de videojuego."
    },
    
    // ESCENA 7 - Posing 1 (Video)
    {
        background: "../shared/gym-background.png",
        overlayAnimation: null,
        type: "fullAnimation",
        fullAnimation: "../shared/boy-girl-fit-posing1.mp4",
        text: "¡Mira qué fuertes estamos!"
    },
    
    // ESCENA 8 - Posing 2 (Video)
    {
        background: "../shared/gym-background.png",
        overlayAnimation: null,
        type: "fullAnimation",
        fullAnimation: "../shared/boy-girl-fit-posing2.mp4",
        text: "¡Estamos listos para cualquier cosa!"
    },
    
    // ESCENA 9 - Final - Listos para la venganza
    {
        background: "../shared/gym-background.png",
        overlayAnimation: null,
        type: "character",
        image: "../shared/both-determined.png",
        text: "6 meses de entrenamiento. 6 meses de preparación."
    },
    {
        background: "../shared/gym-background.png",
        overlayAnimation: null,
        type: "character",
        image: "../shared/mage-intense.png",
        text: "El Rey nos traicionó. Nos dejó por muertos. Se llevó el oro."
    },
    {
        background: "../shared/gym-background.png",
        overlayAnimation: null,
        type: "character",
        image: "../shared/knight-serious.png",
        text: "Pero ahora somos más fuertes. Más rápidos. Más preparados."
    },
    {
        background: "../shared/gym-background.png",
        overlayAnimation: null,
        type: "character",
        image: "../shared/both-determined.png",
        text: "Estamos listos para tomar venganza contra el Rey malvado."
    },
    {
        background: "../shared/gym-background.png",
        overlayAnimation: null,
        type: "character",
        image: "../shared/mage-intense.png",
        text: "Y esta vez... no nos va a sorprender."
    },
    {
        background: "../shared/gym-background.png",
        overlayAnimation: null,
        type: "character",
        image: "../shared/knight-serious.png",
        text: "Vamos a por él."
    }
];

// Variables globales
let currentDialogueIndex = 0;
let isShowingFullAnimation = false;
let fullAnimationDialogueTimeouts = [];

// Elementos del DOM
const backgroundImage = document.getElementById('background-image');
const backgroundOverlay = document.getElementById('background-overlay');
const characterFullscreen = document.getElementById('character-fullscreen');
const characterImage = document.getElementById('character-image');
const characterVideo = document.getElementById('character-video');
const fullScreenAnimation = document.getElementById('full-screen-animation');
const fullAnimationVideo = document.getElementById('full-animation-video');
const dialogueText = document.getElementById('dialogue-text');
const dialogueContainer = document.querySelector('.dialogue-container');
const instructions = document.getElementById('instructions');
const animationContinueBtn = document.getElementById('animation-continue-btn');

// Inicializar
function init() {
    showNextDialogue();
    
    // Event listeners
    document.addEventListener('click', handleClick);
    document.addEventListener('touchend', handleClick);
    animationContinueBtn.addEventListener('click', continueAfterAnimation);
    animationContinueBtn.addEventListener('touchend', (e) => {
        e.preventDefault();
        e.stopPropagation();
        continueAfterAnimation();
    });
    
    // Prevenir zoom en móviles
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
}

// Manejar clicks/taps
function handleClick(e) {
    // No hacer nada si estamos en una animación a pantalla completa
    if (isShowingFullAnimation) {
        return;
    }
    
    // No hacer nada si clickeamos el botón de continuar
    if (e.target === animationContinueBtn || e.target.closest('.continue-button')) {
        return;
    }
    
    showNextDialogue();
}

// Mostrar siguiente diálogo
function showNextDialogue() {
    if (currentDialogueIndex >= allDialogues.length) {
        // Fin del capítulo
        instructions.style.display = 'none';
        return;
    }
    
    const dialogue = allDialogues[currentDialogueIndex];
    
    // Configurar fondo
    if (dialogue.background) {
        backgroundImage.style.backgroundImage = `url('${dialogue.background}')`;
    }
    
    // Configurar overlay de animación de fondo (si existe)
    if (dialogue.overlayAnimation) {
        const existingVideo = backgroundOverlay.querySelector('video');
        if (existingVideo) {
            existingVideo.src = dialogue.overlayAnimation;
            existingVideo.play();
        } else {
            const video = document.createElement('video');
            video.src = dialogue.overlayAnimation;
            video.autoplay = true;
            video.loop = true;
            video.muted = true;
            backgroundOverlay.appendChild(video);
        }
        backgroundOverlay.style.display = 'block';
    } else {
        backgroundOverlay.style.display = 'none';
    }
    
    // Si es una animación a pantalla completa
    if (dialogue.type === "fullAnimation" && dialogue.fullAnimation) {
        showFullAnimation(dialogue.fullAnimation, dialogue.text);
        return;
    }
    
    // Ocultar animación a pantalla completa si estaba visible
    fullScreenAnimation.style.display = 'none';
    characterFullscreen.style.display = 'flex';
    
    // Mostrar diálogo
    dialogueContainer.style.display = 'block';
    
    // Configurar texto
    if (dialogue.type === "narration") {
        dialogueText.className = "narration-text";
    } else {
        dialogueText.className = "";
    }
    dialogueText.textContent = dialogue.text || "";
    
    // Configurar imagen/video del personaje
    if (dialogue.type === "character" && dialogue.image) {
        characterImage.src = dialogue.image;
        characterImage.style.display = 'block';
        characterVideo.style.display = 'none';
    } else if (dialogue.video) {
        characterVideo.src = dialogue.video;
        characterVideo.style.display = 'block';
        characterImage.style.display = 'none';
        characterVideo.play().catch(e => console.log('Autoplay bloqueado'));
    } else {
        characterImage.style.display = 'none';
        characterVideo.style.display = 'none';
    }
    
    // Ocultar instrucciones cuando llegamos al final
    if (currentDialogueIndex === allDialogues.length - 1) {
        instructions.style.display = 'none';
    }
    
    // Incrementar el índice para el siguiente diálogo
    currentDialogueIndex++;
}

// Mostrar animación a pantalla completa
function showFullAnimation(videoPath, dialogueText) {
    isShowingFullAnimation = true;
    
    // Ocultar diálogo
    dialogueContainer.style.display = 'none';
    
    // Mostrar animación
    fullScreenAnimation.style.display = 'flex';
    fullAnimationVideo.src = videoPath;
    fullAnimationVideo.muted = true;
    fullAnimationVideo.loop = false;
    
    // Mostrar botón de continuar inmediatamente
    animationContinueBtn.style.display = 'block';
    animationContinueBtn.style.visibility = 'visible';
    animationContinueBtn.style.opacity = '1';
    animationContinueBtn.style.zIndex = '20';
    
    // Reproducir video
    fullAnimationVideo.play().catch(e => {
        console.log('Error al reproducir video:', e);
        // Si falla el autoplay, mostrar el botón de todas formas
        animationContinueBtn.style.display = 'block';
    });
    
    // Fallback: mostrar botón después de que el video se cargue
    fullAnimationVideo.addEventListener('loadedmetadata', () => {
        animationContinueBtn.style.display = 'block';
    }, { once: true });
    
    // Fallback: mostrar botón después de un timeout
    setTimeout(() => {
        animationContinueBtn.style.display = 'block';
    }, 500);
}

// Función para continuar después de animación
function continueAfterAnimation() {
    console.log('continueAfterAnimation llamada');
    console.log('currentDialogueIndex antes:', currentDialogueIndex);
    
    isShowingFullAnimation = false;
    fullScreenAnimation.style.display = 'none';
    characterFullscreen.style.display = 'flex';
    animationContinueBtn.style.display = 'none';
    animationContinueBtn.style.visibility = 'hidden';
    animationContinueBtn.style.opacity = '0';
    
    // Mostrar el diálogo de nuevo
    const dialogueContainer = document.querySelector('.dialogue-container');
    if (dialogueContainer) {
        dialogueContainer.style.display = 'block';
    }
    
    fullAnimationDialogueTimeouts.forEach(timeout => clearTimeout(timeout));
    fullAnimationDialogueTimeouts = [];
    
    // INCREMENTAR EL ÍNDICE PARA SALTAR EL DIÁLOGO CON ANIMACIÓN
    currentDialogueIndex++;
    console.log('currentDialogueIndex después:', currentDialogueIndex);
    
    // Avanzar al siguiente diálogo
    showNextDialogue();
}

// Inicializar cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
