"use strict";

var loader = document.getElementById("preloader");

//Actual code:
window.addEventListener("load", function(){
    loader.style.display = "none";
})

//NOTE: THe timeout is just to simulate how a loading page might work
// window.addEventListener("load", function(){
//     setTimeout(function() {
//         loader.style.display = "none";
//     }, 50);
// });