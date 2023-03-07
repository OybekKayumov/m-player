const image = document.querySelector('img');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const music = document.querySelector('audio');
const progressContainer = document.getElementById('progress-container')
const progress = document.getElementById('progress')
const currentTimeEl = document.getElementById('current-time');
const durationEl = document.getElementById('duration');
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

    // update progress bar
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;

    const durationMinutes = Math.floor(duration / 60);
    let durationSeconds = Math.floor(duration % 60);
    if (durationSeconds < 10) {
      durationSeconds = `0${durationSeconds}`
    }

    // delay NaN
    if (durationSeconds) {
      durationEl.textContent = `${durationMinutes}:${durationSeconds}`;
    }

    const currentMinutes = Math.floor(currentTime / 60);
    let currentSeconds = Math.floor(currentTime % 60);
    if (currentSeconds < 10) {
      currentSeconds = `0${currentSeconds}`
    }
    currentTimeEl.textContent = `${currentMinutes}:${currentSeconds}`
  }
}

const setProgressBar = (e) => {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const { duration } = music;

  music.currentTime = (clickX / width) * duration;
}

prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);
music.addEventListener('ended', nextSong)
music.addEventListener('timeupdate', updateProgressBar);
progressContainer.addEventListener('click', setProgressBar)