
// SONGS ARRAY

const songs = [
  {
    id: 1,
    songName: `Tum Hi Ho`,
    subtitle: `Arijit Singh`,
    poster: "images/01.jpg",
    audioSrc: "songs/1.mp3"
  },
  {
    id: 2,
    songName: `Chikni Chameli`,
    subtitle: `Shreya Ghoshal`,
    poster: "images/02.jpg",
    audioSrc: "songs/2.mp3"
  },
  {
    id: 3,
    songName: `Alone`,
    subtitle: `Alan Walker`,
    poster: "images/03.jpg",
    audioSrc: "songs/3.mp3"
  },
  {
    id: 4,
    songName: `Shape of You`,
    subtitle: `Ed Sheeran`,
    poster: "images/04.jpg",
    audioSrc: "songs/4.mp3"
  },
  {
    id: 5,
    songName: `Millionaire`,
    subtitle: `Yo Yo Honey Singh`,
    poster: "images/05.jpg",
    audioSrc: "songs/5.mp3"
  },
  {
    id: 6,
    songName: `O Maahi`,
    subtitle: `Arijit Singh, Irshad Kamil`,
    poster: "images/06.jpg",
    audioSrc: "songs/6.mp3"
  },
  {
    id: 7,
    songName: `Dilliwaali Girlfriend`,
    subtitle: `Sunidhi Chauhan, Pritam, Arijit Singh`,
    poster: "images/07.jpg",
    audioSrc: "songs/7.mp3"
  },
  {
    id: 8,
    songName: `Chaleya`,
    subtitle: `Anirudh Ravichander, Arijit Singh, Shilpa Rao`,
    poster: "images/08.jpg",
    audioSrc: "songs/8.mp3"
  },
  {
    id: 9,
    songName: `Sajna Ve Sajna`,
    subtitle: `Sunidhi Chauhan, Divya Kumar`,
    poster: "images/09.jpg",
    audioSrc: "songs/9.mp3"
  },
  {
    id: 10,
    songName: `Kesariya`,
    subtitle: `Arijit Singh`,
    poster: "images/10.jpg",
    audioSrc: "songs/10.mp3"
  },
  {
    id: 11,
    songName: `Deva Deva`,
    subtitle: `Arijit Singh, Jonita Gandhi`,
    poster: "images/11.jpg",
    audioSrc: "songs/11.mp3"
  },
  {
    id: 12,
    songName: `Naatu Naatu`,
    subtitle: `Rahul Sipligunj, Kaala Bhairava`,
    poster: "images/12.jpg",
    audioSrc: "songs/12.mp3"
  },
  {
    id: 13,
    songName: `Leke Prabhu Ka Naam`,
    subtitle: `Pritam, Arijit Singh, Nikhita Gandhi, Amitabh Bhattacharya`,
    poster: "images/13.jpg",
    audioSrc: "songs/13.mp3"
  },
  {
    id: 14,
    songName: `Taras - from Munjya`,
    subtitle: `Jasmine Sandlas, Sachin–Jigar, Amitabh Bhattacharya`,
    poster: "images/14.jpg",
    audioSrc: "songs/14.mp3"
  },
  {
    id: 15,
    songName: `Rangisari`,
    subtitle: `Kanishk Seth, Kavita Seth`,
    poster: "images/15.jpg",
    audioSrc: "songs/15.mp3"
  },
  {
    id: 16,
    songName: `Tu Hain Toh Main Hoon`,
    subtitle: `Arijit Singh, Irshad Kamil`,
    poster: "images/16.jpg",
    audioSrc: "songs/16.mp3"
  },
  {
    id: 17,
    songName: `Raanjhan`,
    subtitle: `Sachet-Parampara and Parampara Tandon`,
    poster: "images/17.jpg",
    audioSrc: "songs/17.mp3"
  },
  {
    id: 18,
    songName: `Millionaire`,
    subtitle: `Yo Yo Honey Singh`,
    poster: "images/18.jpg",
    audioSrc: "songs/18.mp3"
  },
  {
    id: 19,
    songName: `Raataan Lambiyan`,
    subtitle: `Tanishk Bagchi, Jubin Nautiyal, Asees Kaur`,
    poster: "images/19.jpg",
    audioSrc: "songs/19.mp3"
  },
  {
    id: 20,
    songName: `Param Sundari`,
    subtitle: `A.R. Rahman, Shreya Ghoshal`,
    poster: "images/20.jpg",
    audioSrc: "songs/20.mp3"
  },
  {
    id: 21,
    songName: `Shanivaar Raati`,
    subtitle: `Sajid-Wajid, Arijit Singh, Shalmali`,
    poster: "images/21.jpg",
    audioSrc: "songs/21.mp3"
  },
  {
    id: 22,
    songName: `Aaj Ki Raat`,
    subtitle: `Amitabh Bhattacharya, Sachin-Jigar`,
    poster: "images/22.jpg",
    audioSrc: "songs/22.mp3"
  },
  {
    id: 23,
    songName: `Ishq Hai`,
    subtitle: `Anurag Saikia`,
    poster: "images/23.jpg",
    audioSrc: "songs/23.mp3"
  },
  {
    id: 24,
    songName: `Pehle Bhi Main`,
    subtitle: `Vishal Mishra, Raj Shekhar`,
    poster: "images/24.jpg",
    audioSrc: "songs/24.mp3"
  },
  {
    id: 25,
    songName: `Shree Hanuman Chalisa`,
    subtitle: `Hariharan, Gulshan Kumar`,
    poster: "images/25.jpg",
    audioSrc: "songs/25.mp3"
  },
  {
    id: 26,
    songName: `Aayiye Ram Ji`,
    subtitle: `Shreya Ghoshal`,
    poster: "images/26.jpg",
    audioSrc: "songs/26.mp3"
  },
  {
    id: 27,
    songName: `Maine Pi Rakhi Hai`,
    subtitle: `Shreya Ghoshal, Divya Kumar`,
    poster: "images/27.jpg",
    audioSrc: "songs/27.mp3"
  },
  {
    id: 28,
    songName: `Ram Siya Ram`,
    subtitle: `Sachet Tandon`,
    poster: "images/28.jpg",
    audioSrc: "songs/28.mp3"
  },
  {
    id: 29,
    songName: `Tujhe Kitna Chahne Lage`,
    subtitle: `Arijit Singh, Mithoon`,
    poster: "images/29.jpg",
    audioSrc: "songs/29.mp3"
  },
  {
    id: 30,
    songName: `Matargashti`,
    subtitle: `Mohit Chauhan, A.R. Rahman`,
    poster: "images/30.jpg",
    audioSrc: "songs/30.mp3"
  }
];

