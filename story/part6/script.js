// Capítulo 6 - "El Oro, la Traición y el Rugido"
// Sin minijuego, solo diálogo e historia

// Todas las escenas y diálogos en orden
const allDialogues = [
    // ESCENA 1 - La Guarida del Dragón
    {
        background: "../shared/dragon-cave-gold.png",
        overlayAnimation: "../shared/gold-shimmer-loop.mp4",
        type: "character",
        image: "../shared/knight-looking-gold.png",
        text: "…Ok. Si sobrevivo, mínimo me llevo una monedita."
    },
    {
        background: "../shared/dragon-cave-gold.png",
        overlayAnimation: "../shared/gold-shimmer-loop.mp4",
        type: "character",
        image: "../shared/mage-warning.png",
        text: "No toques nada. Siempre que tocan algo en una cueva con oro… alguien muere."
    },
    {
        background: "../shared/dragon-cave-gold.png",
        overlayAnimation: "../shared/gold-shimmer-loop.mp4",
        type: "narration",
        text: "(Se oye un rugido profundo.)"
    },
    {
        background: "../shared/dragon-cave-gold.png",
        overlayAnimation: "../shared/gold-shimmer-loop.mp4",
        type: "character",
        image: "../shared/dragon-shadow.png",
        text: ""
    },
    
    // ESCENA 2 - Aparición del Rey (Confianza y Felicitaciones)
    {
        background: "../shared/dragon-cave-gold.png",
        overlayAnimation: null,
        type: "character",
        image: "../shared/king-entering.png",
        text: "¡Excelente trabajo, héroes!"
    },
    {
        background: "../shared/dragon-cave-gold.png",
        overlayAnimation: null,
        type: "character",
        image: "../shared/knight-surprised.png",
        text: "¿Su Majestad? ¿Qué hace aquí?"
    },
    {
        background: "../shared/dragon-cave-gold.png",
        overlayAnimation: null,
        type: "character",
        image: "../shared/king-entering.png",
        text: "He venido personalmente a felicitaros. Habéis completado la misión con éxito."
    },
    {
        background: "../shared/dragon-cave-gold.png",
        overlayAnimation: null,
        type: "character",
        image: "../shared/mage-suspicious.png",
        text: "Espera... ¿cómo supiste dónde encontrarnos?"
    },
    {
        background: "../shared/dragon-cave-gold.png",
        overlayAnimation: null,
        type: "character",
        image: "../shared/king-entering.png",
        text: "Tengo mis formas. Pero no os preocupéis, estoy aquí para recompensaros."
    },
    {
        background: "../shared/dragon-cave-gold.png",
        overlayAnimation: null,
        type: "character",
        image: "../shared/knight-surprised.png",
        text: "Su Majestad es muy amable. No esperábamos esto."
    },
    {
        background: "../shared/dragon-cave-gold.png",
        overlayAnimation: null,
        type: "character",
        image: "../shared/king-entering.png",
        text: "Sois héroes verdaderos. Habéis demostrado valentía y trabajo en equipo."
    },
    {
        background: "../shared/dragon-cave-gold.png",
        overlayAnimation: null,
        type: "character",
        image: "../shared/mage-suspicious.png",
        text: "...Gracias, Su Majestad."
    },
    {
        background: "../shared/dragon-cave-gold.png",
        overlayAnimation: null,
        type: "narration",
        text: "(El Rey sonríe ampliamente)"
    },
    
    // ESCENA 2.5 - La Traición
    {
        background: "../shared/dragon-cave-gold.png",
        overlayAnimation: null,
        type: "character",
        image: "../shared/king-laughing.png",
        text: "Excelente. Justo donde los quería."
    },
    {
        background: "../shared/dragon-cave-gold.png",
        overlayAnimation: null,
        type: "character",
        image: "../shared/knight-surprised.png",
        text: "¿Qué... qué significa eso?"
    },
    {
        background: "../shared/dragon-cave-gold.png",
        overlayAnimation: null,
        type: "character",
        image: "../shared/mage-suspicious.png",
        text: "Esto no es una inspección real."
    },
    {
        background: "../shared/dragon-cave-gold.png",
        overlayAnimation: null,
        type: "character",
        image: "../shared/king-laughing.png",
        text: "El dragón nunca fue el problema."
    },
    {
        background: "../shared/dragon-cave-gold.png",
        overlayAnimation: null,
        type: "narration",
        text: "(Pausa)"
    },
    {
        background: "../shared/dragon-cave-gold.png",
        overlayAnimation: null,
        type: "character",
        image: "../shared/king-laughing.png",
        text: "El problema… son ustedes dos juntos."
    },
    
    // ESCENA 3 - Traición (con animación de ataque)
    {
        background: "../shared/dragon-cave-gold.png",
        overlayAnimation: null,
        fullAnimation: "../shared/king-dark-attack.mp4",
        type: "narration",
        text: ""
    },
    {
        background: "../shared/dragon-cave-gold.png",
        overlayAnimation: null,
        type: "character",
        image: "../shared/knight-defending.png",
        text: "¡Detrás de mí!"
    },
    {
        background: "../shared/dragon-cave-gold.png",
        overlayAnimation: null,
        type: "character",
        image: "../shared/mage-defending.png",
        text: "¡No te hagas el héroe solo!"
    },
    {
        background: "../shared/dragon-cave-gold.png",
        overlayAnimation: null,
        type: "narration",
        text: "Intentan defenderse juntos. El Rey rompe el suelo bajo ellos."
    },
    
    // ESCENA 4 - Derrota (con animación de caída)
    {
        background: "../shared/dragon-cave-gold.png",
        overlayAnimation: null,
        fullAnimation: "../shared/dust-fall-defeat.mp4",
        type: "narration",
        text: ""
    },
    {
        background: "../shared/dragon-cave-gold.png",
        overlayAnimation: null,
        type: "character",
        image: "../shared/king-walking-gold.png",
        text: "Gracias por traerme hasta aquí. Ahora el oro es mío."
    },
    {
        background: "../shared/dragon-cave-gold.png",
        overlayAnimation: null,
        type: "narration",
        text: "(Soldados cargan tesoros.)"
    },
    {
        background: "../shared/dragon-cave-gold.png",
        overlayAnimation: null,
        type: "character",
        image: "../shared/king-leaving.png",
        text: "Los héroes son útiles… hasta que dejan de serlo."
    },
    {
        background: "../shared/dragon-cave-gold.png",
        overlayAnimation: null,
        type: "narration",
        text: "(El Rey se va. Silencio.)"
    },
    
    // ESCENA 5 - El Dragón se Acerca
    {
        background: "../shared/dragon-cave-gold.png",
        overlayAnimation: null,
        type: "character",
        image: "../shared/dragon-approaching.png",
        text: ""
    },
    {
        background: "../shared/dragon-cave-gold.png",
        overlayAnimation: null,
        type: "narration",
        text: "(El dragón camina lento hacia ellos. Ellos heridos.)"
    },
    {
        background: "../shared/dragon-cave-gold.png",
        overlayAnimation: null,
        type: "character",
        image: "../shared/mage-weak.png",
        text: "…¿Así termina?"
    },
    {
        background: "../shared/dragon-cave-gold.png",
        overlayAnimation: null,
        type: "character",
        image: "../shared/knight-looking-ceiling.png",
        text: "No pienso dejar que ese tipo gane."
    },
    {
        background: "../shared/dragon-cave-gold.png",
        overlayAnimation: null,
        type: "character",
        image: "../shared/dragon-lowering-head.png",
        text: "Puedo oler la ira en ustedes. El deseo de venganza."
    },
    {
        background: "../shared/dragon-cave-gold.png",
        overlayAnimation: null,
        type: "narration",
        text: "(Pausa pesada)"
    },
    {
        background: "../shared/dragon-cave-gold.png",
        overlayAnimation: null,
        type: "character",
        image: "../shared/dragon-lowering-head.png",
        text: "Díganme… ¿Quieren más poder?"
    },
    {
        background: "../shared/dragon-cave-gold.png",
        overlayAnimation: null,
        type: "narration",
        text: "(Silencio. Ambos se miran. No hay miedo. Solo determinación.)"
    },
    {
        background: "../shared/dragon-cave-gold.png",
        overlayAnimation: null,
        type: "character",
        image: "../shared/both-determined.png",
        text: ""
    },
    {
        background: "../shared/dragon-cave-gold.png",
        overlayAnimation: null,
        type: "character",
        image: "../shared/knight-serious.png",
        text: "Sí."
    },
    {
        background: "../shared/dragon-cave-gold.png",
        overlayAnimation: null,
        type: "character",
        image: "../shared/mage-intense.png",
        text: "Sí."
    }
];

