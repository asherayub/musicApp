//? theme change
const toggleLightDark = document.querySelector(".theme-btn")
toggleLightDark.addEventListener("click", () => {
    if (document.body.classList.contains("light")) {
        document.body.classList.remove("light")
        document.body.classList.add("dark")
        toggleLightDark.innerHTML = `<i class="fas fa-moon fa-2x"></i>`
    } else {
        document.body.classList.remove("dark")
        document.body.classList.add("light")
        toggleLightDark.innerHTML = `<i class="fas fa-sun fa-2x"></i>`
    }
})

const allSongs = ["/assets/sounds/Veham Do Baaraa 320 Kbps.mp3",
    "/assets/sounds/Waqt Ke Jungle Do Baaraa 320 Kbps.mp3",
    "/assets/sounds/Kesariya Brahmastra 320 Kbps.mp3",
    "/assets/sounds/Deva Deva Brahmastra 320 Kbps.mp3",
    "/assets/sounds/Akdi Pakdi Liger 320 Kbps.mp3",
    "/assets/sounds/Aafat Liger Hindi 320 Kbps.mp3"
]

const songImages = ["/assets/sounds/images/do-baaraa-2022-500-500.jpg",
    "/assets/sounds/images/waqt-ke-jungle-do-baaraa-500-500.jpg",
    "/assets/sounds/images/kesariya-brahmastra-500-500.jpg",
    "/assets/sounds/images/deva-deva-brahmastra-500-500.jpg",
    "/assets/sounds/images/akdi-pakdi-liger-500-500.jpg",
    "/assets/sounds/images/aafat-liger-hindi-500-500.jpg"
]

const nameOfMusic = ["Veham", "Waqt Ke Jungle", "Kesariya", "Deva Deva", "Akdi Pakdi", "Aafat"]
const nameOfMovie = ["Do Baaraa", "Do Baaraa", "Brahmastra", "Brahmastra", "Liger", "Liger"]
const nameOfArtist = ["Fotty Seven", "Armaan Malik", "Arijit Singh", "Arijit Singh", " Sagar & Vaishnavi Kovvuri", "Deepak Blue & Haripriya"]

let songIndex = 0 // To navigate through all indexes of the Arrays

//    To change the description of music
let musicName = document.querySelector(".music-name")
let movieName = document.querySelector(".movie-name")
let artistName = document.querySelector(".artist-name")

//    initially current song will be at index[0]
let currentSong = new Audio(allSongs[songIndex])
let image = document.querySelector(".music-image img")

const playSong = document.querySelector(".play button")
playSong.addEventListener("click", () => {
    image.setAttribute("src", songImages[songIndex]) // sets src attribute to value of song index in allSongs Array
    image.classList.toggle("playing")
    if (image.classList.contains("playing")) {
        currentSong.play()
        playSong.querySelector("i").classList.remove("fa-play")
        playSong.querySelector("i").classList.add("fa-pause")
    } else {
        currentSong.pause()
        playSong.querySelector("i").classList.add("fa-play")
        playSong.querySelector("i").classList.remove("fa-pause")
    }

})

let playBtn = document.querySelector(".play-btn") // to keep song paused when left or right is pressed
let right = document.querySelector('.fa-arrow-right')
right.addEventListener("click", () => {
    songIndex++
    /* to loop inside allSongs. If user at last index => start from 0.
        If user at -ve index => songIndex = total allSongs Array length */
    if (songIndex > allSongs.length - 1) {
        songIndex = 0
    } else if (songIndex < 0) {
        songIndex = allSongs.length - 1
    }
    image.setAttribute("src", songImages[songIndex])
    currentSong.pause() //?first pause currentSong
    currentSong = new Audio(allSongs[songIndex]) //?update the value of currentSong
    /* ? check if play button is playing song? play song : do not 
    play but change description */
    if (playBtn.classList.contains("fa-pause"))
        currentSong.play()
    musicName.querySelector("h2").textContent = nameOfMusic[songIndex]
    movieName.querySelector("h3").textContent = nameOfMovie[songIndex]
    artistName.querySelector("h5").textContent = nameOfArtist[songIndex]

})
// same as logic for right
let left = document.querySelector(".fa-arrow-left")
left.addEventListener("click", () => {
    songIndex--
    if (songIndex > allSongs.length - 1) {
        songIndex = 0
    } else if (songIndex < 0) {
        songIndex = allSongs.length - 1
    }
    image.setAttribute("src", songImages[songIndex])
    currentSong.pause()
    currentSong = new Audio(allSongs[songIndex])
    if (playBtn.classList.contains("fa-pause"))
        currentSong.play()
    musicName.querySelector("h2").textContent = nameOfMusic[songIndex]
    movieName.querySelector("h3").textContent = nameOfMovie[songIndex]
    artistName.querySelector("h5").textContent = nameOfArtist[songIndex]
})