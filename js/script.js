const play = document.querySelector(".play");
const sound = document.querySelector(".sound");
const refresh = document.querySelector(".refresh");
const settings = document.querySelector(".settings");

const sound_overlay = document.getElementById("sound-overlay");
const settings_overlay = document.getElementById("settings-overlay");

const vol_slider = document.getElementById("volume");
const vol_mag = document.getElementById("vol-mag");

const play_img = document.getElementById("play-img");

playing = false;

play.addEventListener("click", (event) => {
    //playNote(1047, 'sine');
    //playNote(1047, 'square');
    //playNote(1047, 'triangle');
    //playNote(notes[Math.floor((Math.random() * 9))][Math.floor((Math.random() * 11))], 'triangle');


    togglePlay();
});

document.addEventListener("keydown", (event) => {
    if (event.key == " ") {
        togglePlay();
    }
});

sound.addEventListener("click", (event) => {
    overlayIn(sound_overlay);
});

async function exit_sound() {
    overlayOut(sound_overlay);
}

settings.addEventListener("click", (event) => {
    overlayIn(settings_overlay);
});

vol_slider.addEventListener("input", (event) => {
    vol_mag.innerHTML = vol_slider.value;
    vol = vol_slider.value / 100;
});

async function exit_settings() {
    overlayOut(settings_overlay);
}

async function overlayIn(overlay) {
    overlay.style.opacity = 1;
    overlay.style.transform = 'scale(0)';
    overlay.style.display = "block";

    for (i = 0; i <= 100; i += 5) {
        overlay.style.transform = 'scale(' + (i / 100) + ')';
        overlay.style.transform += 'translate(-50%, -50%)';
        await delay(1);
    }
}

async function overlayOut(overlay) {
    for (i = 100; i >= 0; i -= 5) {
        overlay.style.opacity = i / 100;
        await delay(5);
    }
    overlay.style.display = "none";
}

async function togglePlay() {
    temp = playing;
    playing = !playing;
    for (i = 0; i <= 180; i += 4) {
        play_img.style.transform = 'rotate(' + i + 'deg)';
        await delay(1);
    }
    if (temp) {
        play_img.src = "./assets/play.svg";
    } else {
        play_img.src = "./assets/stop.svg";
        generateLofi();
    }
    for (i = 180; i <= 360; i += 4) {
        play_img.style.transform = 'rotate(' + i + 'deg)';
        await delay(1);
    }
}

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}