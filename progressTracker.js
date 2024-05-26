
function updateProgressTracker(section, link, bottom_borders) {
    //var scrollTotal = article.scrollHeight - window.innerHeight;

    //var scrollSpot = article.scrollTop;
    //console.log("Scroll spot:", scrollSpot + " max scroll heigh ", scrollTotal);

    
    var position = section.getBoundingClientRect();
    //console.log("Top: " + position.top + "px" + " Bottom: " + position.bottom + "px");

    var screen_location = (position.top - (window.innerHeight/2) - 100);
    

    if (screen_location < 0){

        link.style.scale = 1;
        link.style.opacity = 1;
        bottom_borders.style.borderImage = "linear-gradient(to right, #e3b707, #e3b707) 1";
    } else {
        link.style.scale = 0.8;
        link.style.opacity = 0.7;
        bottom_borders.style.borderImage = "linear-gradient(to right, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)) 1";

    }



}

var article = document.querySelector('article');

var sections = [document.getElementById("HeaderLink1"), document.getElementById("HeaderLink2"), document.getElementById("HeaderLink3"), 
document.getElementById("HeaderLink4"), document.getElementById("HeaderLink5"), document.getElementById("HeaderLink6"), document.getElementById("HeaderLink7"), 
document.getElementById("HeaderLink8"), document.getElementById("HeaderLink9"), document.getElementById("HeaderLink10")]


var links = [document.getElementById("Link1"), document.getElementById("Link2"), document.getElementById("Link3"), 
document.getElementById("Link4"), document.getElementById("Link5"), document.getElementById("Link6"), document.getElementById("Link7"), 
document.getElementById("Link8"), document.getElementById("Link9"), document.getElementById("Link10")]

var bottom_borders = [document.getElementById("bottom_border1"), document.getElementById("bottom_border2"), document.getElementById("bottom_border3"), 
document.getElementById("bottom_border4"), document.getElementById("bottom_border5"), document.getElementById("bottom_border6"), document.getElementById("bottom_border7"), 
document.getElementById("bottom_border8"), document.getElementById("bottom_border9"), document.getElementById("bottom_border10")]



article.addEventListener('scroll', event =>{
    updateProgressTracker(sections[0], links[0], bottom_borders[0]);
    updateProgressTracker(sections[1], links[1], bottom_borders[1]);
    updateProgressTracker(sections[2], links[2], bottom_borders[2]);
    updateProgressTracker(sections[3], links[3], bottom_borders[3]);
    updateProgressTracker(sections[4], links[4], bottom_borders[4]);
    updateProgressTracker(sections[5], links[5], bottom_borders[5]);
    updateProgressTracker(sections[6], links[6], bottom_borders[6]);
    updateProgressTracker(sections[7], links[7], bottom_borders[7]);
    updateProgressTracker(sections[8], links[8], bottom_borders[8]);
    updateProgressTracker(sections[9], links[9], bottom_borders[9]);




});
