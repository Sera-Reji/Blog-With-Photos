function setDate() {
    document.getElementById('gg').innerHTML = new Date().toDateString();
}

function playaudio() {
    document.getElementById("audio").play();
}

function pauseaudio() {
    document.getElementById("audio").pause();
}
