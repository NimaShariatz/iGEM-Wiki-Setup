"use strict";

function updateProgressTracker(section) {
    //var scrollTotal = article.scrollHeight - window.innerHeight;

    //var scrollSpot = article.scrollTop;
    //console.log("Scroll spot:", scrollSpot + " max scroll heigh ", scrollTotal);

    if(section!=null){
        var position = section.getBoundingClientRect();
        //console.log("Top: " + position.top + "px" + " Bottom: " + position.bottom + "px");

        var screen_location = (position.top - (window.innerHeight/2) + 100);
        

        /*

        if (screen_location < 0){

            link.style.scale = 1;
            link.style.opacity = 1;
            bottom_borders.style.borderImage = "linear-gradient(to right, #e3b707, #e3b707) 1";
        } else {
            link.style.scale = 0.8;
            link.style.opacity = 0.7;
            bottom_borders.style.borderImage = "linear-gradient(to right, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)) 1";

        }
*/

        return screen_location

    }



}


function transform(link, bottom_borders){
    link.style.scale = 1;
    link.style.opacity = 1;
    bottom_borders.style.borderImage = "linear-gradient(to right, #e3b707, #e3b707) 1";

}

function undo(link){
    link.forEach((element) => {
        element.style.scale = 0.8;
        element.style.opacity = 0.7;
    });

}

var article = document.querySelector('article');

var sections = [document.getElementById("HeaderLink1"), document.getElementById("HeaderLink2"), document.getElementById("HeaderLink3"), 
document.getElementById("HeaderLink4"), document.getElementById("HeaderLink5"), document.getElementById("HeaderLink6"), document.getElementById("HeaderLink7"), 
document.getElementById("HeaderLink8"), document.getElementById("HeaderLink9"), document.getElementById("HeaderLink10")]
sections = sections.filter(element => element != null);//filter out the nulls

var links = [document.getElementById("Link1"), document.getElementById("Link2"), document.getElementById("Link3"), 
document.getElementById("Link4"), document.getElementById("Link5"), document.getElementById("Link6"), document.getElementById("Link7"), 
document.getElementById("Link8"), document.getElementById("Link9"), document.getElementById("Link10")]
links = links.filter(element => element != null);//filter out the nulls


var bottom_borders = [document.getElementById("bottom_border1"), document.getElementById("bottom_border2"), document.getElementById("bottom_border3"), 
document.getElementById("bottom_border4"), document.getElementById("bottom_border5"), document.getElementById("bottom_border6"), document.getElementById("bottom_border7"), 
document.getElementById("bottom_border8"), document.getElementById("bottom_border9"), document.getElementById("bottom_border10")]
bottom_borders = bottom_borders.filter(element => element != null);//filter out the nulls






article.addEventListener('scroll', event =>{
    var content0 = updateProgressTracker(sections[0], links[0], bottom_borders[0]);
    var content1 = updateProgressTracker(sections[1], links[1], bottom_borders[1]);
    var content2 = updateProgressTracker(sections[2], links[2], bottom_borders[2]);
    var content3 = updateProgressTracker(sections[3], links[3], bottom_borders[3]);
    var content4 = updateProgressTracker(sections[4], links[4], bottom_borders[4]);
    var content5 = updateProgressTracker(sections[5], links[5], bottom_borders[5]);
    var content6 = updateProgressTracker(sections[6], links[6], bottom_borders[6]);
    var content7 = updateProgressTracker(sections[7], links[7], bottom_borders[7]);
    var content8 = updateProgressTracker(sections[8], links[8], bottom_borders[8]);
    var content9 = updateProgressTracker(sections[9], links[9], bottom_borders[9]);

    


    if(content0 < 0){
        undo(links);
        transform(links[0], bottom_borders[0]);
    }


    if((content1 < 0)){
        undo(links);
        transform(links[1], bottom_borders[1]);
    }
    
    if((content2 < 0)){
        undo(links);
        transform(links[2], bottom_borders[2]);
    }

    if((content3 < 0)){
        undo(links);
        transform(links[3], bottom_borders[3]);
    }


    if((content4 < 0)){
        undo(links);
        transform(links[4], bottom_borders[4]);
    }

    if((content5 < 0 )){
        undo(links);
        transform(links[5], bottom_borders[5]);
    }

    if((content6 < 0 )){
        undo(links);
        transform(links[6], bottom_borders[6]);
    }

    
    if((content7 < 0 )){
        undo(links);
        transform(links[7], bottom_borders[7]);
    }

    if((content8 < 0 )){
        undo(links);
        transform(links[8], bottom_borders[8]);
    }

    if(content9 < 0){
        undo(links);
        transform(links[9], bottom_borders[9]);
    }



});
