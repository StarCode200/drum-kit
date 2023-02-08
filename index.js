const allButtons = document.querySelectorAll('.drum');

for (const button of allButtons) {
    button.addEventListener('click', (e) => {
        playDrum(e.target.id)
    })
}


addEventListener('keypress', (e) => {
    playDrum(e.key.toLowerCase())
})


//Create a playDrum function
function playDrum(letter) {
    let audio;
            switch (letter) {
            case 'w':
                audio = new Audio(`sounds/crash.mp3`)
                audio.play();
                break;
            case 'a':
                audio = new Audio(`sounds/kick-bass.mp3`)
                audio.play();
                break;
            case 's':
                audio = new Audio(`sounds/snare.mp3`)
                audio.play();
                break;
            case 'd':
                audio = new Audio(`sounds/tom-1.mp3`)
                audio.play();
                break;
            case 'j':
                audio = new Audio(`sounds/tom-2.mp3`)
                audio.play();
                break;
            case 'k':
                audio = new Audio(`sounds/tom-3.mp3`)
                audio.play();
                break;
            case 'l':
                audio = new Audio(`sounds/tom-3.mp3`)
                audio.play();
                break;
        }
}