// Variables globales
let currentDialogueIndex = 0;
let isShowingFullAnimation = false;
let fullAnimationDialogueTimeouts = [];

// Elementos del DOM
const dialogueElement = document.getElementById('dialogue-text');
const characterVideo = document.getElementById('character-video');
const characterImage = document.getElementById('character-image');
const characterFullscreen = document.getElementById('character-fullscreen');
const instructions = document.getElementById('instructions');
const backgroundImage = document.getElementById('background-image');
const backgroundOverlay = document.getElementById('background-overlay');
const fullScreenAnimation = document.getElementById('full-screen-animation');
const fullAnimationVideo = document.getElementById('full-animation-video');
const animationContinueBtn = document.getElementById('animation-continue-btn');

// Función para configurar el fondo
function setBackground(url) {
    if (url) {
        backgroundImage.style.backgroundImage = `url('${url}')`;
    } else {
        backgroundImage.style.backgroundImage = 'none';
        backgroundImage.style.backgroundColor = '#000';
    }
}

// Función para configurar overlay animation (como gold shimmer)
function setOverlayAnimation(url) {
    backgroundOverlay.innerHTML = '';
    if (url) {
        const video = document.createElement('video');
        video.src = url;
        video.autoplay = true;
        video.loop = true;
        video.muted = true;
        video.style.width = '100%';
        video.style.height = '100%';
        video.style.objectFit = 'cover';
        backgroundOverlay.appendChild(video);
        video.play().catch(e => console.log('Overlay video autoplay bloqueado'));
    }
}

