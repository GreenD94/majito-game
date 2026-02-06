// Diálogos de la Parte 3 - La misión forzada
const dialogues = [
    {
        type: "title",
        text: "POR EL BIEN DEL REINO…"
    },
    {
        character: "Ella",
        text: "No pienso viajar contigo.",
        video: "../shared/her-wizard-talking.mp4"
    },
    {
        character: "Tú",
        text: "El dragón se come el reino si no vamos.",
        video: "../shared/him-knight-talking.mp4"
    },
    {
        character: "Ella",
        text: "Bueno, que se lo coma.",
        video: "../shared/her-wizard-talking.mp4"
    },
    {
        character: "Tú",
        text: "Eso es muy tú, la verdad.",
        video: "../shared/him-knight-talking.mp4"
    },
    {
        character: "Ella",
        text: "Cállate y camina.",
        video: "../shared/her-wizard-talking.mp4"
    }
];

const chapterConfig = {
    background: "../shared/main_background.jpg",
    endAnimation: "../shared/her_attacking_him.png",
    endAnimationType: "image",
    nextChapter: "../part4/index.html"
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
        
        if (dialogue.type === "title") {
            dialogueElement.className = "title-text";
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
        setTimeout(() => {
            nextButton.style.display = 'block';
        }, 3000);
    } else {
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