// -------------------------
// FILLING INITIAL PLAYLIST ITEMS
// -------------------------
Array.from(document.getElementsByClassName('songItem')).forEach((e, i) => {
  if (songs[i]) {
    // Set the image:
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    // Set both song name and subtitle in <h5>:
    e.getElementsByTagName('h5')[0].innerHTML = `
      ${songs[i].songName}
      <br>
      <div class="subtitle">${songs[i].subtitle}</div>
    `;
  }
});

// Grabbing relevant DOM elements
let audioPlayer = document.getElementById('audio'); // Use existing audio element from HTML
let playButton = document.getElementById('playButton');
let masterPlay = document.getElementById("masterPlay");
let wave = document.getElementById('wave');
let title = document.getElementById('title');
let download = document.getElementById('download_music');
let poster_master_play = document.getElementById("poster_master_play");

// -------------------------
// PLAYBACK FUNCTIONS
// -------------------------
function togglePlay(songSrc) {
  if (audioPlayer.src.includes(songSrc) && !audioPlayer.paused) {
    audioPlayer.pause();
    playButton.innerText = "Play";
  } else {
    audioPlayer.src = songSrc;
    audioPlayer.play();
    playButton.innerText = "Pause";
  }
}

// Make all backgrounds transparent
const makeAllBackground = () => {
  Array.from(document.getElementsByClassName('songItem')).forEach((el) => {
    el.style.background = 'rgba(16, 1, 1, 0)';
  });
};

// Make all "playListPlay" icons show Play
const makeAllPlay = () => {
  Array.from(document.getElementsByClassName('playListPlay')).forEach((el) => {
    el.classList.add("bi-play-circle-fill");
    el.classList.remove("bi-pause-circle-fill");
  });
};

// Master play button toggle
masterPlay.onclick = function() {
  if (audioPlayer.paused || audioPlayer.currentTime <= 0) {
    audioPlayer.play();
    wave.classList.add('active1');
    masterPlay.classList.remove("bi-play-circle-fill");
    masterPlay.classList.add("bi-pause-circle-fill");
  } else {
    audioPlayer.pause();
    wave.classList.remove('active1');
    masterPlay.classList.add("bi-play-circle-fill");
    masterPlay.classList.remove("bi-pause-circle-fill");
  }
};

let index = 0; // Current song index