// Función para mostrar animación full screen
function showFullAnimation(dialogue) {
    if (!dialogue.fullAnimation) return false;
    
    isShowingFullAnimation = true;
    fullScreenAnimation.style.display = 'flex';
    characterFullscreen.style.display = 'none';
    
    // Ocultar el diálogo durante la animación
    const dialogueContainer = document.querySelector('.dialogue-container');
    if (dialogueContainer) {
        dialogueContainer.style.display = 'none';
    }
    
    // MOSTRAR EL BOTÓN INMEDIATAMENTE - siempre visible durante la animación
    animationContinueBtn.style.display = 'block';
    animationContinueBtn.style.visibility = 'visible';
    animationContinueBtn.style.opacity = '1';
    
    fullAnimationVideo.src = dialogue.fullAnimation;
    fullAnimationVideo.loop = false;
    fullAnimationVideo.muted = true;
    
    // Limpiar timeouts anteriores
    fullAnimationDialogueTimeouts.forEach(timeout => clearTimeout(timeout));
    fullAnimationDialogueTimeouts = [];
    
    // Ocultar texto durante la animación
    dialogueElement.textContent = "";
    dialogueElement.style.opacity = '0';
    
    fullAnimationVideo.play().catch(e => {
        console.log('Full animation autoplay bloqueado');
        fullAnimationVideo.muted = true;
        fullAnimationVideo.play();
    });
    
    return true;
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

// Función para mostrar siguiente diálogo
function showNextDialogue() {
    if (currentDialogueIndex >= allDialogues.length) {
        // Fin del capítulo
        instructions.style.display = 'none';
        dialogueElement.textContent = "Fin del Capítulo 6";
        dialogueElement.className = "";
        return;
    }
    
    const dialogue = allDialogues[currentDialogueIndex];
    
    // Configurar fondo
    setBackground(dialogue.background);
    
    // Configurar overlay animation
    setOverlayAnimation(dialogue.overlayAnimation);
    
    // Si hay animación full screen, mostrarla primero
    if (dialogue.fullAnimation && !isShowingFullAnimation) {
        showFullAnimation(dialogue);
        // El diálogo se mostrará después de que termine la animación
        return;
    }
    
    // Ocultar animación full screen si estaba visible
    if (fullScreenAnimation.style.display === 'flex') {
        fullScreenAnimation.style.display = 'none';
        isShowingFullAnimation = false;
    }
    
    // Asegurar que el diálogo esté visible
    const dialogueContainer = document.querySelector('.dialogue-container');
    if (dialogueContainer) {
        dialogueContainer.style.display = 'block';
    }
    
    // Mostrar character fullscreen
    characterFullscreen.style.display = 'flex';
    
    // Mostrar personaje (imagen)
    if (dialogue.type === "character" && dialogue.image) {
        characterVideo.style.display = 'none';
        characterImage.style.display = 'block';
        characterImage.src = dialogue.image;
    } else {
        characterVideo.style.display = 'none';
        characterImage.style.display = 'none';
    }
    
    // Mostrar texto
    if (dialogue.type === "narration") {
        dialogueElement.className = "narration-text";
        dialogueElement.textContent = dialogue.text;
    } else {
        dialogueElement.className = "";
        dialogueElement.textContent = dialogue.text || "";
    }
    
    // Efecto de transición
    dialogueElement.style.opacity = '0';
    setTimeout(() => {
        dialogueElement.style.opacity = '1';
    }, 200);
    
    currentDialogueIndex++;
    
    // Mostrar instrucciones si no es el último diálogo
    if (currentDialogueIndex < allDialogues.length) {
        instructions.style.display = 'block';
    } else {
        instructions.style.display = 'none';
    }
}

// Verificar que el botón existe antes de agregar listeners
if (animationContinueBtn) {
    // Event listener para botón continuar de animación
    animationContinueBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log('Botón continuar clickeado');
        continueAfterAnimation();
    }, { passive: false });

    // También para touch events
    animationContinueBtn.addEventListener('touchend', (e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log('Botón continuar tocado');
        continueAfterAnimation();
    }, { passive: false });
    
    console.log('Event listeners del botón continuar configurados');
} else {
    console.error('ERROR: animationContinueBtn no encontrado en el DOM');
}

// Event listeners - tap/click para avanzar
document.addEventListener('click', (e) => {
    // No hacer nada si se clickeó el botón continuar (ya tiene su propio handler)
    if (e.target === animationContinueBtn) return;
    
    if (isShowingFullAnimation) {
        // Si hay animación full screen, permitir saltarla
        continueAfterAnimation();
    } else if (currentDialogueIndex < allDialogues.length) {
        showNextDialogue();
    }
});

// También para touch
document.addEventListener('touchend', (e) => {
    e.preventDefault();
    // No hacer nada si se tocó el botón continuar
    if (e.target === animationContinueBtn) return;
    
    if (isShowingFullAnimation) {
        // Si hay animación full screen, permitir saltarla
        continueAfterAnimation();
    } else if (currentDialogueIndex < allDialogues.length) {
        showNextDialogue();
    }
});

// Inicialización
window.addEventListener('load', () => {
    dialogueElement.style.opacity = '0';
    
    // Mostrar primer diálogo
    setTimeout(() => {
        showNextDialogue();
    }, 500);
    
    // Configurar fondo inicial
    if (allDialogues.length > 0 && allDialogues[0].background) {
        setBackground(allDialogues[0].background);
    }
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

document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
});
