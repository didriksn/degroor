"use strict";

var toggle = true;
var drk = document.getElementById("dark-mode");
var videotitle = document.getElementsByClassName("video-title");
var sidebartext = document.getElementsByClassName("sidebar-text");
drk.addEventListener("click", function onClick() {
  if (toggle == true) {
    // DARK MODE
    document.body.style.backgroundColor = "rgb(16,16,16)";
    Array.from(videotitle).forEach(function (el) {
      el.style.color = "white";
    });
    Array.from(sidebartext).forEach(function (el) {
      el.style.color = "rgb(200,200,200)";
    });
    document.getElementById("dark-mode-text").innerHTML = "Light Mode";
    document.getElementById("sidebar").style.backgroundColor = "rgb(24,24,24)";
    document.getElementById("header").style.backgroundColor = "rgb(40,40,40)";
    document.getElementById("search-button").className = "search-button-dark";
    document.getElementById("search-bar").className = "search-bar-dark";
    toggle = false;
  } else {
    // LIGHT MODE
    document.body.style.backgroundColor = "rgb(239,239,239)";
    Array.from(videotitle).forEach(function (el) {
      el.style.color = "black";
    });
    Array.from(sidebartext).forEach(function (el) {
      el.style.color = "black";
    });
    document.getElementById("dark-mode-text").innerHTML = "Dark Mode";
    document.getElementById("sidebar").style.backgroundColor = "rgb(231,231,231)";
    document.getElementById("header").style.backgroundColor = "white";
    document.getElementById("search-button").className = "search-button";
    document.getElementById("search-bar").className = "search-bar";
    toggle = true;
  }

  ;
});