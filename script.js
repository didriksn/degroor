let toggle = true;
const drk = document.getElementById("dark-mode");
const videotitle = document.getElementsByClassName("video-title");
const sidebartext = document.getElementsByClassName("sidebar-text");
let root = document.querySelector(":root");
 
drk.addEventListener("click", function onClick() {
  if (toggle == true) { // DARK MODE
    document.body.style.backgroundColor = "rgb(16,16,16)"; 
    Array.from(videotitle).forEach(el => {
      el.style.color = "white";
    });
    Array.from(sidebartext).forEach(el => {
      el.style.color = "rgb(200,200,200)";
    });

    // Change colors
    document.getElementById("dark-mode-text").innerHTML = "Light Mode"; 
    document.getElementById("search-button").className = "search-button-dark";
    document.getElementById("search-bar").className = "search-bar-dark";

    root.style.setProperty("--header-color", "rgb(40,40,40)");
    root.style.setProperty("--sidebar-color", "rgb(24,24,24)");

    // Change images
    document.getElementById("homeimg").src = "assets/icons/besthaus.png";
    document.getElementById("exploreimg").src = "assets/icons/LogoCompass.png";
    document.getElementById("subscriptionsimg").src = "assets/icons/subdark.png";
    document.getElementById("originalsimg").src = "assets/icons/darkoriginals.png";
    document.getElementById("musicimg").src = "assets/icons/darkmusic.png";
    document.getElementById("libraryimg").src = "assets/icons/darklibrary.png";
    document.getElementById("moonimg").src = "assets/icons/darkmoon.png";

    toggle = false; 
  } 
  
  else { // LIGHT MODE
    document.body.style.backgroundColor = "rgb(239,239,239)"; 
    Array.from(videotitle).forEach(el => {
      el.style.color = "black";
    }); 
    Array.from(sidebartext).forEach(el => {
      el.style.color = "black";
    });

    // Change colors
    document.getElementById("dark-mode-text").innerHTML = "Dark Mode";
    document.getElementById("search-button").className = "search-button";
    document.getElementById("search-bar").className = "search-bar";

    root.style.setProperty("--header-color", "white");
    root.style.setProperty("--sidebar-color", "rgb(231,231,231)");

    // Change images
    document.getElementById("homeimg").src = "assets/icons/home.svg";
    document.getElementById("exploreimg").src = "assets/icons/explore.svg";
    document.getElementById("subscriptionsimg").src = "assets/icons/subscriptions.svg";
    document.getElementById("originalsimg").src = "assets/icons/originals.svg";
    document.getElementById("musicimg").src = "assets/icons/youtube-music.svg";
    document.getElementById("libraryimg").src = "assets/icons/library.svg";
    document.getElementById("moonimg").src = "assets/icons/holemon.png";
  
    toggle = true; 
  };
});