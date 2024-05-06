var article = document.querySelector('article');

function updateProgressBar() {
    var scrollTotal = article.scrollHeight - window.innerHeight;

    var scrollSpot = article.scrollTop;
    //console.log("Scroll spot:", scrollSpot + " max scroll heigh ", scrollTotal);

    var element = document.getElementById("bandy");
    var position = element.getBoundingClientRect();
    //console.log("Top: " + position.top + "px" + " Bottom: " + position.bottom + "px");

    var screen_location = (position.top - (window.innerHeight/2))
    

    if (screen_location < 0){
        element.style.color="blue";
    } else{
        element.style.color="red";
    }




}






article.addEventListener('scroll', updateProgressBar);
