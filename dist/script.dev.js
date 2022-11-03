"use strict";

var toggle = true;
var drk = document.getElementById("dark-mode");
var videotitle = document.getElementsByClassName("video-title");
drk.addEventListener("click", function onClick() {
  if (toggle == true) {
    document.body.style.backgroundColor = "rgb(16,16,16)";
    Array.from(videotitle).forEach(function (el) {
      el.style.color = "white";
    });
    document.getElementById("dark-mode-text").innerHTML = "Light Mode";
    document.getElementById("sidebar").style.backgroundColor = "rgb(24,24,24)";
    toggle = false;
  } else {
    document.body.style.backgroundColor = "rgb(239,239,239)";
    Array.from(videotitle).forEach(function (el) {
      el.style.color = "black";
    });
    document.getElementById("dark-mode-text").innerHTML = "Dark Mode";
    document.getElementById("sidebar").style.backgroundColor = "rgb(231,231,231)";
    toggle = true;
  }

  ;
});