// Diálogos de la apertura
const dialogues = [
    {
        character: "Tú",
        text: "Ya somos novios. Tú sabes lo que eso significa, ¿no?",
        video: "../../he-talks.mp4"
    },
    {
        character: "Ella",
        text: "Que ahora tengo permiso legal para llevarte la contraria.",
        video: "../../she-talk.mp4"
    },
    {
        type: "title",
        text: "ENEMIGOS, DRAGONES Y UNA PÉSIMA IDEA"
    }
];

let currentDialogue = 0;
const dialogueElement = document.getElementById('dialogue-text');
const characterVideo = document.getElementById('character-video');
const instructions = document.getElementById('instructions');
const gameContainer = document.querySelector('.game-container');

// Función para mostrar el siguiente diálogo
function showNextDialogue() {
    if (currentDialogue < dialogues.length) {
        const dialogue = dialogues[currentDialogue];
        
        // Si es un título, mostrarlo de forma especial
        if (dialogue.type === "title") {
            dialogueElement.className = "title-text";
            dialogueElement.textContent = dialogue.text;
            dialogueElement.style.opacity = '0';
            setTimeout(() => {
                dialogueElement.style.opacity = '1';
            }, 200);
            
            // Ocultar video para el título
            document.querySelector('.character-video-container').style.display = 'none';
            
            currentDialogue++;
            
            // Después del título, ir a la parte 1
            if (currentDialogue === dialogues.length) {
                instructions.style.display = 'none';
                setTimeout(() => {
                    window.location.href = '../part1/index.html';
                }, 3000);
            }
            return;
        }
        
        // Mostrar video si estaba oculto
        document.querySelector('.character-video-container').style.display = 'block';
        dialogueElement.className = "";
        
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
        
        // Si es el último diálogo antes del título, continuar
        if (currentDialogue === dialogues.length - 1) {
            // El siguiente será el título
        }
    }
}

// Event listeners para tocar la pantalla
document.addEventListener('click', (e) => {
    if (currentDialogue < dialogues.length) {
        showNextDialogue();
    }
});

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

