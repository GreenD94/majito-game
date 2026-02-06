// Diálogos de la Parte 1 - El mundo normal (rompemos la 4ta pared aquí)
const dialogues = [
    {
        character: "Ella",
        text: "¿Por qué estamos vestidos así?",
        video: "../shared/her-wizard-talking.mp4"
    },
    {
        character: "Tú",
        text: "Es que estamos en unaa fantasía épica. de Dragones y Odio mutuo.",
        video: "../shared/him-knight-talking.mp4"
    },
    {
        character: "Ella",
        text: "Ah. Claro. eso siempre termina mal.",
        video: "../shared/her-wizard-talking.mp4"
    },
    {
        character: "Tú",
        text: "O muy bien.",
        video: "../shared/him-knight-talking.mp4"
    },
    {
        character: "Ella",
        text: "No confíes en eso.",
        video: "../shared/her-wizard-talking.mp4"
    }
];

// Configuración del capítulo
const chapterConfig = {
    background: "../shared/main_background.jpg",
    endAnimation: "../shared/her_attacking_him.png",
    endAnimationType: "image",
    nextChapter: "../part2/index.html"
};

let currentDialogue = 0;
const dialogueElement = document.getElementById('dialogue-text');
const characterVideo = document.getElementById('character-video');
const instructions = document.getElementById('instructions');
const chapterAnimation = document.getElementById('chapter-animation');

// Función para mostrar el siguiente diálogo
function showNextDialogue() {
    if (currentDialogue < dialogues.length) {
        const dialogue = dialogues[currentDialogue];
        
        // Actualizar video
        characterVideo.src = dialogue.video;
        characterVideo.classList.add('video-transition');
        
        // Actualizar texto del diálogo
        dialogueElement.textContent = dialogue.text;
        dialogueElement.className = "";
        
        // Efecto de transición
        dialogueElement.style.opacity = '0';
        setTimeout(() => {
            dialogueElement.style.opacity = '1';
        }, 200);
        
        currentDialogue++;
        
        // Si es el último diálogo, mostrar animación del capítulo
        if (currentDialogue === dialogues.length) {
            instructions.style.display = 'none';
            setTimeout(() => {
                showChapterAnimation();
            }, 2000);
        }
    }
}

// Función para mostrar la animación al final del capítulo
function showChapterAnimation() {
    if (chapterConfig.endAnimation) {
        chapterAnimation.style.display = 'flex';
        
        if (chapterConfig.endAnimationType === "video") {
            // Si es video, crear elemento video
            const existingVideo = chapterAnimation.querySelector('video');
            const existingImg = chapterAnimation.querySelector('img');
            if (existingImg) existingImg.remove();
            
            let video = existingVideo;
            if (!video) {
                video = document.createElement('video');
                video.autoplay = true;
                video.loop = true;
                video.muted = true;
                chapterAnimation.appendChild(video);
            }
            video.src = chapterConfig.endAnimation;
            video.play();
        } else {
            // Si es imagen
            const existingVideo = chapterAnimation.querySelector('video');
            const existingImg = chapterAnimation.querySelector('img');
            if (existingVideo) existingVideo.remove();
            
            let img = existingImg;
            if (!img) {
                img = document.createElement('img');
                img.alt = "Animación del capítulo";
                chapterAnimation.appendChild(img);
            }
            img.src = chapterConfig.endAnimation;
        }
        
        // Animación mostrada, no hay botón de navegación
    }
}

// Event listeners
document.addEventListener('click', (e) => {
    if (currentDialogue < dialogues.length) {
        showNextDialogue();
    }
});

// Configurar fondo
if (chapterConfig.background) {
    document.body.style.backgroundImage = `url('${chapterConfig.background}')`;
}

// Efecto de entrada
window.addEventListener('load', () => {
    dialogueElement.style.opacity = '0';
    setTimeout(() => {
        dialogueElement.style.opacity = '1';
    }, 500);
    
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

document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
});

characterVideo.addEventListener('loadeddata', () => {
    characterVideo.play().catch(e => {
        console.log('Video listo para reproducir');
    });
});

characterVideo.addEventListener('transitionend', () => {
    characterVideo.classList.remove('video-transition');
});

