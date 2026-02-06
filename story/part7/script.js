// Diálogos de la Parte 7 - El momento vulnerable
const dialogues = [
    {
        character: "Ella",
        text: "Si muero aquí, no quiero discursos.",
        video: "../shared/her-wizard-talking.mp4"
    },
    {
        character: "Tú",
        text: "No planeo perderte.",
        video: "../shared/him-knight-talking.mp4"
    },
    {
        character: "Ella",
        text: "Qué exagerado eres.",
        video: "../shared/her-wizard-talking.mp4"
    },
    {
        character: "Tú",
        text: "No tanto.",
        video: "../shared/him-knight-talking.mp4"
    },
    {
        type: "narration",
        text: "(Pausa)"
    },
    {
        character: "Ella",
        text: "No hagas que me arrepienta de confiar.",
        video: "../shared/her-wizard-talking.mp4"
    }
];

const chapterConfig = {
    background: "../shared/dragon-cave.jpg",
    endAnimation: "../shared/running-from-dragon.png",
    endAnimationType: "image",
    nextChapter: "../part8/index.html"
};

let currentDialogue = 0;
const dialogueElement = document.getElementById('dialogue-text');
const characterVideo = document.getElementById('character-video');
const instructions = document.getElementById('instructions');
const chapterAnimation = document.getElementById('chapter-animation');

function showNextDialogue() {
    if (currentDialogue < dialogues.length) {
        const dialogue = dialogues[currentDialogue];
        
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

