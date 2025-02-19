// const music = new Audio('songs/02.mp3');
// music.play();
const songs=[
    {
        id:1,
        songName: `Tum Hi Ho <br> 
                            <div class="subtitle">Arijit Singh</div>`,
        poster: "images/01.jpg",
        audioSrc: "songs/1.mp3"
    },
    {
        id:2,
        songName: `Chikni Chameli
                            <br> 
                            <div class="subtitle">Shreya Ghoshal</div>`,
        poster: "images/02.jpg",
        audioSrc: "songs/2.mp3"
        
    },
    {
        id:3,
        songName: `Alone <br> 
                            <div class="subtitle">Alan Walker</div>`,
        poster: "images/03.jpg",
        audioSrc: "songs/3.mp3"
    },
    {
        id:4,
        songName: `Shape of You <br> 
                            <div class="subtitle">Ed Sheeran</div>`,
        poster: "images/04.jpg",
        audioSrc: "songs/4.mp3"
    },
    {
        id:5,
        songName: `Millionaire <br> 
        <div class="subtitle">Yo Yo Honey Singh</div>`,
        poster: "images/05.jpg",
        audioSrc: "songs/5.mp3"
    },
    {
        id:6,
        songName: `O Maahi<br> 
                            <div class="subtitle">Pritam, Arijit Singh, Irshad Kamil</div>`,
        poster: "images/06.jpg",
        audioSrc: "songs/6.mp3"
    },
    {
        id:7,
        songName: `Dilliwaali Girlfriend <br> 
                            <div class="subtitle">Sunidhi Chauhan,Pritam,Arijit Singh</div>`,
        poster: "images/07.jpg",
        audioSrc :"songs/7.mp3"
    },
    {
        id:8,
        songName: `Chaleya <br> 
                            <div class="subtitle">Anirudh Ravichander, Arijit Singh, Shilpa Rao</div>`,
        poster: "images/08.jpg",
        audioSrc: "songs/8.mp3"
    },
    {
        id:9,
        songName: `Sajna Ve Sajna<br> 
                            <div class="subtitle">Sunidhi Chauhan,Divya Kumar</div>`,
        poster: "images/09.jpg",
        audioSrc: "songs/9.mp3"
    },
    {
        id:10,
        songName: `Kesariya <br> 
                            <div class="subtitle">Arijit Singh</div>`,
        poster: "images/10.jpg",
        audioSrc: "songs/10.mp3"
    },
    
    {
        id:11,
        songName: `Deva Deva<br> 
        <div class="subtitle">Arijit Singh and Jonita Gandhi</div>`,
        poster: "images/11.jpg",
        audioSrc: "songs/11.mp3"
    },
    {
        id:12,
        songName: `Naatu Naatu <br> 
        <div class="subtitle">Rahul Sipligunj, Kaala Bhairava</div>`,
        poster: "images/12.jpg",
        audioSrc: "songs/12.mp3"
    },
    {
        id:13,
        songName: `Leke Prabhu Ka Naam <br> 
        <div class="subtitle">Pritam, Arijit Singh, Nikhita Gandhi, Amitabh Bhattacharya</div>`,
        poster: "images/13.jpg",
        audioSrc: "songs/13.mp3"
    },
    {
        id:14,
        songName: `Taras - from Munjya <br>
                            <div class="subtitle"> Jasmine Sandlas, Sachin–Jigar, Amitabh Bhattacharya</div>`,
        poster: "images/14.jpg",
        audioSrc: "songs/14.mp3"
    },
    {
        id:15,
        songName: `Rangisari <br>
        <div class="subtitle">Kanishk Seth, Kavita Seth</div>`,
        poster: "images/15.jpg",
        audioSrc: "songs/15.mp3"
    },
    {
        id:16,
        songName: `Tu Hain Toh Main Hoon <br>
        <div class="subtitle">Arijit Singh, Irshad Kamil</div>`,
        poster: "images/16.jpg",
        audioSrc: "songs/16.mp3"
    },
    {
        id:17,
        songName: `Raanjhan <br>
        <div class="subtitle">Sachet-Parampara and Parampara Tandon </div>`,
        poster: "images/17.jpg",
        audioSrc: "songs/17.mp3"
    },
    {
        id:18,
        songName: `Millionaire <br>
        <div class="subtitle">Yo Yo Honey Singh</div>`,
        poster: "images/18.jpg",
        audioSrc: "songs/18.mp3"
    },
    {
        id:19,
        songName: `Raataan Lambiyan <br>
        <div class="subtitle">Tanishk Bagchi, Jubin Nautiyal, and Asees Kaur </div>`,
        poster: "images/19.jpg",
        audioSrc: "songs/19.mp3"
    },
    {
        id:20,
        songName: `Param Sundari <br>
        <div class="subtitle">A.R. Rahman, Shreya Ghoshal </div>`,
        poster: "images/20.jpg",
        audioSrc: "songs/20.mp3"
    },
    {
        id:21,
        songName: `Shanivaar Raati <br>
                                <div class="subtitle">Sajid-Wajid, Arijit Singh, Shalmali</div>`,
        poster: "images/21.jpg",
        audioSrc: "songs/21.mp3"
    },
    {
        id:22,
        songName: `Aaj Ki Raat <br>
        <div class="subtitle">Amitabh Bhattacharya, Sachin-Jigar</div>`,
        poster: "images/22.jpg",
        audioSrc: "songs/22.mp3"
    },
    {
        id:23,
        songName: `Ishq Hai <br> 
        <div class="subtitle">Anurag Saikia</div>`,
        poster: "images/23.jpg",
        audioSrc: "songs/23.mp3"
        
    },
    {
        id:24,
        songName: `Pehle Bhi Main<br> 
        <div class="subtitle">Vishal Mishra, Raj Shekhar</div>`,
        poster: "images/24.jpg",
        audioSrc: "songs/24.mp3"
    },
    
]
    Array.from(document.getElementsByClassName('songItem')).forEach((e, i) =>{
        e.getElementsByTagName('img')[0].src=songs[i].poster
        e.getElementsByTagName('h5')[0].innerHTML=songs[i].songName
    });

    const makeAllBackground = () => {
        Array.from(document.getElementsByClassName('songItem')).forEach((el) => {
            el.style.background = 'rgba(16, 1, 1, 0)'; // Setting transparent background
        });
    };
    const makeAllPlay = () => {
        Array.from(document.getElementsByClassName('playListPlay')).forEach((el) => {
            
        el.classList.add("bi-play-circle-fill" );
        el.classList.remove("bi-pause-circle-fill");
        });
    };
   

    let audioPlayer = document.getElementById('audio'); // Audio element
    let playButton = document.getElementById('playButton'); // Play button
    
    function togglePlay(songSrc) {
        if (audioPlayer.src.includes(songSrc) && !audioPlayer.paused) {
            audioPlayer.pause(); // Pause if the same song is playing
            playButton.innerText = "Play"; // Change button text to "Play"
        } else {
            audioPlayer.src = songSrc; // Set song source
            audioPlayer.play(); // Play the song
            playButton.innerText = "Pause"; // Change button text to "Pause"
        }
    }
    
    
