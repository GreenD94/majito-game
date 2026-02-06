// Diálogos de la Parte 9 - El cierre (romance + ustedes)
const dialogues = [
    {
        character: "Ella",
        text: "¿Y ahora qué hacen los héroes?",
        video: "../shared/her-wizard-talking.mp4"
    },
    {
        character: "Tú",
        text: "Bailan.",
        video: "../shared/him-knight-talking.mp4"
    },
    {
        character: "Ella",
        text: "Yo no bailo.",
        video: "../shared/her-wizard-talking.mp4"
    },
    {
        character: "Tú",
        text: "Tú real no.",
        video: "../shared/him-knight-talking.mp4"
    },
    {
        character: "Ella",
        text: "¿Y esta versión?",
        video: "../shared/her-wizard-talking.mp4"
    },
    {
        character: "Tú",
        text: "Esta sí puede hacerlo todo.",
        video: "../shared/him-knight-talking.mp4"
    },
    {
        character: "Ella",
        text: "Ven acá entonces.",
        video: "../shared/her-wizard-talking.mp4"
    }
];

const chapterConfig = {
    background: "../shared/main_background.jpg",
    endAnimation: "../shared/him_and_her_dancing.mp4",
    endAnimationType: "video",
    nextChapter: "../../index.html" // Volver al inicio o a una página final
};

let currentDialogue = 0;
const dialogueElement = document.getElementById('dialogue-text');
const characterVideo = document.getElementById('character-video');
const instructions = document.getElementById('instructions');
const chapterAnimation = document.getElementById('chapter-animation');
const nextButton = document.getElementById('next-chapter-button');

function showNextDialogue() {
    if (currentDialogue < dialogues.length) {
        const dialogue = dialogues[currentDialogue];
        
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
                showChapterAnimation();
            }, 2000);
        }
    }
}

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
        
        // Mostrar botón para continuar después de 3 segundos
        setTimeout(() => {
            nextButton.style.display = 'block';
        }, 3000);
    } else {
        // Si no hay animación, mostrar botón directamente
        nextButton.style.display = 'block';
    }
}

document.addEventListener('click', (e) => {
    if (e.target.id === 'next-chapter-button') {
        window.location.href = chapterConfig.nextChapter;
        return;
    }
    
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