// Playlist play buttons
Array.from(document.getElementsByClassName('playListPlay')).forEach((e) => {
  e.onclick = function (el) {
    index = parseInt(el.target.id); // Assumes each button's ID is the song index
    audioPlayer.src = `songs/${index}.mp3`;
    poster_master_play.src = `images/${index}.jpg`;
    masterPlay.classList.remove("bi-play-circle-fill");
    masterPlay.classList.add("bi-pause-circle-fill");
    audioPlayer.play();
    download.href = `songs/${index}.mp3`;

    let songTitle = songs.filter((els) => els.id == index);
    songTitle.forEach(elss => {
      title.innerHTML = elss.songName;
      download.setAttribute('download', elss.songName);
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgba(16, 1, 1, .1)";
    makeAllPlay();
    el.target.classList.add("bi-pause-circle-fill");
    el.target.classList.remove("bi-play-circle-fill");
    wave.classList.add('active1');
  };
});

// Update time, seek bar, and progress bar
audioPlayer.addEventListener('timeupdate', () => {
  let music_curr = audioPlayer.currentTime;
  let music_duration = audioPlayer.duration;

  let min1 = Math.floor(music_duration / 60);
  let sec1 = Math.floor(music_duration % 60);
  if (sec1 < 10) { sec1 = `0${sec1}`; }
  if (!isNaN(min1) && !isNaN(sec1)) {
    document.getElementById('end').innerText = `${min1}:${sec1}`;
  }

  let min2 = Math.floor(music_curr / 60);
  let sec2 = Math.floor(music_curr % 60);
  if (sec2 < 10) { sec2 = `0${sec2}`; }
  document.getElementById('start').innerText = `${min2}:${sec2}`;

  let progressbar = (music_curr / music_duration) * 100;
  document.getElementById('seek').value = progressbar;
  document.getElementById('bar2').style.width = `${progressbar}%`;
  document.getElementById('dot').style.left = `${progressbar}%`;
});

// Seek bar change
document.getElementById('seek').addEventListener('change', () => {
  audioPlayer.currentTime = document.getElementById('seek').value * audioPlayer.duration / 100;
});

// Volume control
let vol_down = document.getElementById('vol_down');
let vol = document.getElementById('vol');
let vol_bar = document.querySelector('.volumebar');
let vol_dot = document.getElementById('vol_dot');

vol.addEventListener('input', () => {
  let vol_a = vol.value;
  requestAnimationFrame(() => {
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    audioPlayer.volume = vol_a / 100;
  });

  vol_down.classList.remove('bi-volume-up-fill', 'bi-volume-down-fill', 'bi-volume-off-fill');
  if (vol_a == 0) {
    vol_down.classList.add('bi-volume-off-fill');
  } else if (vol_a > 50) {
    vol_down.classList.add('bi-volume-up-fill');
  } else {
    vol_down.classList.add('bi-volume-down-fill');
  }
});

// Back button
let back = document.getElementById('back');
back.addEventListener('click', () => {
  index -= 1;
  if (index < 1) {
    index = document.getElementsByClassName('songItem').length;
  }
  audioPlayer.src = `songs/${index}.mp3`;
  poster_master_play.src = `images/${index}.jpg`;
  masterPlay.classList.remove("bi-play-circle-fill");
  masterPlay.classList.add("bi-pause-circle-fill");
  audioPlayer.play();

  let songTitle = songs.filter((els) => els.id == index);
  songTitle.forEach(elss => {
    title.innerHTML = elss.songName;
  });

  makeAllBackground();
  Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgba(16, 1, 1, .1)";
  makeAllPlay();
  wave.classList.add('active1');
});

// Next button
let next = document.getElementById('next');
next.addEventListener('click', () => {
  index += 1;
  if (index > document.getElementsByClassName('songItem').length) {
    index = 1;
  }
  audioPlayer.src = `songs/${index}.mp3`;
  poster_master_play.src = `images/${index}.jpg`;
  masterPlay.classList.remove("bi-play-circle-fill");
  masterPlay.classList.add("bi-pause-circle-fill");
  audioPlayer.play();

  let songTitle = songs.filter((els) => els.id == index);
  songTitle.forEach(elss => {
    title.innerHTML = elss.songName;
  });

  makeAllBackground();
  Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgba(16, 1, 1, .1)";
  makeAllPlay();
  wave.classList.add('active1');
});

// Shuffle/Repeat/Next modes
let shuffle = document.getElementsByClassName('shuffle')[0];
shuffle.dataset.mode = "next"; // Default mode

shuffle.addEventListener('click', () => {
  if (shuffle.classList.contains('bi-music-note-beamed')) {
    // Change to "repeat" mode
    shuffle.classList.remove('bi-music-note-beamed', 'bi-shuffle');
    shuffle.classList.add('bi-arrow-repeat');
    shuffle.dataset.mode = "repeat";
    shuffle.setAttribute('title', 'Repeat');
  } else if (shuffle.classList.contains('bi-arrow-repeat')) {
    // Change to "shuffle" mode
    shuffle.classList.remove('bi-arrow-repeat', 'bi-music-note-beamed');
    shuffle.classList.add('bi-shuffle');
    shuffle.dataset.mode = "random";
    shuffle.setAttribute('title', 'Shuffle');
  } else {
    // Change to "next" mode
    shuffle.classList.remove('bi-arrow-repeat', 'bi-shuffle');
    shuffle.classList.add('bi-music-note-beamed');
    shuffle.dataset.mode = "next";
    shuffle.setAttribute('title', 'Next');
  }
});

audioPlayer.addEventListener('ended', () => {
  let mode = shuffle.dataset.mode; // Current mode
  switch (mode) {
    case 'repeat':
      repeat_music();
      break;
    case 'next':
      next_music();
      break;
    case 'random':
      random_music();
      break;
  }
});

const next_music = () => {
  if (index === songs.length) {
    index = 1;
  } else {
    index++;
  }
  playMusic();
};

const repeat_music = () => {
  playMusic();
};

const random_music = () => {
  index = Math.floor(Math.random() * songs.length) + 1;
  playMusic();
};

const playMusic = () => {
  audioPlayer.src = `songs/${index}.mp3`;
  poster_master_play.src = `images/${index}.jpg`;
  masterPlay.classList.remove("bi-play-circle-fill");
  masterPlay.classList.add("bi-pause-circle-fill");
  audioPlayer.play();

  let songTitle = songs.filter((els) => els.id == index);
  songTitle.forEach(elss => {
    title.innerHTML = elss.songName;
  });

  makeAllBackground();
  Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgba(16, 1, 1, .1)";
  makeAllPlay();
  wave.classList.add('active1');
};

// SCROLLING FOR OTHER SECTIONS
let popu_left = document.getElementById('popu_left');
let popu_right = document.getElementById('popu_right');
let pop_song = document.getElementsByClassName('pop_song')[0];

popu_right.onclick = function() {
  pop_song.scrollBy({ left: 250, behavior: "smooth" });
};

popu_left.onclick = function() {
  pop_song.scrollBy({ left: -250, behavior: "smooth" });
};

let art_left = document.getElementById('art_left');
let art_right = document.getElementById('art_right');
let items = document.getElementsByClassName('items')[0];

art_left.onclick = function() {
  items.scrollBy({ left: -200, behavior: "smooth" });
};
art_right.onclick = function() {
  items.scrollBy({ left: 200, behavior: "smooth" });
};

let radio_left = document.getElementById('radio_left');
let radio_right = document.getElementById('radio_right');
let radio = document.getElementsByClassName('radio')[0];

radio_left.onclick = function() {
  radio.scrollBy({ left: -250, behavior: "smooth" });
};
radio_right.onclick = function() {
  radio.scrollBy({ left: 250, behavior: "smooth" });
};

// SEARCH FUNCTIONALITY
let search_result = document.querySelector('.search_result');
let input = document.querySelector('.search input[type="text"]');

// Build hidden search results (all songs in a card list)
function buildSearchResults() {
  search_result.innerHTML = "";
  songs.forEach(song => {
    const { id, subtitle, songName, poster, audioSrc } = song;
    let card = document.createElement('a');
    card.classList.add('card');
    card.href = "#" + id;
    card.innerHTML = `
      <img src="${poster}" alt="Song Poster">
      <div class="content">
        <div class="song-title">${songName}</div>
        <div class="subtitle">${subtitle}</div>
      </div>
    `;

    // Clicking on a search result
    card.addEventListener('click', (event) => {
      event.preventDefault();
      audioPlayer.src = audioSrc;
      audioPlayer.play();
      poster_master_play.src = poster;
      title.innerHTML = songName;
      download.setAttribute('href', audioSrc);
      download.setAttribute('download', songName);
      search_result.style.display = 'none';
    });

    search_result.appendChild(card);
  });
}

buildSearchResults();

// Filter search results as user types
input.addEventListener('keyup', () => {
  let query = input.value.toUpperCase().trim();
  if (query.length === 0) {
    search_result.style.display = "none";
    return;
  } else {
    search_result.style.display = "block";
  }
  let items = search_result.getElementsByClassName('card');
  for (let i = 0; i < items.length; i++) {
    let contentDiv = items[i].querySelector('.content');
    let textValue = contentDiv.textContent || contentDiv.innerText;
    if (textValue.toUpperCase().indexOf(query) > -1) {
      items[i].style.display = 'flex';
    } else {
      items[i].style.display = 'none';
    }
  }
});

// Update master play/pause icons when the audio element plays or pauses
audioPlayer.addEventListener('play', () => {
  masterPlay.classList.remove('bi-play-circle-fill');
  masterPlay.classList.add('bi-pause-circle-fill');
  wave.classList.add('active1');
});

audioPlayer.addEventListener('pause', () => {
  masterPlay.classList.add('bi-play-circle-fill');
  masterPlay.classList.remove('bi-pause-circle-fill');
  wave.classList.remove('active1');
});