let masterPlay = document.getElementById("masterPlay");
let wave = document.getElementById('wave');
masterPlay.onclick = function(){
    if(music.paused || music.currentTime<=0){
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.remove("bi-play-circle-fill" );
        masterPlay.classList.add("bi-pause-circle-fill");
    }
    else{
        music.pause();
        wave.classList.remove('active1');
        masterPlay.classList.add("bi-play-circle-fill" );
        masterPlay.classList.remove("bi-pause-circle-fill");
    }
}

let index = 0;
let music = new Audio();
let title = document.getElementById('title');
let download = document.getElementById('download_music');

let poster_master_play= document.getElementById("poster_master_play");
Array.from(document.getElementsByClassName('playListPlay')).forEach((e) => {
    e.onclick = function (el) {
        index = parseInt(el.target.id); // Convert id to number
        music.src = `songs/${index}.mp3`;
        poster_master_play.src=`images/${index}.jpg`;
        masterPlay.classList.remove("bi-play-circle-fill" );
        masterPlay.classList.add("bi-pause-circle-fill");
        music.play();
        download.href=`songs/${index}.mp3`;

        let songTitle = songs.filter((els)=>{
            return els.id==index;
        })
        songTitle.forEach(elss=>{
            let {songName} = elss;
            title.innerHTML = songName;
            download.setAttribute('download', songName);
        });

        makeAllBackground();

        // Assuming 'index' is defined elsewhere in your code
        Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgba(16, 1, 1, .1)"; 
        makeAllPlay();
        el.target.classList.add("bi-pause-circle-fill");
        el.target.classList.remove("bi-play-circle-fill");
        wave.classList.add('active1');
    };
});

