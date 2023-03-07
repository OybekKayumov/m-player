const image = document.querySelector('img');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const music = document.querySelector('audio');
const prevBtn = document.getElementById('prev');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');

const songs = [
  {
    name: 'music-1',
    displayName: 'Electric Chill Machine',
    artist: 'Modern Design'
  },
  {
    name: 'music-2',
    displayName: 'Electric Chill Machine 2',
    artist: 'Modern Design'
  },
  {
    name: 'music-3',
    displayName: 'Electric Chill Machine 3',
    artist: 'Modern Design'
  },
]

let isPlaying = false;

function playSong() {  
  isPlaying = true;
  playBtn.classList.replace('fa-play', 'fa-pause');
  playBtn.setAttribute('title', 'Pause');
  music.play();
}

function pauseSong() {
  isPlaying = false;
  playBtn.classList.replace('fa-pause', 'fa-play');
  playBtn.setAttribute('title', 'Play');
  music.pause();
}

playBtn.addEventListener('click', () => (isPlaying ? pauseSong() : playSong()));

