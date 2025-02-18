// const music = new Audio('songs/02.mp3');
// music.play();
    const songs=[
        {
            id:1,
            songName: `Tum Hi Ho <br> 
                                <div class="subtitle">Arijit Singh</div>`,
            poster: "images/1.jpg"
        },
        {
            id:2,
            songName: `Chikni Chameli
                                <br> 
                                <div class="subtitle">Shreya Ghoshal</div>`,
            poster: "images/2.jpg"
        },
        {
            id:3,
            songName: `Alone <br> 
                                <div class="subtitle">Alan Walker</div>`,
            poster: "images/3.jpg"
        },
        {
            id:4,
            songName: `Shape of You <br> 
                                <div class="subtitle">Ed Sheeran</div>`,
            poster: "images/4.jpg"
        },
        {
            id:5,
            songName: `Millionaire <br> 
            <div class="subtitle">Yo Yo Honey Singh</div>`,
            poster: "images/5.jpg"
        },
        {
            id:6,
            songName: `O Maahi<br> 
                                <div class="subtitle">Pritam, Arijit Singh, Irshad Kamil</div>`,
            poster: "images/6.jpg"
        },
        {
            id:7,
            songName: `Dilliwaali Girlfriend <br> 
                                <div class="subtitle">Sunidhi Chauhan,Pritam,Arijit Singh</div>`,
            poster: "images/7.jpg"
        },
        {
            id:8,
            songName: `Chaleya <br> 
                                <div class="subtitle">Anirudh Ravichander, Arijit Singh, Shilpa Rao</div>`,
            poster: "images/8.jpg"
        },
        {
            id:9,
            songName: `Sajna Ve Sajna<br> 
                                <div class="subtitle">Sunidhi Chauhan,Divya Kumar</div>`,
            poster: "images/9.jpg"
        },
        {
            id:10,
            songName: `Kesariya <br> 
                                <div class="subtitle">Arijit Singh</div>`,
            poster: "images/10.jpg"
        },
        
        {
            id:11,
            songName: `Deva Deva<br> 
            <div class="subtitle">Arijit Singh and Jonita Gandhi</div>`,
            poster: "images/11.jpg"
        },
        {
            id:12,
            songName: `Naatu Naatu <br> 
            <div class="subtitle">Rahul Sipligunj, Kaala Bhairava</div>`,
            poster: "images/12.jpg"
        },
        {
            id:13,
            songName: `Leke Prabhu Ka Naam <br> 
            <div class="subtitle">Pritam, Arijit Singh, Nikhita Gandhi, Amitabh Bhattacharya</div>`,
            poster: "images/13.jpg"
        },
        {
            id:14,
            songName: `Taras - from Munjya <br>
                                <div class="subtitle"> Jasmine Sandlas, Sachin–Jigar, Amitabh Bhattacharya</div>`,
            poster: "images/14.jpg"
        },
        {
            id:15,
            songName: `Rangisari <br>
            <div class="subtitle">Kanishk Seth, Kavita Seth</div>`,
            poster: "images/15.jpg"
        },
        {
            id:16,
            songName: `Tu Hain Toh Main Hoon <br>
            <div class="subtitle">Arijit Singh, Irshad Kamil</div>`,
            poster: "images/16.jpg"
        },
        {
            id:17,
            songName: `Raanjhan <br>
            <div class="subtitle">Sachet-Parampara and Parampara Tandon </div>`,
            poster: "images/17.jpg"
        },
        {
            id:18,
            songName: `Millionaire <br>
            <div class="subtitle">Yo Yo Honey Singh</div>`,
            poster: "images/18.jpg"
        },
        {
            id:19,
            songName: `Raataan Lambiyan <br>
            <div class="subtitle">Tanishk Bagchi, Jubin Nautiyal, and Asees Kaur </div>`,
            poster: "images/19.jpg"
        },
        {
            id:20,
            songName: `Param Sundari <br>
            <div class="subtitle">A.R. Rahman, Shreya Ghoshal </div>`,
            poster: "images/20.jpg"
        },
        {
            id:21,
            songName: `Shanivaar Raati <br>
                                    <div class="subtitle">Sajid-Wajid, Arijit Singh, Shalmali</div>`,
            poster: "images/21.jpg"
        },
        {
            id:22,
            songName: `Aaj Ki Raat <br>
            <div class="subtitle">Amitabh Bhattacharya, Sachin-Jigar</div>`,
            poster: "images/22.jpg"
        },
        {
            id:23,
            songName: `Ishq Hai <br> 
            <div class="subtitle">Anurag Saikia</div>`,
            poster: "images/23.jpg"
        },
        {
            id:24,
            songName: `Pehle Bhi Main<br> 
            <div class="subtitle">Vishal Mishra, Raj Shekhar</div>`,
            poster: "images/24.jpg"
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

let search_result = document.querySelector('.search_result');

if (!search_result) {
    console.error("❌ Error: '.search_result' container not found in the DOM!");
} else {
    console.log("✅ search_result found:", search_result);
}

// Check if the songs array is available and populated
if (!Array.isArray(songs) || songs.length === 0) {
    console.error("❌ Error: 'songs' array is empty or not defined!");
} else {
    console.log("✅ songs array:", songs);
}

// Clear previous search results
search_result.innerHTML = "";

songs.forEach(element => {
    const { id, songName, poster } = element;

    let card = document.createElement('a');
    card.classList.add('card');
    card.href = "#" +id; // Make it clickable

    // Assuming `poster` already contains the correct path (e.g., "images/song1.jpg")
    card.innerHTML = `
        <img src="${poster}" alt="Song Poster">
        <div class="content">
            ${songName}
        </div>
    `;

    search_result.appendChild(card);
});

console.log("✅ Songs added to search_result!");

let input = document.getElementsByTagName('input')[0];

input.addEventListener('keyup', () => {
    let input_value = input.value.toUpperCase();
    let items = search_result.getElementsByTagName('a');
    search_result.style.display = "block";
    search_result.style.visibility = "visible";
    search_result.style.opacity = "1";
    for (let index = 0; index < items.length; index++) {
        let as = items[index].getElementsByClassName('content')[0];
        let text_value = as.textContent || as.innerHTML;

        if (text_value.toUpperCase().indexOf(input_value) > -1) {
            search_result.style.display = 'flex';
            items[index].style.display = 'flex'; 
        } else {
            items[index].style.display = 'none';
        }
        if (input.value==0) {
            search_result.style.display="none";
             
        } else {
             search_result.style.display="";
        }
    }
});