let start = document.getElementById('start');
let end = document.getElementById('end');
let seek = document.getElementById('seek');
let bar2= document.getElementById('bar2');
let dot =document.getElementById('dot');
music.addEventListener('timeupdate',()=>{
    let music_curr=music.currentTime;
    let music_duration = music.duration;
    let min1= Math.floor(music_duration /60);
    let sec1 = Math.floor(music_duration % 60);
    if(sec1 <10){
        sec1=`0${sec1}`;
    }
    end.innerText =`${min1}:${sec1}`;
    let min2 = Math.floor(music_curr /60);
    let sec2 = Math.floor(music_curr % 60);
    if(sec2 <10){
        sec2=`0${sec2}`;
    }
    start.innerText =`${min2}:${sec2    }`;

    let progressbar = (music_curr / music_duration) * 100; // Ensure decimal precision
    seek.value = progressbar;  // Update seek bar value
    let seekbar = seek.value;  
    bar2.style.width = `${seekbar}%`; // Update progress bar width

    dot.style.left = `${seekbar}%`;
    


})
seek.addEventListener('change',()=>{
    music.currentTime = seek.value*music.duration /100
})


let vol_down = document.getElementById('vol_down');
let vol = document.getElementById('vol');
let vol_bar = document.querySelector('.volumebar'); // Select single element
let vol_dot = document.getElementById('vol_dot');

vol.addEventListener('input', () => { 
    let vol_a = vol.value;

    // Update volume smoothly
    requestAnimationFrame(() => {
        vol_bar.style.width = `${vol_a}%`;
        vol_dot.style.left = `${vol_a}%`;
        music.volume = vol_a / 100;
    });

    // Update volume icon
    vol_down.classList.remove('bi-volume-up-fill', 'bi-volume-down-fill', 'bi-volume-off-fill');

    if (vol_a == 0) {
        vol_down.classList.add('bi-volume-off-fill');
    } else if (vol_a > 50) {
        vol_down.classList.add('bi-volume-up-fill');
    } else {
        vol_down.classList.add('bi-volume-down-fill');
    }
});


let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click',()=>{
    index-=1;

    if(index<1){
        index = Array.from(document.getElementsByClassName('songItem')).length;

    }

    music.src = `songs/${index}.mp3`;
    poster_master_play.src=`images/${index}.jpg`;
    masterPlay.classList.remove("bi-play-circle-fill" );
    masterPlay.classList.add("bi-pause-circle-fill");
    music.play();

    let songTitle = songs.filter((els)=>{
        return els.id==index;
    })
    songTitle.forEach(elss=>{
        let {songName} = elss;
        title.innerHTML = songName;

    });

    makeAllBackground();

    // Assuming 'index' is defined elsewhere in your code
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgba(16, 1, 1, .1)"; 
    makeAllPlay();
    el.target.classList.add("bi-pause-circle-fill");
    el.target.classList.remove("bi-play-circle-fill");
    wave.classList.add('active1');
})


next.addEventListener('click',()=>{
    index=index+1;
    if(index > Array.from(document.getElementsByClassName('songItem')).length){
        index = 1

    }

    music.src = `songs/${index}.mp3`;
    poster_master_play.src=`images/${index}.jpg`;
    masterPlay.classList.remove("bi-play-circle-fill" );
    masterPlay.classList.add("bi-pause-circle-fill");
    music.play();

    let songTitle = songs.filter((els)=>{
        return els.id==index;
    })
    songTitle.forEach(elss=>{
        let {songName} = elss;
        title.innerHTML = songName;

    });

    makeAllBackground();

    // Assuming 'index' is defined elsewhere in your code
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgba(16, 1, 1, .1)"; 
    makeAllPlay();
    el.target.classList.add("bi-pause-circle-fill");
    el.target.classList.remove("bi-play-circle-fill");
    wave.classList.add('active1');
})

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

