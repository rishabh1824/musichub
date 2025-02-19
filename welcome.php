<?php
session_start();
if(!isset($_SESSION['email'])) {
    header("Location: login.html"); // Redirect to login if not authenticated
    exit();
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Spotify clone</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">

</head>
<body>
    <header>
        <div class="menu_bar">
            <h1>MUSIC HUB</h1>
            <div class="playlist">
                <h4 class="active"><span></span><i class="bi bi-music-note-beamed"></i>Playlist</h4>
                <h4><span></span><i class="bi bi-music-note-beamed"></i>Recently Played</h4>
                <h4><span></span><i class="bi bi-music-note-beamed"></i>Recommended</h4>
            </div>
            <div class="menu_song">
                    <li class="songItem">
                        <span>01</span>
                        <img src="images\01.jpg" alt="">
                        <h5>Tum Hi Ho <br> 
                            <div class="subtitle">Arijit Singh</div>
                        </h5>
                        <i class="bi playListPlay bi-play-circle-fill" id="1"></i>
                    </li>
                    <li class="songItem">
                        <span>02</span>
                        <img src="images/02.jpg" alt="">
                        <h5>
                            Chikni Chameli
                             <br> 
                            <div class="subtitle">Shreya Ghoshal</div>
                        </h5>
                        <i class="bi playListPlay bi-play-circle-fill" id="2"></i>
                    </li>
                    <li class="songItem">
                        <span>03</span>
                        <img src="images\03.jpg" alt="">
                        <h5>Alone <br> 
                            <div class="subtitle">Alan Walker</div>
                        </h5>
                        <i class="bi playListPlay bi-play-circle-fill" id="3"></i>
                    </li>
                    <li class="songItem">
                        <span>04</span>
                        <img src="images\04.jpg" alt="">
                        <h5>Shape of You <br> 
                            <div class="subtitle">Ed Sheeran</div>
                        </h5>
                        <i class="bi playListPlay bi-play-circle-fill" id="4"></i>
                    </li>
                    <li class="songItem">
                        <span>05</span>
                        <img src="images\05.jpg" alt="">
                        <h5>Millionaire <br> 
                            <div class="subtitle">Yo Yo Honey Singh</div>
                        </h5>
                        <i class="bi playListPlay bi-play-circle-fill" id="5"></i>
                    </li>
                    <li class="songItem">
                        <span>06</span>
                        <img src="images/06.jpg" alt="">
                        <h5>O Maahi<br> 
                            <div class="subtitle">Pritam, Arijit Singh, Irshad Kamil</div>
                        </h5>
                        <i class="bi playListPlay bi-play-circle-fill" id="6"></i>
                    </li>
                    <li class="songItem">
                        <span>07</span>
                        <img src="images/07.jpg" alt="">
                        <h5>Dilliwaali Girlfriend <br> 
                            <div class="subtitle">Sunidhi Chauhan,Pritam,Arijit Singh</div>
                        </h5>
                        <i class="bi playListPlay bi-play-circle-fill" id="7"></i>
                    </li>
                    <li class="songItem">
                        <span>08</span>
                        <img src="images/08.jpg" alt="">
                        <h5>Chaleya <br> 
                            <div class="subtitle">Anirudh Ravichander, Arijit Singh, Shilpa Rao</div>
                        </h5>
                        <i class="bi playListPlay bi-play-circle-fill" id="8"></i>
                    </li>
                    <li class="songItem">
                        <span>09</span>
                        <img src="images/09.jpg" alt="">
                        <h5>Sajna Ve Sajna<br> 
                            <div class="subtitle">Sunidhi Chauhan,Divya Kumar</div>
                        </h5>
                        <i class="bi playListPlay bi-play-circle-fill" id="9"></i>
                    </li>
                    <li class="songItem">
                        <span>10</span>
                        <img src="images/10.jpg" alt="">
                        <h5>Kesariya <br> 
                            <div class="subtitle">Arijit Singh</div>
                        </h5>
                        <i class="bi playListPlay bi-play-circle-fill" id="10"></i>
                    </li>
                    <li class="songItem">
                        <span>11</span>
                        <img src="images/11.jpg" alt="">
                        <h5>Deva Deva<br> 
                            <div class="subtitle">Arijit Singh and Jonita Gandhi
                            </div>
                        </h5>
                        <i class="bi playListPlay bi-play-circle-fill" id="11"></i>
                    </li>
                    <li class="songItem">
                        <span>12</span>
                        <img src="images/12.jpg" alt="">
                        <h5>Naatu Naatu <br> 
                            <div class="subtitle">Rahul Sipligunj, Kaala Bhairava</div>
                        </h5>
                        <i class="bi playListPlay bi-play-circle-fill" id="12"></i>
                    </li>
                    <li class="songItem">
                        <span>13</span>
                        <img src="images\13.jpg" alt="">
                        <h5>Leke Prabhu Ka Naam <br> 
                            <div class="subtitle">Pritam, Arijit Singh, Nikhita Gandhi, Amitabh Bhattacharya</div>
                        </h5>
                        <i class="bi playListPlay bi-play-circle-fill" id="13"></i>
                    </li>
            </div>
        </div>
        <div class="song_side">
            <nav>
                <ul>
                    <li>EXPLORE <span></span></li>
                    <li>MY LIBRARY</li>
                    <li>TUNE IN</li>
                </ul>
                <div class="search">
                    <i class="bi bi-search"></i>
                    <input type="text" placeholder="Search Music">
                    <div class="search_result">
                        <a href="" class="card">
                            <img src="images/03.jpg" alt="">
                            <div class="content">
                                Alone
                                <div class="subititle">
                                    Alan Walker
                                </div>
                               
                            </div>
                        </a>
                        
                            
                        
                    </div>
                </div>
                <audio id="audioPlayer" ></audio>
                <div class="user">
                    <img src="images\R-modified.png" alt="">
                </div>
            </nav>
            <div class="content">
                <h1>Shreya Ghoshal - Angaaron</h1>
                <br>
                <p>"Patthar hai vo mujhe",rok tok kahate hain log, Par mom sa hai mera jaanu<br>Nashtar hai vo yahi door door goonje phitoor....</p>
                <br>
                <div class="btn">
                    <audio id="audio" ></audio>
                    <button id="playButton" onclick="togglePlay('songs/Angaaron.mp3')">Play</button>
                    <button>Subscribe</button>
                </div>
                <div class="popular_song">
                    <div class="h4">
                        <h4>Trending Songs</h4>
                        <div class="buttns">
                            <i class="bi bi-arrow-left" id="popu_left"></i>
                            <i class="bi bi-arrow-right" id="popu_right" onclick="click()"></i>
                        </div>
                    </div>
                    <div class="pop_song">
                        <li class="songItem">
                            <div class="img_play">
                                <img src="images/14.jpg" alt="">
                                <i class="bi playListPlay bi-play-circle-fill" id="14"></i>
                            </div>
                            <h5>Taras - from Munjya <br>
                                <div class="subtitle"> Jasmine Sandlas, Sachin–Jigar, Amitabh Bhattacharya</div>
                            </h5>
                        </li>
                        <li class="songItem">
                            <div class="img_play">
                                <img src="images/15.jpg" alt="">
                                <i class="bi playListPlay bi-play-circle-fill" id="15"></i>
                            </div>
                            <h5>Rangisari <br>
                                <div class="subtitle">Kanishk Seth, Kavita Seth</div>
                            </h5>
                        </li>
                        <li class="songItem">
                            <div class="img_play">
                                <img src="images/16.jpg" alt="">
                                <i class="bi playListPlay bi-play-circle-fill" id="16"></i>
                            </div>
                            <h5>Tu Hain Toh Main Hoon <br>
                                <div class="subtitle">Arijit Singh, Irshad Kamil</div>
                            </h5>
                        </li>
                        <li class="songItem">
                            <div class="img_play">
                                <img src="images/17.jpg" alt="">
                                <i class="bi playListPlay bi-play-circle-fill" id="17"></i>
                            </div>
                            <h5>Raanjhan <br>
                                <div class="subtitle">Sachet-Parampara and Parampara Tandon </div>
                            </h5>
                        </li>
                        <li class="songItem">
                            <div class="img_play">
                                <img src="images/18.jpg" alt="">
                                <i class="bi playListPlay bi-play-circle-fill" id="18"></i>
                            </div>
                            <h5>Millionaire <br>
                                <div class="subtitle">Yo Yo Honey Singh</div>
                            </h5>
                        </li>
                        <li class="songItem">
                            <div class="img_play">
                                <img src="images/19.jpg" alt="">
                                <i class="bi playListPlay bi-play-circle-fill" id="19"></i>
                            </div>
                            <h5>Raataan Lambiyan <br>
                                <div class="subtitle">Tanishk Bagchi, Jubin Nautiyal, and Asees Kaur </div>
                            </h5>
                        </li>
                        <li class="songItem">
                            <div class="img_play">
                                <img src="images/20.jpg" alt="">
                                <i class="bi playListPlay bi-play-circle-fill" id="20"></i>
                            </div>
                            <h5>Param Sundari <br>
                                <div class="subtitle">A.R. Rahman, Shreya Ghoshal </div>
                            </h5>
                        </li>
                        <li class="songItem">
                            <div class="img_play">
                                <img src="images/21.jpg" alt="">
                                <i class="bi playListPlay bi-play-circle-fill" id="21"></i>
                            </div>
                            <h5>Shanivaar Raati <br>
                                <div class="subtitle">Sajid-Wajid, Arijit Singh, Shalmali</div>
                            </h5>
                        </li>
                        <li class="songItem">
                            <div class="img_play">
                                <img src="images/22.jpg" alt="">
                                <i class="bi playListPlay bi-play-circle-fill" id="22"></i>
                            </div>
                            <h5>Aaj Ki Raat <br>
                                <div class="subtitle">Amitabh Bhattacharya, Sachin-Jigar</div>
                            </h5>
                        </li>
                        <li class="songItem">
                            <div class="img_play">
                                <img src="images/23.jpg" alt="">
                                <i class="bi playListPlay bi-play-circle-fill" id="23"></i>
                            </div>
                            <h5>Ishq Hai <br>
                                <div class="subtitle">Anurag Saikia</div>
                            </h5>
                        </li>
                        <li class="songItem">
                            <div class="img_play">
                                <img src="images/24.jpg" alt="">
                                <i class="bi playListPlay bi-play-circle-fill" id="24"></i>
                            </div>
                            <h5>Param Sundari <br>
                                <div class="subtitle">A.R. Rahman, Shreya Ghoshal </div>
                            </h5>
                        </li>   
                    </div>
                </div>
                <div class="pop_artist">
                    <div class="h4">
                        <h4>Popular Artists</h4>
                        <div class="buttns">
                            <i class="bi bi-arrow-left" id="art_left"></i>
                            <i class="bi bi-arrow-right" id="art_right"></i>
                        </div>
                    </div>
                    <div class="items">
                        <li>
                            <img src="images/armaan.jpeg" alt="">
                            <h6>Armaan Malik</h4>
                        </li>
                        <li>
                            <img src="images/alanwalker.jpg" alt="">
                            <h6>Alan Walker</h6>
                        </li>
                        <li>
                            <img src="images/sunidhi.jpg" alt="">
                            <h6>Sunidhi Chauhan</h6>
                        </li>
                        <li>
                            <img src="images/shreya.jpg" alt="">
                            <h6>Shreya Ghoshal</h6>
                        </li>
                        <li>
                            <img src="images/yoyo.jpg" alt="">
                            <h6>Yo Yo Honey Singh</h6>
                        </li>
                        <li>
                            <img src="images/taylorr.jpg" alt="">
                            <h6>Taylor Swift</h6>
                        </li>
                        <li>
                            <img src="images/sonu.jpg" alt="">
                            <h6>Sonu Nigam</h6>
                        </li>
                        <li>
                            <img src="images/edshran.jpg" alt="">
                            <h6>Ed Sheeran</h6>
                        </li>
                        <li>
                            <img src="images/badshah.jpg" alt="">
                            <h6>Badshah</h6>
                        </li>
                        <li>
                            <img src="images/arijit.jpg" alt="">
                            <h6>Arijit Singh</h6>
                        </li>
                        <li>
                            <img src="images/Djsnake.webp" alt="">
                            <h6>DJ Snake</h6>
                        </li>

                    </div>
                    <div class="popular_radio">
                        <div class="h4">
                            <h4>Your top mixes</h4>
                            <div class="buttns">
                                <i class="bi bi-arrow-left" id="radio_left"></i>
                                <i class="bi bi-arrow-right" id="radio_right" onclick="click()"></i>
                            </div>
                        </div>
                        <div class="radio">
                            <li>
                                <img src="songimages/Guru-Randhawa.jpg" alt="">
                                <h6>Guru-Randhawa</h6>
                            </li>
                            <li>
                                <img src="songimages/hiphop.png" alt="">
                                <h6>Hip Hop Mix</h6>
                            </li>
                            <li>
                                <img src="songimages/2010mix.png" alt="">
                                <h6>2010 Mix</h6>
                            </li>
                            <li>
                                <img src="songimages/bollywood.jpg" alt="">
                                <h6> Bollywood Non Stop</h6>
                            </li>
                            <li>
                                <img src="songimages/party.jpg" alt="">
                                <h6>Party Mashup</h6>
                            </li>
                            <li>
                                <img src="songimages/lovemashup.jpg" alt="">
                                <h6>Love Mashup</h6>
                            </li>
                            <li>
                                <img src="songimages/sadlove.jpg" alt="">
                                <h6>Sad Love Mashup</h6>
                            </li>
                            <li>
                                <img src="songimages/Valentines.jpg" alt="">
                                <h6>Valentines Lofi Mashup</h6>
                            </li>
                        </div>
                    </div>
                    
                    <div class="popular_album">
                        <div class="h4">
                            <h4>Popular Albums</h4>
                            <div class="buttns">
                                <i class="bi bi-arrow-left" id="album_left"></i>
                                <i class="bi bi-arrow-right" id="album_left" onclick="click()"></i>
                            </div>
                        </div>
                        <div class="album">
                            <li>
                                <div class="img_play">
                                    
                                <img src="images/milli.jpg" alt="">
                                <i class="bi ListPlay bi-play-circle-fill" id="" onclick="glory()"></i>
                                
                                </div>
                                <div class="h6">
                                    <h6>Glory</h6>
                                </div>
                            </li>
                            <li>
                                <div class="img_play">
                                    
                                <img src="images/tum hi ho.jpg" alt="">
                                <i class="bi playListPlay bi-play-circle-fill" id="2"></i>
                                
                                </div>
                                <div class="h6">
                                    <h6>Aashiqui2</h6>
                                </div>
                            </li>
                        </div>
                    </div>

                </div>
            </div>
            
           
        </div>
            
        </div>
        <div class="master_play">
            <div class="wave" id="wave">
                <div class="wave1"></div>
                <div class="wave1"></div>
                <div class="wave1"></div>
            </div>
            <img src="images/yehjawani.jpg" alt="" id="poster_master_play">
            <h5 id="title">
                Yeh Jawaani Hai Deewani
                <div class="subtitle">Pritam </div>
            </h5>
            <div class="icons">
                <i class="bi shuffle bi-music-note-beamed">Next</i>
                <i class="bi bi-skip-start-circle-fill" id="back"></i>
                <i class="bi bi-play-circle-fill" id="masterPlay"></i>
                
                <i class="bi bi-skip-end-circle-fill" id="next"></i>
                <a href="" download="" id="download_music"><i class="bi bi-download" ></i></a>
            </div>
            <span id="start">0.00</span>
            <div class="seekbar">
                <input type="range" id="seek" min="0" max="100">
                <div class="bar2" id="bar2"></div>
                <div class="dot" id="dot"></div>
            </div>
            <span id="end">0:30</span>
            <div class="vol">
                <i class="bi bi-volume-up-fill" id="vol_down"></i>
                <input type="range" min="0" max="100" id="vol">
                <div class="volumebar"></div>
                <div class="dot" id="vol_dot"></div>
                

            </div>
        </div>
    </header>


    <script src="back.js"></script>
</body>
</html>
