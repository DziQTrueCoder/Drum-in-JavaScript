function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return; //stop funcion from running
    audio.currentTime = 0 //rewind audio 
    audio.play();
    key.classList.add("playing"); //add a class plaing to "key",also remove and toogle
}
function removeTransition(e){
    if (e.propetyName !=='transform') return; //skip if it is not a transform 
    this.classList.remove('playing');
}
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitioned',removeTransition));
window.addEventListener('keydown',playSound);
