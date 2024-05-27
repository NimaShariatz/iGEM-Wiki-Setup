"use strict";

var article = document.querySelector('article');

function updateProgressBar() {
    //retreive total scroll height of the article
    var scrollTotal = article.scrollHeight - window.innerHeight;

    //retire current scroll location
    var scrollSpot = article.scrollTop;
    //console.log("Scroll spot:", scrollSpot + " max scroll heigh ", scrollTotal);

    //Calulate percent of article scrolled, cap it to 100
    var percentage = (scrollSpot / scrollTotal) * 100
    if (percentage > 100){
        percentage = 100;
    }

    //Add % to make it a percentage
    document.querySelector('#progress-bar').style.setProperty('--scrollProgress', percentage+"%")
}

article.addEventListener('scroll', updateProgressBar);