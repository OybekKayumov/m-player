const image = document.querySelector('img');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const music = document.querySelector('audio');
const progressContainer = document.getElementById('progress-container')
const progress = document.getElementById('progress')
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

// update DOM
function loadSong(song) {
  title.textContent = song.displayName;
  artist.textContent = song.artist;
  music.src = `music/${song.name}.mp3`
  image.src = `img/${song.name}.jpg`
}

let songIndex = 0;

const nextSong = () => {
  songIndex++;
  if (songIndex > songs.length -1 ) {
    songIndex = 0;
  }
  loadSong(songs[songIndex]);
  playSong()
}

const prevSong = () => {
  songIndex--;

  if (songIndex < 0 ) {
    songIndex = songs.length -1;
  }

  loadSong(songs[songIndex]);
  playSong()
}

// on load select first song
loadSong(songs[songIndex]);

const updateProgressBar = (e) => {
  if (isPlaying) {
    const {duration, currentTime} = e.srcElement;
    console.log(': ', duration, currentTime);

    // update progress bar
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
  }
}

prevBtn.addEventListener('click', prevSong)
nextBtn.addEventListener('click', nextSong)
music.addEventListener('timeupdate', updateProgressBar)