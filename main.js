var contact = document.getElementById('contact');
var about = document.getElementById('about');
var aboutTab = document.getElementById('about-tab');
var contactTab = document.getElementById('contact-tab');

var spotify = document.getElementById('spotify');
var playlist = document.getElementById('playlist');
var spotifyTab = document.getElementById('spotify-tab');
var playlistTab = document.getElementById('playlist-tab');



const handleAboutClick = () => {
    contact.style.display = 'none';
    about.style.display = 'flex';
}

const handleContactClick = () => {
    about.style.display = 'none';
    contact.style.display = 'flex';
}

const handleSpotifyClick = () => {
    playlist.style.display = 'none';
    spotify.style.display = 'flex';
}

const handlePlaylistClick = () => {
    spotify.style.display = 'none';
    playlist.style.display = 'flex';
}

aboutTab.addEventListener('click', handleAboutClick);
contactTab.addEventListener('click', handleContactClick);
spotifyTab.addEventListener('click', handleSpotifyClick);
playlistTab.addEventListener('click', handlePlaylistClick);

