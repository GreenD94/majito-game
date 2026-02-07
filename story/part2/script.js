// Diálogos de la Parte 2 - El conflicto inicial (enemigos declarados)
const dialogues = [
    {
        type: "narration",
        text: "Contexto: El reino está en caos. No porque haya guerra… sino porque alguien escribió mal una profecía. El Caballero y la Maga no se soportan, pero los obligan a trabajar juntos."
    },
    {
        character: "Ella",
        text: "Deja algo claro, Caballero: yo trabajo sola.",
        video: "../shared/her-wizard-talking.mp4"
    },
    {
        character: "Tú",
        text: "Perfecto, porque yo también.",
        video: "../shared/him-knight-talking.mp4"
    },
    {
        type: "narration",
        text: "(silencio incómodo)"
    },
    {
        character: "Ella",
        text: "Entonces… ¿por qué estamos aquí juntos?",
        video: "../shared/her-wizard-talking.mp4"
    },
    {
        character: "Tú",
        text: "Porque el Consejo dijo que si no cooperamos, el reino se va al carajo.",
        video: "../shared/him-knight-talking.mp4"
    },
    {
        character: "Ella",
        text: "Genial. Castigada con trabajo en grupo.",
        video: "../shared/her-wizard-talking.mp4"
    },
    {
        character: "Tú",
        text: "Yo tampoco pedí que me emparejaran con alguien que lanza hechizos cuando se molesta.",
        video: "../shared/him-knight-talking.mp4"
    },
    {
        character: "Ella",
        text: "¿Cuando? Yo lanzo hechizos porque puedo.",
        video: "../shared/her-wizard-talking.mp4"
    },
    {
        type: "narration",
        text: "(ella hace aparecer chispas)"
    },
    {
        character: "Tú",
        text: "Ok, ok… sin violencia innecesaria.",
        video: "../shared/him-knight-talking.mp4"
    },
    {
        type: "narration",
        text: "(pausa)"
    },
    {
        character: "Tú",
        text: "Aunque… innecesaria según quién.",
        video: "../shared/him-knight-talking.mp4"
    },
    {
        character: "Ella",
        text: "Te voy a convertir en sapo.",
        video: "../shared/her-wizard-talking.mp4"
    },
    {
        character: "Tú",
        text: "Ya lo soy emocionalmente.",
        video: "../shared/him-knight-talking.mp4"
    },
    {
        type: "narration",
        text: "(ella se ríe sin querer)"
    },
    {
        character: "Ella",
        text: "No me hagas reír. No me caes bien.",
        video: "../shared/her-wizard-talking.mp4"
    },
    {
        character: "Tú",
        text: "Tranquila. A mí tampoco.",
        video: "../shared/him-knight-talking.mp4"
    },
    {
        type: "narration",
        text: "(silencio)"
    },
    {
        character: "Ella",
        text: "…pero caminas raro.",
        video: "../shared/her-wizard-talking.mp4"
    },
    {
        character: "Tú",
        text: "Espera, ¿eso es una crítica o coqueteo?",
        video: "../shared/him-knight-talking.mp4"
    },
    {
        character: "Ella",
        text: "Es una observación científica.",
        video: "../shared/her-wizard-talking.mp4"
    }
];

const chapterConfig = {
    background: "../shared/library-background.jpg",
    endAnimation: "../shared/her-angry.jpg",
    endAnimationType: "image",
    nextChapter: "../part3/index.html"
};

let currentDialogue = 0;
const dialogueElement = document.getElementById('dialogue-text');
const characterVideo = document.getElementById('character-video');
const instructions = document.getElementById('instructions');
const chapterAnimation = document.getElementById('chapter-animation');

function showNextDialogue() {
    if (currentDialogue < dialogues.length) {
        const dialogue = dialogues[currentDialogue];
        
        // Si es narración, mostrar sin video
        if (dialogue.type === "narration") {
            dialogueElement.className = "narration-text";
            dialogueElement.textContent = dialogue.text;
            document.querySelector('.character-video-container').style.display = 'none';
        } else {
            dialogueElement.className = "";
            document.querySelector('.character-video-container').style.display = 'block';
            characterVideo.src = dialogue.video;
            characterVideo.classList.add('video-transition');
            dialogueElement.textContent = dialogue.text;
        }
        
        dialogueElement.style.opacity = '0';
        setTimeout(() => {
            dialogueElement.style.opacity = '1';
        }, 200);
        
        currentDialogue++;
        
        if (currentDialogue === dialogues.length) {
            instructions.style.display = 'none';
            setTimeout(() => {
                showChapterAnimation();
            }, 2000);
        }
    }
}

function showChapterAnimation() {
    if (chapterConfig.endAnimation) {
        chapterAnimation.style.display = 'flex';
        
        if (chapterConfig.endAnimationType === "video") {
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
        // Animación mostrada
    }
}

document.addEventListener('click', (e) => {
    if (currentDialogue < dialogues.length) {
        showNextDialogue();
    }
});

if (chapterConfig.background) {
    document.body.style.backgroundImage = `url('${chapterConfig.background}')`;
}

window.addEventListener('load', () => {
    dialogueElement.style.opacity = '0';
    setTimeout(() => {
        dialogueElement.style.opacity = '1';
    }, 500);
    
    characterVideo.play().catch(e => {
        console.log('Autoplay bloqueado');
    });
});

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
        console.log('Video listo');
    });
});

characterVideo.addEventListener('transitionend', () => {
    characterVideo.classList.remove('video-transition');
});

