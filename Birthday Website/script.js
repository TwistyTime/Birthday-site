const startBtn = document.getElementById("startBtn");
const game = document.getElementById("game");
const message = document.getElementById("message");
const nextBtn = document.getElementById("nextBtn");

const messages = [
    "Hey you ❤️",
    "Today is a very special day",
    "Because someone amazing was born 🎂",
    "Even from far away, you mean everything to me",
    "I hope this made you smile 😊",
    "Happy Birthday 💖"
];

let index = 0;

startBtn.onclick = () => {
    startBtn.style.display = "none";
    game.classList.remove("hidden");
    message.innerText = messages[index];
    document.getElementById("Hide1").style.display = "none";
    document.getElementById("Hide2").style.display = "none";
};

nextBtn.onclick = () => {
    index++;
    if (index < messages.length) {
        message.innerText = messages[index];
    } else {
        nextBtn.style.display = "none";
        const vid = document.createElement("video");
        vid.src = "assets/video.mp4";
        vid.controls = false;
        message.style.display = "none";

        // make video smaller
        vid.width = 300;
        vid.height = 169;
        vid.style.display = "block";
        vid.style.margin = "0 auto";

        // center within the game container
        game.style.display = "flex";
        game.style.justifyContent = "center";
        game.style.alignItems = "center";
        game.style.minHeight = "200px";

        vid.autoplay = true;

        game.appendChild(vid);
        
        vid.addEventListener("ended", () => {
            vid.remove();
            const photoEl = document.getElementById("Photo");
            if (photoEl) {
                photoEl.classList.remove("hidden");
            }
        });
    }
    const PhotoBtn = document.getElementById("PhotoBtn");
    if (PhotoBtn) {
        PhotoBtn.onclick = () => {
            const photoEl = document.getElementById("Photo");
            if (photoEl) {
                // use a web-friendly relative path and show the image
                photoEl.src = "assets/fooled.jpeg";
                photoEl.classList.remove("hidden");
                
            }
            const Photo1 = document.getElementById("Photo1");
            if (Photo1) {
                Photo1.classList.remove("hidden");
                Photo1.width = 70;
                Photo1.height = 100;
                Photo1.style.display = "block";
                Photo1.style.margin = "0 auto";
            }
            const messageEl = document.getElementById("message");
            if (messageEl) {
                messageEl.style.display = "block";
                messageEl.innerText = "Hah! Fooled You!! 🎉";

            }
        };
    }
};
