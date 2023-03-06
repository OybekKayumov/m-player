const music = document.querySelector('audio');
const prevBtn = document.getElementById('prev');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');

let isPlaying = false;

function playSong() {
  isPlaying = true;
  music.play();
}

function pauseSong() {
  isPlaying = false;
  music.pause();
}



