"use strict";

//on page load
document.addEventListener("DOMContentLoaded", function() {

    const isDarkMode = localStorage.getItem('dark-theme') === 'true';

    //SELECT ALL ELEMENTS
    const allElements = document.querySelectorAll('*');


    const toggle = document.getElementById("toggle-mode");


    allElements.forEach(element => {
        element.classList.add('no-transition');
    });
    setTimeout(() => {
        allElements.forEach(element => {
            element.classList.remove('no-transition');
        });
    }, 1);

    if (isDarkMode) {
        document.body.classList.add("dark-theme");
        toggle.src = "images/sun.svg";
        toggle.style.filter = "invert(100%)";
    } else {
        toggle.src = "images/moon.svg";
        toggle.style.filter = "none";
    }




    //regular switch
    toggle.onclick = function() {
        //add a disable class
        allElements.forEach(element => {
            element.classList.add('no-transition');
        });

        document.body.classList.toggle("dark-theme");

        //Ensures browser processes changes immediately
        document.documentElement.offsetHeight;

        //Remove class after delay (Short)
        setTimeout(() => {
            allElements.forEach(element => {
                element.classList.remove('no-transition');
            });
        }, 1);

        if (document.body.classList.contains("dark-theme")) {
            localStorage.setItem('dark-theme', 'true');
            toggle.src = "images/sun.svg";
            toggle.style.filter = "invert(100%)";
        } else {
            localStorage.setItem('dark-theme', 'false');
            toggle.src = "images/moon.svg";
            toggle.style.filter = "none";
        }
    };
});