window.addEventListener('keydown', function(event) {
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const overlay = document.querySelector(`div[data-key="${event.keyCode}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    if (overlay) overlay.classList.add('play');
});

function removetransition(e){
    if (e.propertyName !== 'transform') return;
    this.classList.remove('play');
};

const overlays = document.querySelectorAll('.forclick');
overlays.forEach(e => e.addEventListener('transitionend', removetransition));