music.addEventListener('ended', () => {
    let mode = shuffle.dataset.mode; // Get current mode

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

// Function to play the next song
const next_music = () => {
    if (index == songs.length) {
        index = 1;
    } else {
        index++;
    }

    playMusic();
};

// Function to repeat the same song
const repeat_music = () => {
    playMusic();
};

// Function to play a random song
const random_music = () => {
    index = Math.floor(Math.random() * songs.length) + 1;
    playMusic();
};

// Helper function to update the UI and play the selected song
const playMusic = () => {
    music.src = `songs/${index}.mp3`;
    poster_master_play.src = `images/${index}.jpg`;
    masterPlay.classList.remove("bi-play-circle-fill");
    masterPlay.classList.add("bi-pause-circle-fill");
    music.play();

    let songTitle = songs.filter((els) => els.id == index);
    songTitle.forEach(elss => {
        let { songName } = elss;
        title.innerHTML = songName;
    });

    makeAllBackground();

    // Ensure 'index' is correctly used
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgba(16, 1, 1, .1)"; 

    makeAllPlay();
    wave.classList.add('active1');
};


let popu_left= document.getElementById('popu_left');
let popu_right=document.getElementById('popu_right');
let pop_song= document.getElementsByClassName('pop_song')[0];

popu_right.onclick = function() {
    pop_song.scrollBy({left:250, behavior:"smooth"});
    
};

popu_left.onclick = function() {
    pop_song.scrollBy({left:-250, behavior:"smooth"});
};

let art_left= document.getElementById('art_left');
let art_right=document.getElementById('art_right');
let items= document.getElementsByClassName('items')[0];

art_left.onclick = function(){
    items.scrollBy({left:-200, behavior: "smooth"});
}
art_right.onclick = function(){
    items.scrollBy({left:+200, behavior: "smooth"});
}
let radio_left=document.getElementById('radio_left');
let radio_right=document.getElementById('radio_right');
let radio=document.getElementsByClassName('radio')[0];
radio_left.onclick = function(){
    radio.scrollBy({left:-250 , behavior:"smooth"});
}
radio_right.onclick = function(){
    radio.scrollBy({left:250, behavior:"smooth"});
}

function glory(){
    window.location.href="glory.html"
}


// Query the needed DOM elements
let search_result       = document.querySelector('.search_result');
let input               = document.querySelector('.search input[type="text"]');
let audiooPlayer        = document.getElementById('audioPlayer');
let posterr_master_play = document.getElementById('poster_master_play');
let title_master_play   = document.getElementById('title');
let wave1               = document.getElementById('wave');
let download_music      = document.getElementById('download_music');
let masterrPlay          = document.getElementById('masterPlay');

// Build initial list of results (cards)
function buildSearchResults() {
  // Clear any existing
  search_result.innerHTML = "";

  songs.forEach(song => {
    const { id, songName, subtitle, poster, audioSrc } = song;

    // Create the card as an <a> (clickable)
    let card = document.createElement('a');
    card.classList.add('card');
    card.href = "#" + id; // optional anchor link

    card.innerHTML = `
      <img src="${poster}" alt="Song Poster">
      <div class="content">
        ${songName}
        <div class="subititle">${subtitle}</div>
      </div>
    `;

    // On click, load song into "master play" UI & play
    card.addEventListener('click', (event) => {
      event.preventDefault();

      // Set audio source + play
      audiooPlayer.src = audioSrc;
      audiooPlayer.play();

      // Update poster and title
      posterr_master_play.src = poster;
      title_master_play.innerHTML = `
        ${songName}
        <div class="subtitle">${subtitle}</div>
      `;

      // Update download link (optional)
      download_music.setAttribute('href', audioSrc);
      download_music.setAttribute('download', songName);

      // Hide the search results (optional)
      search_result.style.display = 'none';
    });

    search_result.appendChild(card);
  });
}

// Call the function at page load
buildSearchResults();

// Filter results on each keystroke
input.addEventListener('keyup', () => {
  let query = input.value.toUpperCase().trim();

  if (query.length === 0) {
    // Hide list if empty
    search_result.style.display = "none";
    return;
  } else {
    // Show list if there's a query
    search_result.style.display = "block";
  }

  // Filter each card by songName
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

// 1) Toggle audio state when masterPlay is clicked
masterrPlay.addEventListener('click', () => {
  if (audiooPlayer.paused || audiooPlayer.currentTime <= 0) {
    audiooPlayer.play();
  } else {
    audiooPlayer.pause();
  }
});

// 2) Update icon and wave animation on audio "play" event
audiooPlayer.addEventListener('play', () => {
  
  masterrPlay.classList.remove('bi-play-circle-fill');
  masterrPlay.classList.add('bi-pause-circle-fill');
  
  wave1.classList.add('active1');
});

// 3) Update icon and wave animation on audio "pause" event
audiooPlayer.addEventListener('pause', () => {
  
  masterrPlay.classList.add('bi-play-circle-fill');
  masterrPlay.classList.remove('bi-pause-circle-fill');
  
  wave1.classList.remove('active1');
});
