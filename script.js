let name = 'Arshi'
const nameSpan = document.querySelector('#name-span');
nameSpan.innerHTML = name



document.addEventListener("click", function () {
    const audio = document.getElementById("bg-music");
    audio.muted = false;
    audio.play();
});