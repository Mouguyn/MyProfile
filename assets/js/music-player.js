let playState = true;
document.addEventListener('DOMContentLoaded', function () {
    var audioPlayerContainer = document.getElementById('audioPlayerContainer');
    
    let audioPlayer = document.createElement('audio');
    audioPlayer.setAttribute('autoplay', 'autoplay');
    audioPlayer.style.display = 'none';
    audioPlayer.src = './assets/audio/HaruHaru.mp3';
    audioPlayer.setAttribute('controls', 'controls');
    audioPlayer.setAttribute('loop', 'loop');
    audioPlayer.setAttribute('preload', 'auto');

    audioPlayerContainer.appendChild(audioPlayer);


    let playSvg = document.getElementById('playSvg');
    playSvg.addEventListener('click', function () {
        if (playState) {
            audioPlayer.play();
            playState = false;
            playSvg.classList.toggle('rotate');
        } else {
            audioPlayer.pause();
            playState = true;
            playSvg.classList.toggle('rotate');
        }
        
    });
  });