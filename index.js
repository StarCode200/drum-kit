const allButtons = document.querySelectorAll('.drum');

for (const button of allButtons) {
    button.addEventListener('click', (e) => {
        playDrum(e.target.id);
        aminateButton(e.target.id);
    })
}


addEventListener('keypress', (e) => {
    playDrum(e.key.toLowerCase());
    aminateButton(e.key.toLowerCase());
})

//Create function that will add amination
function aminateButton(letter) {
    //Then add the pressed class to current button
    const currentBtn = document.querySelector(`.${letter}`);
    currentBtn.classList.add('pressed');
    
    //Then in 0.25sec remove the "pressed" class
    setTimeout(() => {
        currentBtn.classList.remove('pressed');
    },250 )
  
}

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
